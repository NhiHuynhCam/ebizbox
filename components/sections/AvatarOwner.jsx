import Button, { CommonButton } from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { motion } from 'framer-motion';
import { fadeInUpAnimation } from "@/utils/motion";
const AvatarOwner = () => {
  const [sm] = useMediaQuery("(max-width: 768px)");
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <motion.section
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "backIn", duration: 0.5 }}
      viewport={{ once: false, amount: 0.25 }}>
      <Flex
        bg={colors.darkBg}
        bgImage={"/bg_owner.svg"}
        bgPos="center botto"
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="center"
        position="relative"
        py={10}
        flexDirection={"column"}
        alignItems={"center"}
        id="avatarowener"
        sx={{
          "&:after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(120deg,#08C5BF,#08C5BF)",
            opacity: 0.3,
            transform: "skew(120deg) translate(20%)",
            transition: "all 0.6s ease",
            zIndex: -1,
          },
          "&:before": {
            content: '""',
            position: "absolute",
            top: 10,
            left: -10,
            width: "100%",
            height: "100%",
            background: "linear-gradient(120deg,#eaee44,#33d0ff)",
            opacity: 0.2,
            transform: "skew(120deg) translate(20%)",
            transition: "all 0.6s ease",
            zIndex: -1,
          },
        }}
      >
        <Wrapper
          flexDir={{ base: "column", lg: "row" }}
          alignItems={"center"}
          gap={8}
          zIndex={2}
        >
          <Flex flexDir={"column"} w={{ base: "100%", lg: "50%" }} align="center">
            <Flex
              px={8}
              pt={8}
              h={sm ? "70vw" : 600}
              gap={8}
              w={sm ? "70vw" : 600}
              display={"flex"}
              borderRadius={24}
              position={"relative"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                img: {
                  transition: "1s ease all",
                },
                "&:hover .scale": {
                  transform: "scale(1.3)",
                },
              }}
            >
              <Image
                src="/avatar_owner2.svg"
                w={sm ? "calc(70vw * 0.26)" : "160px"}
                className="scale"
                h={"auto"}
                objectFit="cover"
                borderRadius={24}
                position="absolute"
                bottom={sm ? "calc(70vw * 0.1)" : "60px"}
                left={sm ? "calc(-1*(70vw * 0.0833))" : "-50px"}
                zIndex={1}
              />
              <Image
                src="/cube2.svg"
                w={sm ? "calc(70vw * 0.83)" : "500px"}
                h={"auto"}
                objectFit="cover"
                borderRadius={24}
                position="absolute"
                top={sm ? "calc(-1 * (70vw * 0.00833))" : "-5px"}
                right={sm ? "calc(70vw * 0.0833)" : "50px"}
                zIndex={2}
              />
              <Image
                src="/avatar_owner3.svg"
                w={sm ? "calc(70vw * 0.55)" : "330px"}
                className="scale"
                h={"auto"}
                objectFit="cover"
                borderRadius={24}
                position="absolute"
                top={sm ? "calc(70vw * 0.15)" : "90px"}
                right={sm ? "calc(-1 * (70vw * 0.15))" : "-90px"}
                zIndex={3}
              />
            </Flex>
          </Flex>
          <Flex
            flexDir={"column"}
            w={{ base: "100%", lg: "50%" }}
            bg={"#0B1449"}
            p={8}
            gap={8}
          >
            <motion.div
              {...fadeInUpAnimation(0.3)}
            >
              <Text
                fontWeight={800}
                fontSize={"5xl"}
                textAlign={{ base: "center", lg: "left" }}
              >
                Play with your own avatar
              </Text>
            </motion.div>

            <motion.div
              {...fadeInUpAnimation(0.5)}
            >  <Text letterSpacing={1.2} textAlign={{ base: "center", lg: "left" }}>
                Integrate customizable avatars into your game or app in minutes
              </Text></motion.div>

            <motion.div
              {...fadeInUpAnimation(0.7)}
            ><Text letterSpacing={1.2} textAlign={{ base: "center", lg: "left" }}>
                Thousands of developers use Ready Player Me to give their users high-quality personalized avatars that they love.

              </Text> </motion.div>

            <motion.div
              {...fadeInUpAnimation(1)}
            >
              <Flex justifyContent={{ base: "center", lg: "flex-start" }}>
                <Text fontWeight={"700"} color={"#F839F9"} fontSize={"2xl"} borderBottom='4px' borderColor='white' >Coming soon</Text>
              </Flex>
            </motion.div>

          </Flex>
        </Wrapper>
        <Wrapper
          flexDir={{ base: "column-reverse", lg: "row" }}
          gap={8}
          zIndex={2}
          alignItems={"center"}
        >
          <Flex
            flexDir={"column"}
            w={{ base: "100%", lg: "50%" }}
            bg={"#0B1449"}
            p={8}
            zIndex={999}
            gap={8}
          >
            <motion.div
              {...fadeInUpAnimation(0.3)}
            >
              <Text
                fontWeight={800}
                fontSize={"5xl"}
                textAlign={{ base: "center", lg: "left" }}
              >
                Become land owner
              </Text>
            </motion.div>

            <motion.div
              {...fadeInUpAnimation(0.5)}
            >
              <Text letterSpacing={1.2} textAlign={{ base: "center", lg: "left" }}>
                Blockchain technology redefines ownership and empowers anyone to become a game publisher with virtual LAND.

              </Text>
            </motion.div>

            <motion.div
              {...fadeInUpAnimation(0.8)}
            >
              <Flex justifyContent={{ base: "center", lg: "flex-start" }}>
                <Text fontWeight={"700"} color={"#F839F9"} fontSize={"2xl"} borderBottom='4px' borderColor='white' >Coming soon</Text>
              </Flex>
            </motion.div>

          </Flex>
          <Flex flexDir={"column"} w={{ base: "100%", lg: "50%" }} align="center">
            <Box
              w={{ base: "90vw", md: 600 }}
              h={{ base: "90vw", md: 600 }}
              sx={{
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: { base: "calc(90vw * 0.05)", md: "calc(600px * 0.07)" },
                  left: "20%",
                  w: { base: "calc(90vw - 180px)", md: "calc(600px - 180px)" },
                  h: { base: "calc(90vw - 180px)", md: "calc(600px - 180px)" },
                  bg: "linear-gradient(0deg, #09072CB2, #A13BD7B2)",
                  opacity: 0.7,
                  zIndex: -1,
                },
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: { base: "calc(90vw * 0.086666)", md: "calc(600px * 0.086666)" },
                  left: "10%",
                  opacity: 0.5,
                  transform: "rotate(-15deg)",
                  width: { base: "calc(90vw - 180px)", md: "calc(600px - 180px)" },
                  height: { base: "calc(90vw - 180px)", md: "calc(600px - 180px)" },
                  bg: "linear-gradient(0deg, #0B1220, #304E86)", 
                  zIndex: -1,
                  transition: "all 0.5s ease",
                },
                "&:hover::before": {
                  transform: { base: "translateY(calc(90vw * 0.145)) rotate(0deg)", md: "translateY(87px) rotate(0deg)" },
                  bottom: { base: "calc(90vw * 0.07)", md: "calc(600px * 0.07)" },
                  left: "20%",
                },
              }}
            >
              <Image
                src="/owner2.png"
                borderRadius={24}
                w={"100%"}
                h={"100%"}
                zIndex={999}
              />
            </Box>
          </Flex>
        </Wrapper>
      </Flex>
    </motion.section>
  );
};

export default AvatarOwner;
