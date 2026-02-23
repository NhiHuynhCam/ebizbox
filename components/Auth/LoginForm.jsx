import { colors } from "@/utils/colors";
import {
  Box,
  Flex,
  Heading,
  Input,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CommonButton } from "../Button";
import useLoginHook from "@/libs/Hooks/useLoginHook";

const LoginForm = ({ previousRoute }) => {
  const {
    loginDetails,
    handleSendOTP,
    isLoading,
    handleChange,
    step,
  } = useLoginHook(previousRoute);
  const { email, otp } = loginDetails;
  return (
    <Flex
      bg={colors.darkBg}
      bgImage={"/bg/bg.jpg"}
      bgPos="center center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
    >
      <VStack w="full" spacing={16}>
        <VStack w="full" spacing={8}>
          <Stack
            w="full"
            maxW={["full", "md"]}
            as="form"
            onSubmit={handleSendOTP}
            bg={colors.darkBg}
            border="1px solid"
            borderColor={colors.primary}
            rounded={20}
            divider={<StackDivider borderColor="gray.200" />}
            spacing={6}
            pt={9}
            pb={6}
          >
            <Heading pl={6} fontSize="xl">
              Log in to your account
            </Heading>

            <Stack px={6} spacing={6}>
              <Stack spacing={1}>
                <Text>Email Address</Text>
                <Input
                  size="lg"
                  placeholder="Enter email address"
                  type="email"
                  isRequired
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </Stack>


              <Box w="full" pt={9}>
                <CommonButton
                  type="submit"
                  width="full"
                  isLoading={isLoading}
                  loadingText="Checking..."
                >
                  Send OTP
                </CommonButton>
              </Box>
            </Stack>
          </Stack>

        </VStack>
      </VStack>

    </Flex>
  );
};

export default LoginForm;
