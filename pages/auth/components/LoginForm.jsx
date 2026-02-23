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
    Divider,
} from "@chakra-ui/react";
import React from "react";
import useLoginHook from "@/libs/Hooks/useLoginHook";
import { LogoHorizontal } from "@/components/Logo";
import Button from "@/components/Button";

const LoginForm = ({...props}) => {
    const {
        title,
        form,
        handleSubmit,
        isLoading,
        handleChange,
    } = props;
    const { email } = form;
    return (
                <VStack w="full" spacing={8}>
                    <Stack
                        w="full"
                        maxW={["full", "xl"]}
                        h={{base: "fit-content"}}
                        as="form"
                        onSubmit={handleSubmit}
                        bg={"rgba(4, 12, 58, 0.6)"}
                        border="1px solid"
                        borderColor={colors.primary}
                        rounded={20}
                        spacing={6}
                        px={15}
                        py={"100px"}
                    >
                        <Flex w={"full"} alignItems={"center"} flexDir={"column"} >
                            <LogoHorizontal notLinked w={256} />
                            <Heading py={5} fontSize="2xl">
                                {title ? title : "LOGIN"}
                            </Heading>
                        </Flex>


                        <Stack px={6} spacing={6}>
                            <Stack spacing={1}>
                                <Input
                                    borderColor={"#08C5BF"}
                                    size="lg"
                                    placeholder="Enter your Email"
                                    type="email"
                                    isRequired
                                    value={email}
                                    name="email"
                                    onChange={handleChange}
                                />
                            </Stack>
                          

                            <Box w="full" pt={2}>
                                <Button
                                    type="submit"
                                    width="full"
                                    isLoading={isLoading}
                                    loadingText="Checking..."
                                >
                                    Send OTP
                                </Button>

                
                            </Box>
                        </Stack>
                    </Stack>

        </VStack>
    );
};

export default LoginForm;
