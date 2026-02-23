import Button from "@/components/Button";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
  Stack,
  Radio,
  RadioGroup,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import TopupCheckout from "./components/TopupCheckout";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { useState } from "react";

const maxShareMap = 9999;

const Main = ({
  user,
  mapSq,
  setMapSq,
  shareMap,
  setShareMap,
  saveMap,
  setSaveMap,
}) => {
  const handleMapSquareChange = (value) => {
    setMapSq(value);
  };
  const handleShareMapChange = (event) => {
    let value = event.target.value;
    if (value > maxShareMap) {
      value = maxShareMap;
    }
    setShareMap(parseInt(value) || 0);
  };

  const handleSaveMapChange = (value) => {
    setSaveMap(value);
  };

  let shareMapCost = shareMap * 5;
  if (shareMap >= 20 && shareMap < 100) {
    shareMapCost = shareMap * 3;
  }
  if (shareMap >= 100) {
    shareMapCost = shareMap * 2;
  }

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
      <Text fontSize={"4xl"}>Buy share map</Text>
      <Box width={"full"} p={4}>
        <HStack spacing={4} alignItems="center">
          <Input
            fontSize={"2xl"}
            variant="flushed"
            type="number"
            min={0}
            max={9999}
            onChange={handleShareMapChange}
            value={shareMap}
          />
          <Text fontSize={"3xl"} color="white">
            ${shareMapCost}
          </Text>
        </HStack>
      </Box>
      <Text fontSize={"4xl"}>Buy map square</Text>
      <Box width={"full"} p={4}>
        <RadioGroup
          colorScheme="pink"
          onChange={handleMapSquareChange}
          value={mapSq}
        >
          <Stack spacing={2}>
            <Radio value="0">No</Radio>
            <Divider />
            <HStack width="100%" justify="space-between">
              <Radio value="1">2x2</Radio>
              <Text fontSize={"3xl"} color="white">
                $2
              </Text>
            </HStack>
            <Divider />
            <HStack width="100%" justify="space-between">
              <Radio value="2">3x3</Radio>
              <Text fontSize={"3xl"} color="white">
                $4
              </Text>
            </HStack>
            <Divider />
            <HStack width="100%" justify="space-between">
              <Radio value="3">4x4</Radio>
              <Text fontSize={"3xl"} color="white">
                $8
              </Text>
            </HStack>
          </Stack>
        </RadioGroup>
      </Box>
      {user?.subscriptionType == 0 && (
        <>
          <Text fontSize={"4xl"}>Can save map</Text>
          <Box width={"full"} p={4}>
            <RadioGroup
              colorScheme="pink"
              value={saveMap}
              onChange={handleSaveMapChange}
            >
              <Stack spacing={2}>
                <Radio value="0">No</Radio>
                <Divider />
                <Radio value="1">Yes</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </>
      )}
    </VStack>
  );
};

const Summary = ({ user, mapSq, shareMap, saveMap }) => {
  let total = 0;
  let shareMapCost = shareMap * 5;
  if (shareMap >= 20 && shareMap < 100) {
    shareMapCost = shareMap * 3;
  } else if (shareMap >= 100) {
    shareMapCost = shareMap * 2;
  }
  total += shareMapCost;
  if (mapSq == 1) {
    total += 2;
  } else if (mapSq == 2) {
    total += 4;
  } else if (mapSq == 3) {
    total += 8;
  }
  if (saveMap == 1) {
    total += 5;
  }
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
      height={"fit-content"}
    >
      <Text fontSize={"2xl"} fontWeight={"semibold"} color="white">
        Order Summary
      </Text>
      <Stack width={"full"}>
        <Text fontSize={"xl"}>Share map</Text>
        <HStack width={"full"} justify="space-between">
          <Text>{shareMap}</Text>
          <Text>${shareMapCost}</Text>
        </HStack>
      </Stack>
      <Stack width={"full"}>
        <Text fontSize={"xl"}>Map square</Text>
        <HStack width={"full"} justify="space-between">
          {mapSq == 0 && (
            <>
              <Text>No</Text>
              <Text>$0</Text>
            </>
          )}
          {mapSq == 1 && (
            <>
              <Text>2x2</Text>
              <Text>$2</Text>
            </>
          )}
          {mapSq == 2 && (
            <>
              <Text>3x3</Text>
              <Text>$4</Text>
            </>
          )}
          {mapSq == 3 && (
            <>
              <Text>4x4</Text>
              <Text>$8</Text>
            </>
          )}
        </HStack>
      </Stack>
      {user?.subscriptionType == 0 && (
        <>
          <Stack width={"full"}>
            <Text fontSize={"xl"}>Can save map</Text>
            <HStack width={"full"} justify="space-between">
              {saveMap == 0 && (
                <>
                  <Text>No</Text>
                  <Text>$0</Text>
                </>
              )}
              {saveMap == 1 && (
                <>
                  <Text>Yes</Text>
                  <Text>$5</Text>
                </>
              )}
            </HStack>
          </Stack>
        </>
      )}
      <Divider />
      <HStack width={"full"} justify="space-between">
        <Text fontSize={"xl"}>Total</Text>
        <Text fontSize={"xl"}>${total}</Text>
      </HStack>
      <TopupCheckout shareMap={shareMap} mapSq={mapSq} saveMap={saveMap} />
    </VStack>
  );
};
const Topup = () => {
  const router = useRouter();
  const { userDetails } = useSelector((state) => state.user);

  if (!userDetails) {
    router.push("/auth/login?redirect=true");
  }
  const [mapSq, setMapSq] = useState("0");
  const [shareMap, setShareMap] = useState("0");
  const [saveMap, setSaveMap] = useState("0");
  return (
    <Box>
      <Navbar />
      <Box width={"full"} display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          flexDirection={{ base: "column", lg: "row" }}
          spacing={4}
          align={"start"}
          paddingX={{ base: "20px", sm: "50px", lg: "100px" }}
          paddingTop={"100px"}
          width={"100%"}
          maxWidth={"1500px"}
          justifySelf={"center"}
        >
          <Main
            user={userDetails}
            mapSq={mapSq}
            setMapSq={setMapSq}
            shareMap={shareMap}
            setShareMap={setShareMap}
            saveMap={saveMap}
            setSaveMap={setSaveMap}
          />
          <Summary
            user={userDetails}
            mapSq={mapSq}
            shareMap={shareMap}
            saveMap={saveMap}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Topup;
