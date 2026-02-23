import React from "react";
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { colors } from "@/utils/colors";
import Wrapper from "@/components/Wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import HeadingSection from "@/components/HeadingSection";
import { fadeInUpAnimation } from "@/utils/motion";

const Community = () => {
  return (
    <motion.section
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "backIn", duration: 0.5 }}
      viewport={{ once: false, amount: 0.25 }}
    >
      <Flex
        bg={colors.darkBg}
        bgPos="center center"
        bgRepeat="no-repeat"
        bgSize="cover"
        minH="90vh"
        minW="100vw"
        h="100%"
        align="center"
        justify="center"
        pb={{ base: 8, lg: 0 }}
        id="community"
      >
        <Wrapper gap={12} flexDir={{ base: "column" }} w="100%" py={20}>
          <HeadingSection title={"WHAT'S NEW"} section={"COMMUNITY"} />
          <Flex
            gap={2}
            display={"flex"}
            flexDir={{ base: "column", lg: "row" }}
            w="100%"
          >
            <Flex
              flexDir={{ base: "column" }}
              flex={2}
              position="relative"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              h={ "auto" }
              boxShadow="0px 0px 20px 0px rgba(0,0,0,0.5)"
              p={{ lg: 4, md: 10 }}
            >
              <Image src="/ebizbox.png" h={"auto"} w={"full"} />
              <Box
                w={"full"}
                paddingX={"50px"}
                paddingTop={"10px"}
                paddingBottom={"37px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                bg={"rgba(255,255,255,0.1)"}
              >
                <Text fontSize={16} fontWeight={400}>10 Aug 2024</Text>
                <Text fontSize={34} fontWeight={700}>EBIZBOX-EBIZWORLD'S NEW GAME GENERATION</Text>
                <Text fontSize={20} fontWeight={400}>With EBIZBOX your ability is unlimited, you are free to design the background of the game, build the fantasy world with castle, battle field, beautiful landscape, or modern buildings by blocks, and they all depend on your will.</Text>
              </Box>

              {/* Symbols */}
            </Flex>
            <Flex
              flexDir="column"
              flex={1}
              position="relative"
              justifyContent={"center"}
              display={{ base: "block", lg: "flex" }}
              h={{ lg: 600, md: "auto" }}
              mt={{ base: 15, lg: 0 }}
              sx={{
                "& img": {
                  mb: 4,
                },
              }}
            >
              <Image src="/comingsoon.svg" w="full" />
              <Image src="/comingsoon.svg" w="full" />
            </Flex>
          </Flex>
        </Wrapper>
      </Flex>
    </motion.section>
  );
};

export default Community;
