import { CircleButton, CommonButton } from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Box, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HeadingSection from "../HeadingSection";
import styled from "@emotion/styled";
import SubscribeButton from "./SubscribeButton";

import { useSelector } from "react-redux";
import Link from "next/link";
const PlanWrapper = styled(Flex)(() => ({
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 10px",
  "&.active-plan": {
    border: `1px solid ${colors.primary}`,
  },
  ":hover": {
    cursor: "pointer",
  },
}));


const PlanItem = () => {
  return (
    <PlanWrapper data-plan={1} className="active-plan planItem">
      <Text fontSize={24} fontWeight={700}>
        FREE
      </Text>
      <Box>
        <Text fontSize={24}>$0.00</Text>
      </Box>
    </PlanWrapper>
  );
};
const MonthlyPlan = () => {
  return (
    <PlanWrapper data-plan={2} className="planItem">
      <Text fontSize={24} fontWeight={700}>
        EPIC
      </Text>
      <Box textAlign={"right"}>
        <Text bg={"#3d5a74"} px={2} color={colors.darkerText}>
          $25.99
        </Text>
        <Text fontSize={24}>$20.92</Text>
      </Box>
    </PlanWrapper>
  );
};

const Plan = () => {
  const { userDetails } = useSelector((state) => state.user);
  const [tab, setTab] = useState(1);
  useEffect(() => {
    const plans = document.querySelectorAll(".planItem");
    plans.forEach(function (item, i) {
      item.addEventListener("click", () => {
        let plan = item.getAttribute("data-plan");
        plans.forEach((_item) => _item.classList.remove("active-plan"));
        item.classList.add("active-plan");
        setTab(parseInt(plan));
      });
    });
  }, []);

  return (
    <>
      <Flex
        bg={colors.darkBg}
        justify="center"
        id="plan"
        position="relative"
        pt={8}
        pb={32}
      >
        <Wrapper flexDir={{ base: "column" }} gap={8} zIndex={2}>
          <Box>
            <HeadingSection title={"Subcribe"} />
          </Box>
          <Flex
            flexDir={"column"}
            borderTop={`4px solid ${colors.primary}`}
            p={4}
          >
            <Flex gap={4} flexDir={{ base: "column", lg: "row" }}>
              <Box w={{ base: "100%", lg: "40%" }}>
                <Flex p={4} flexDir={"column"} border={`1px solid #3d5a74`}>
                  <PlanItem />
                  <Divider my={2} />
                  <MonthlyPlan />
                </Flex>
              </Box>
              <Box w={{ base: "100%", lg: "60%" }}>
                <Flex p={4} flexDir={"column"} border={`1px solid #3d5a74`}>
                  <Flex gap={10} p={5} flexDir={{ base: "column", sm: "row" }} alignItems={{ base: "center", sm: "flex-start" }}>
                    <Image
                      src={tab === 1 ? "/logo_1.svg" : "/logo_footer.svg"}
                      objectFit="cover"
                      borderRadius={24}
                      w={100}
                      zIndex={1}
                    />
                    <Box>
                      <Text
                        textTransform="uppercase"
                        color={colors.primary}
                        fontWeight={800}
                      >
                        {tab === 1 ? <> FREE.</> : <> EPIC.</>}
                      </Text>
                      <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ad officia deleniti magni rerum iure commodi quasi
                        temporibus? Possimus a animi ipsum saepe iusto.
                        Accusamus neque fuga sint, totam delectus dolores.
                      </Text>
                      <Flex
                        py={5}
                        justifyContent={{ base: "center", lg: "flex-start" }}
                      >
                        {
                          userDetails && tab === 2  ? (
                            <SubscribeButton userDetails={userDetails} />
                          ) : (
                            !userDetails ? (
                              <Link href="/auth/login">
                                <CommonButton>LOGIN TO BUY</CommonButton>
                              </Link>
                            ) : null

                          )
                        }
                      </Flex>

                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Wrapper>
      </Flex>
      <Box
        bgImage={"/banner-subcribe.jpeg"}
        bgPos="center center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={20}
        minW={"100vw"}
      />
    </>
  );
};

export default Plan;
