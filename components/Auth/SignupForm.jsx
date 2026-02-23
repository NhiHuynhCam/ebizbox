import { colors } from "@/utils/colors";
import {
  Box,
  Button,

  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CommonButton } from "../Button";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

import { Logo } from "../Logo";
import Link from "next/link";
import useLoginHook from "@/libs/Hooks/useLoginHook";

const SignupForm = ({previousRoute}) => {


  const {
    loginDetails,
    handleSignup,
    isLoading,
    handleChange,
    showPassword,
    setShowPassword,
  } = useLoginHook(previousRoute);
  const { email, password } = loginDetails;

  return (
    <Flex
      bg={colors.darkBg}
      bgImage={"/banner-login.png"}
      bgPos="center center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
    >
      <VStack w="full" spacing={16}>
        {/* <Logo notLinked /> */}

        <VStack w="full" spacing={8}>
          <Stack
            w="full"
            maxW={["full", "sm"]}
            as="form"
            onSubmit={handleSignup}
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
              Signup
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
              <Stack spacing={1}>
                <Text>Password</Text>
                <InputGroup size="lg">
                  <Input
                    size="lg"
                    type={showPassword ? "text" : "password"}
                    isRequired
                    placeholder="Enter password"
                    value={password}
                    name="password"
                    onChange={handleChange}

                  />

                  <InputRightElement width="4.5rem">
                    <IconButton
                      h="1.75rem"
                      color="gray.400"
                      bg="transparent"
                      icon={showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                      onClick={() => setShowPassword(!showPassword)}
                      fontSize="xl"
                    />
                  </InputRightElement>
                </InputGroup>
              </Stack>
             
              <Box w="full" pt={9}>
                <CommonButton
                  type="submit"
                  width="full"
                  isLoading={isLoading}
                  loadingText="Checking..."
                >
                  Signup
                </CommonButton>
              </Box>
            </Stack>
          </Stack>

          <Text fontSize="sm" textAlign="center">
          I have already an account {" "}
            <Link href="/auth/login">
              <Text  as={"span"}>
                Login
              </Text>
            </Link>
          </Text>
        </VStack>
      </VStack>
  
    </Flex>
  );
};

export default SignupForm;
