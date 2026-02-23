import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Spinner, Box } from "@chakra-ui/react";
import { useState } from "react";

const TopupCheckout = ({ shareMap, mapSq, saveMap }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const share = Number(shareMap);
  const mapsq = Number(mapSq) + 1;
  const save = Number(saveMap) == 1 ? true : false;
  const token = localStorage.getItem("base_acccess_token");

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/subscriptionWithStripe/topup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            shareMap: share,
            mapSquareLimit: mapsq,
            saveMap: save,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const sessionData = await response.json();
      const { url } = sessionData;
      window.location.href = url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Button colorScheme="purple" width="full">
          <Spinner size="sm" mr={2} />
          <span>Loading...</span>
        </Button>
      ) : (
        <Button
          colorScheme="purple"
          width="full"
          onClick={handleCheckout}
          disabled={!stripe || !elements}
        >
          Continue
        </Button>
      )}
    </>
  );
};

export default TopupCheckout;
