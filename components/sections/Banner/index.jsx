import React from "react";
import { motion } from 'framer-motion';
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { colors } from "@/utils/colors";
import Wrapper from "@/components/Wrapper";
import Button, { BackButton, ButtonTest, ButtonTest2, CommonButton } from "@/components/Button";
import Link from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FiDownload } from "react-icons/fi";
import { FaRegHandPointUp } from "react-icons/fa"
import { fadeInUpAnimation } from "@/utils/motion";

const Banner = () => {
    return (
        <motion.section
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.25 }} className="relative pt-20 ">
            <Flex
                bg={colors.darkBg}
                bgImage={"/banner.png"}
                bgPos="center center"
                bgRepeat="no-repeat"
                bgSize="cover"
                minH="100vh"
                minW="100vw"
                h="100%"
                align="center"
                justify="center"
                pb={{ base: 8, lg: 0 }}
                id="banner"
            >
                <Wrapper gap={12} flexDir={{ base: "column", lg: "row" }} w="100%">
                    <Flex
                        display={{ base: "flex", lg: "none" }}
                        flexDirection={"row"}
                        align={"center"}
                        justifyContent={"center"}
                        h={450}
                        position="relative"
                        mt={12}
                    >
                        <Image
                            maxW={"xl"}
                            src="/cube.gif"
                            objectFit="cover"
                            borderRadius={24}
                            top={0}
                            zIndex={1}
                            w={"100%"}
                        />
                    </Flex>
                    <Flex
                        flexDir="column"
                        gap={6}
                        w={{ base: "100%", lg: "50%" }}
                        position="relative"
                        justifyContent={"center"}
                    >
                        <motion.div
                            {...fadeInUpAnimation(0.3)}
                        >
                            <Heading
                                fontSize={{
                                    base: "5xl",
                                    sm: "5xl",
                                    lg: "6xl",
                                    xl: "7xl",
                                }}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                EBIZ{" "}
                                <Text as={"span"} color={colors.primary}>
                                    BOX
                                </Text>{" "}
                            </Heading>
                        </motion.div>
                        <motion.div
                            {...fadeInUpAnimation(0.5)}
                        >
                            <Text letterSpacing={2} textAlign={{ base: "center", lg: "left" }}>
                                Build your world,  your imagination and creativity is the only limit in a game of limitless options. Invite your friends to play, enjoy your gameplay while earning an income.
                                
                            </Text>
                        </motion.div>
                        <Flex gap={2} mt={24} justify={{ base: "center", lg: "flex-start" }} flexDir={{ base: "row", sm: "row" }}>
                            {/* <BackButton /> */}
                            <Link href="/subscription">
                                <CommonButton>
                                    <Flex alignItems="center">
                                        <FaRegHandPointUp w="6" h="6" />
                                        <Text as="span" ml={3}>
                                            SUBCRIBE
                                        </Text>
                                    </Flex>
                                </CommonButton>
                            </Link>
                            <a href={'/download/Ebizbox.exe'} download>
                                <CommonButton acitve={true}>
                                    <Flex alignItems="center">
                                        <FiDownload size={20} />
                                        <Text as="span" ml={3}>
                                            DOWNLOAD
                                        </Text>
                                    </Flex>
                                </CommonButton>
                            </a>
                        </Flex>

                    </Flex>
                    <Flex
                        flexDir="row"
                        w={{ base: "100%", lg: "50%" }}
                        position="relative"
                        h={600}
                        display={{ base: "none", lg: "flex" }}
                    >
                        <Image
                            // className="spin"
                            src="/cube.gif"
                            objectFit="contain"
                            borderRadius={24}
                            position="absolute"
                            top={0}
                            right={0}
                            zIndex={1}
                            h={600}
                        />
                    </Flex>
                </Wrapper>
            </Flex>
        </motion.section>
    );
};

export default Banner;
