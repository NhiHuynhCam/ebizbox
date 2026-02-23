import Button from "@/components/Button";
import { CommonButton } from "@/components/Button";
import { FaRegHandPointUp } from "react-icons/fa";
import { colors } from "@/utils/colors";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import CancelPlan from "./CancelPlan";

function VipPlan({ plan, onOpenHistory, expDate }) {
  return (
    <Flex flexDir={"column"} mb={5}>
      <VStack
        alignItems={"flex-start"}
        border={`1px solid #08C5BF`}
        borderRadius={10}
        overflow={"hidden"}
      >
        <HStack
          w={"full"}
          p={5}
          bg={colors.secondaryBg}
          borderBottom={`1px solid #08C5BF`}
        >
          <Text flex={1} fontSize={"xl"} fontWeight={600}>
            Current Package
          </Text>
          <HStack spacing={3}>
            <Button border={0} onClick={onOpenHistory}>
              Payment History
            </Button>
            <Link href={"/subscription"}>
              <Button border={0}>Upgrade</Button>
            </Link>
            <Link href={"/topup"}>
              <Button border={0}>Topup</Button>
            </Link>
          </HStack>
        </HStack>
        <VStack alignItems={"flex-start"} w={"full"}>
        <Flex p={5} w={"full"} pr={10} justifyContent={"space-between"}>
            <VStack align={"start"}  >
              <Text fontSize={"4xl"} fontWeight={600}>
                {plan}
              </Text>
              <Text>Expiration: {expDate}</Text>
            </VStack>
            <CancelPlan />
          </Flex>
          <HStack
            w={"full"}
            alignItems={"flex-start"}
            p={5}
            bg={`linear-gradient(0.62deg, rgba(4, 8, 31, 0.7) 8.02%, rgba(56, 208, 255, 0.7) 130.09%, rgba(44, 93, 218, 0.7) 130.11%)`}
          >
            <Box flex={1}>
              <List spacing={5}>
                <ListItem>
                  <ListIcon as={FaCheck} color="#08C5BF" />
                  Can build map
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheck} color="#08C5BF" />
                  Map square limit: (Package 2) + 4x4
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheck} color="#08C5BF" />
                  Can save map
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheck} color="#08C5BF" />
                  Can share map (Unlimited)
                </ListItem>
              </List>
            </Box>
            <Box flex={1}>
              <List spacing={5}>
                <ListItem>
                  <ListIcon as={FaCheck} color="#08C5BF" />
                  Voxedit: can save (model...)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheck} color="#08C5BF" />
                  Market share: 97%
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheck} color="#08C5BF" />
                  Multiplayer
                </ListItem>
              </List>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default VipPlan;
