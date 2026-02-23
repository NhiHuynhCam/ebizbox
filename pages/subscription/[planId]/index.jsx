import {
  HStack,
  VStack,
  Text,
  RadioGroup,
  Radio,
  Stack,
  Divider,
  Box,
  Button,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CheckoutButton from "../components/CheckoutButton";
import PlanItem from "../components/PlanItem";

const planPrices = {
  1: 0,
  2: 10,
  3: 20,
  4: 50,
};

function Main({
  planId,
  term,
  setTerm,
  saveMap,
  setSaveMap,
  shareMap,
  setShareMap,
}) {
  const handleTermChange = (newTerm) => {
    setTerm(newTerm);
  };

  const handleSaveMapChange = (newSaveMap) => {
    setSaveMap(newSaveMap);
  };

  const handleShareMapChange = (newShareMap) => {
    setShareMap(newShareMap);
  };

  return (
    <VStack
      align={"start"}
      justify={"start"}
      flex={{ base: 2, lg: 7 }}
      p={4}
      bg={
        "linear-gradient(0deg, rgba(9, 7, 44, 0.7) 7.41%, rgba(161, 59, 215, 0.7) 130.42%)"
      }
      height={"full"}
      rounded={"lg"}
    >
      <Text fontSize={"5xl"} fontWeight={"bold"} color="white">
        {planId === "2"
          ? "Packack 1 (Medium)"
          : planId === "3"
          ? "Package 2 (Premium)"
          : planId === "4"
          ? "VIP"
          : "Free"}
      </Text>

      <VStack
        paddingLeft={"10px"}
        align={"start"}
        justify={"start"}
        width={"full"}
        gap={6}
      >
        {planId !== "1" && (
          <Box width={"full"}>
            <Text fontSize={"2xl"} fontWeight={"bold"} color="white">
              Select term length:
            </Text>
            <Text fontSize={"xs"} color="white">
              Lock in your savings with a multi-year term
            </Text>
            <RadioGroup
              onChange={handleTermChange}
              value={term}
              colorScheme={"pink"}
            >
              <Stack spacing={2} width={"100%"}>
                <HStack width="100%" justify="space-between">
                  <Radio value="1">1 month</Radio>
                  <HStack>
                    <Text fontSize={"3xl"} color="white">
                      ${planPrices[planId]}
                    </Text>
                    <Text fontSize={"sm"} color="white">
                      /mo
                    </Text>
                  </HStack>
                </HStack>
                <Divider width="100%" />
                <HStack width="100%" justify="space-between">
                  <Radio value="2">6 months</Radio>
                  <HStack>
                    <Text fontSize={"3xl"} color="white">
                      ${planPrices[planId] * 6}
                    </Text>
                    <Text fontSize={"sm"} color="white">
                      /mo
                    </Text>
                  </HStack>
                </HStack>
                <Divider width="100%" />
                <HStack width="100%" justify="space-between">
                  <Radio value="3">12 months</Radio>
                  <HStack>
                    <Text fontSize={"3xl"} color="white">
                      ${planPrices[planId] * 12}
                    </Text>
                    <Text fontSize={"sm"} color="white">
                      /mo
                    </Text>
                  </HStack>
                </HStack>
              </Stack>
            </RadioGroup>
          </Box>
        )}

        {planId == "1" && (
          <Box width={"full"}>
            <Text fontSize={"2xl"} fontWeight={"bold"} color="white">
              Save Map
            </Text>
            <RadioGroup
              colorScheme={"pink"}
              onChange={handleSaveMapChange}
              value={saveMap}
            >
              <Stack spacing={2}>
                <Radio value="1">Cannot save</Radio>
                <Divider />
                <Radio value="2">Can save</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        )}

        <Box width={"full"}>
          <Text fontSize={"2xl"} fontWeight={"bold"} color="white">
            Share Map
          </Text>
          <RadioGroup
            colorScheme="pink"
            onChange={handleShareMapChange}
            value={shareMap}
          >
            <Stack spacing={2}>
              <Radio value="1">No</Radio>
              <Divider />
              <HStack width="100%" justify="space-between">
                <Radio value="2">10 maps ($5/map)</Radio>
                <Text fontSize={"3xl"} color="white">
                  $50
                </Text>
              </HStack>
              <Divider />
              <HStack width="100%" justify="space-between">
                <Radio value="3">20 maps ($3/map)</Radio>
                <Text fontSize={"3xl"} color="white">
                  $60
                </Text>
              </HStack>
              <Divider />
              <HStack width="100%" justify="space-between">
                <Radio value="4">100 maps ($2/map)</Radio>
                <Text fontSize={"3xl"} color="white">
                  $200
                </Text>
              </HStack>
            </Stack>
          </RadioGroup>
        </Box>
      </VStack>
    </VStack>
  );
}

function Summary({ planId, selectedTerm, saveMap, shareMap }) {
  const prices = {
    1: { months: "1 month", price: 1, discount: 0 },
    2: { months: "6 months", price: 6, discount: 0.05 },
    3: { months: "12 months", price: 12, discount: 0.1 },
  }; // price => price * month
  let discount = prices[selectedTerm].discount || 0;
  let total = prices[selectedTerm].price * planPrices[planId];
  let shareMapCost = 0;

  if (saveMap == "2") {
    total += 5;
  }

  if (shareMap === "2") {
    shareMapCost = 50;
  } else if (shareMap === "3") {
    shareMapCost = 60;
  } else if (shareMap === "4") {
    shareMapCost = 200;
  }

  total += shareMapCost;

  return (
    <VStack
      align={"start"}
      justify={"start"}
      flex={{ base: 1, lg: 3 }}
      p={4}
      bg={
        "linear-gradient(0.62deg, rgba(4, 8, 31, 0.7) 8.02%, rgba(56, 208, 255, 0.7) 130.09%, rgba(44, 93, 218, 0.7) 130.11%)"
      }
      marginLeft={{ base: 0, md: 4 }}
      gap={4}
      rounded={"lg"}
    >
      <Text fontSize={"2xl"} fontWeight={"semibold"} color="white">
        Order Summary
      </Text>
      <HStack justify={"space-between"} width={"full"} gap={2}>
        <Text flex={4} color="white">
          {planId === "2"
            ? "Packack 1 (Medium)"
            : planId === "3"
            ? "Package 2 (Premium)"
            : planId === "4"
            ? "VIP"
            : "Free"}
        </Text>
        <VStack flex={2} align={"end"}>
          <Text color="white">
            ${planPrices[planId] * prices[selectedTerm].price}
          </Text>
          {planId !== "1" && (
            <Text color="white">{prices[selectedTerm]?.months}</Text>
          )}
        </VStack>
      </HStack>
      {planId == 1 ? (
        <Box>
          <Text fontWeight={"bold"}>Base:</Text>
          <Text>Can build map</Text>
          <Text>Map square limit: 1x1</Text>
          <Text>Can NOT save map</Text>
          <Text>Can NOT share map</Text>
          <Text>Voxedit: Can NOT save</Text>
        </Box>
      ) : planId == 2 ? (
        <Box>
          <Text fontWeight={"bold"}>Base:</Text>
          <Text>Can build map</Text>
          <Text>Map square limit: (FREE) + 2x2</Text>
          <Text>Can save map</Text>
          <Text>Can share map (max: 10 map)</Text>
          <Text>Voxedit: Can save (model...)</Text>
          <Text>Market share: 95%</Text>
          <Text>Multiplayer</Text>
        </Box>
      ) : planId == 3 ? (
        <Box>
          <Text fontWeight={"bold"}>Base:</Text>
          <Text>Can build map</Text>
          <Text>Map square limit: (Package 1) + 3x3</Text>
          <Text>Can save map</Text>
          <Text>Can share map (max: 50 map)</Text>
          <Text>Voxedit: Can save (model...)</Text>
          <Text>Market share: 96%</Text>
          <Text>Multiplayer</Text>
        </Box>
      ) : planId == 4 ? (
        <Box>
          <Text fontWeight={"bold"}>Base:</Text>
          <Text>Can build map</Text>
          <Text>Map square limit: (Package 2) + 4x4</Text>
          <Text>Can save map</Text>
          <Text>Can share map (unlimited)</Text>
          <Text>Voxedit: Can save (model...)</Text>
          <Text>Market share: 97%</Text>
          <Text>Multiplayer</Text>
        </Box>
      ) : (<></>)}
      <Divider />
      <Text fontWeight={'bold'}>Extra:</Text>
      {saveMap === "2" && (
        <HStack width={"full"} justify={"space-between"}>
          <Text color="white">Save Map</Text>
          <Text color="white">$5</Text>
        </HStack>
      )}
      {shareMap !== "1" && (
        <HStack width={"full"} justify={"space-between"}>
          <Text color="white">Share Map</Text>
          <Text color="white">${shareMapCost}</Text>
        </HStack>
      )}
      {discount > 0 && (
        <HStack width={"full"} justify={"space-between"}>
          <Text color="white">Discount</Text>
          <Text color="white">-{discount * 100}%</Text>
        </HStack>
      )}
      <Divider />
      <HStack width={"full"} justify={"space-between"}>
        <Text color="white">Total</Text>
        <VStack align={"end"}>
          {discount > 0 && (
            <Text color="white" textDecoration={"line-through"}>
              ${total}
            </Text>
          )}
          <Text color="white">${total - total * discount}</Text>
        </VStack>
      </HStack>
      <HStack></HStack>
      <CheckoutButton
        planId={planId}
        term={selectedTerm}
        saveMap={saveMap}
        shareMap={shareMap}
      />
    </VStack>
  );
}

function Plan() {
  const router = useRouter();
  const { planId } = router.query;

  const { userDetails } = useSelector((state) => state.user);
  if (!userDetails) {
    router.push("/auth/login?redirect=true");
    return null;
  }

  const [selectedTerm, setTerm] = useState("1");
  const [saveMap, setSaveMap] = useState("1");
  const [shareMap, setShareMap] = useState("1");
  const isValidPlan = planId <= 4 && planId >= 1;
  return (
    <>
      <Navbar />
      {isValidPlan ? (
        <Box
          display={"flex"}
          flexDirection={{ base: "column", lg: "row" }}
          spacing={4}
          align={"start"}
          paddingX={{ base: "20px", sm: "50px", lg: "100px" }}
          paddingTop={"100px"}
          width={"100%"}
        >
          <Main
            term={selectedTerm}
            setTerm={setTerm}
            saveMap={saveMap}
            setSaveMap={setSaveMap}
            shareMap={shareMap}
            setShareMap={setShareMap}
            planId={planId}
          />
          <Summary
            selectedTerm={selectedTerm}
            saveMap={saveMap}
            shareMap={shareMap}
            planId={planId}
          />
        </Box>
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"100px"}
        >
          <Text
            padding={"50px"}
            borderRadius={"lg"}
            fontSize={"3xl"}
            height={"80vh"}
            fontWeight={"bold"}
          >
            Invalid plan
          </Text>
        </Box>
      )}
      <Footer />
    </>
  );
}

export default Plan;
