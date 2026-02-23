import { colors } from "@/utils/colors";
import {
    Box,
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
    Divider,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

import Link from "next/link";
import useLoginHook from "@/libs/Hooks/useLoginHook";
import { Logo, LogoHorizontal } from "@/components/Logo";
import Button, { CommonButton } from "@/components/Button";
import OtpInput from 'react-otp-input';
// import styled from "@emotion/styled";

const OPT_CODE_SIZE = 6;

const OTPForm = ({ ...props }) => {
    const formRef = useRef(null)
    const {
        form,
        handleSubmit,
        isLoading,
        handleChange,
        ResendOTP
    } = props;
    const { otp } = form;
    if (otp.length === OPT_CODE_SIZE && !isLoading) {
        if (formRef.current) {
            setTimeout(() => {
                formRef.current.requestSubmit();
            }, 0);
        }
    }
    return (
        <VStack w="full" spacing={8}>
            <Stack
                w="full"
                maxW={["full", "xl"]}
                h={{ base: "auto", sm: "650px" }}
                as="form"
                onSubmit={handleSubmit}
                bg={"rgba(4, 12, 58, 0.6)"}
                border="1px solid"
                borderColor={colors.primary}
                rounded={20}
                spacing={6}
                px={15}
                py={"50px"}
            >
                <Flex w={"full"} alignItems={"center"} flexDir={"column"} mb={10} >
                    <LogoHorizontal notLinked w={256} />
                    <Heading py={6} fontSize="xl">
                        OTP VERIFICATION
                    </Heading>
                    <Text fontSize={"sm"}>
                        Please enter the OTP we have sent to veirfy your account
                    </Text>
                </Flex>
                <Stack px={6} spacing={6}>
                    <Flex justifyContent={"center"}>

                        <OtpInput
                            value={otp}
                            onChange={(_otp) => handleChange({
                                target: {
                                    name: "otp",
                                    value: _otp
                                }
                            })}
                            numInputs={OPT_CODE_SIZE}
                            isDisabled={isLoading}
                            isInputNum={true}
                            shouldAutoFocus={true}
                            inputStyle={{
                                outline: 'none',
                                border: `1px solid #08C5BF`,
                                borderRadius: 4,
                                minWidth: '50px',
                                height: '70px',
                                fontSize: '16px',
                                fontWeight: '400',
                                backgroundColor: 'transparent',
                                margin: '0 6px 0 6px'
                            }}
                            focusStyle={{
                                border: `2px solid ${colors.primary}`,
                                outline: 'none',
                            }}
                        />
                    </Flex>

                    <Box w="full" pt={5} textAlign={"center"}>
                        <Button
                            type="submit"
                            width="full"
                            isLoading={isLoading}
                            loadingText="Checking..."
                        >
                            Verify
                        </Button>

                        <Text py={5}>Didn't receive the OTP?
                            {" "}
                            <Text as={"span"} color={colors.primary} onClick={ResendOTP}>
                                Resend OTP
                            </Text>
                        </Text>


                    </Box>
                </Stack>
            </Stack>

        </VStack>
    );
};

export default OTPForm;
