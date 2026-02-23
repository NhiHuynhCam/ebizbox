import React from "react";
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";
import Wrapper from "@/components/Wrapper";
import PartnerItem from "@/components/ParnerItem";
import { partners } from "@/utils/partners";
import HeadingSection from "@/components/HeadingSection";
import { fadeInUpAnimation } from "@/utils/motion";

const Partner = () => {
    return (
        <Flex
            bg={colors.darkBg}
            bgImage={"/bg_partners.svg"}
            bgPos="center center"
            bgRepeat="no-repeat"
            bgSize="cover"
            position="relative"
            h={{ base: "100%", lg: 600 }}
            align="center"
            justify="center"
            pb={{ base: 8, lg: 0 }}
            id="partner"
        >
            <Wrapper gap={12} flexDir={{ base: "column" }} w="100%" py={20} >
                <HeadingSection title={"PARTNERS"} />
                <Flex
                    gap={8}
                    mb={32}
                    justifyContent={{ base: "center", lg: "space-between" }}
                    flexWrap="wrap"
                    align="center"
                >
                    {partners.map((item, index) => (
                        <motion.div
                            key={index}
                            {...fadeInUpAnimation(0.3 * (index + 1))}
                            className=" bg-transparent shadow-none"
                        >
                            <PartnerItem {...item} />
                        </motion.div>
                    ))}
                </Flex>
            </Wrapper>
        </Flex>
    );
};

export default Partner;
