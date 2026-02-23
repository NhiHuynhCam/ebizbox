import React, { useState, useEffect } from "react";
import FreePlan from "./Package/FreePlan";
import PaymentHistory from "./Package/PaymentHistory";
import MediumPlan from "./Package/MediumPlan";
import PremiumPlan from "./Package/PremiumPlan";
import VipPlan from "./Package/VipPlan";
import { useDisclosure, HStack, Divider, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubcriptions } from "@/redux/slices/userSlice";
import { subcriptionData } from "@/utils/constants";

function TabPackage({ user }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { loading, subcriptions } = useSelector((state) => state.user);
  const [expDate, setExpDate] = useState(null);
  useEffect(() => {
    dispatch(fetchSubcriptions());
    getExpDate();
  }, [dispatch]);
  const token = localStorage.getItem("base_acccess_token");
  
  const getExpDate = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setExpDate(data.user.dateExpired);
    } catch (error) {
      console.error("Error fetching expiration date:", error);
    }
  };
  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}-${month}-${year}`;
  }
  const formattedDate = formatDate(expDate);
  const sub = user?.subscriptionType;

  return (
    <>
      {sub == 0 ? (
        <FreePlan plan={"FREE"} onOpenHistory={onOpen} />
      ) : sub == 1 ? (
        <MediumPlan
          plan={"PACKAGE 1 (MEDIUM)"}
          onOpenHistory={onOpen}
          expDate={formattedDate}
        />
      ) : sub == 2 ? (
        <PremiumPlan
          plan={"PACKAGE 2 (PREMIUM)"}
          onOpenHistory={onOpen}
          expDate={formattedDate}
        />
      ) : sub == 3 ? (
        <VipPlan plan={"VIP"} onOpenHistory={onOpen} expDate={formattedDate} />
      ) : null}

      <PaymentHistory
        loading={loading}
        subcriptions={subcriptions}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default TabPackage;
