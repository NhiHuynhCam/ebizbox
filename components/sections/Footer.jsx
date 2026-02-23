import {
  Box,
  chakra,
  Container,
  Link,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  ChakraProvider,
  Heading,
  Flex,
} from "@chakra-ui/react";

import { FaInstagram, FaTwitter, FaReddit } from "react-icons/fa";
import { ReactNode } from "react";
import React from "react";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { NAV_ITEMS } from "@/utils/NavItems";

export const LogoMobile = (props) => {
  return (
    <Image
      display={{ base: "flex", md: "none" }}
      ml={0}
      mb={10}
      w={150}
      src="/logo.png"
      alt="Ebizbox logo"
    />
  );
};
const Logo = (props) => {
  return (
    <Image
      display={{ base: "none", md: "flex" }}
      ml={0}
      w={250}
      h={"auto"}
      src="/logo.png"
      alt="Ebizbox logo"
    />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Flex
      // bg={colors.darkBg}
      justify="center"
      position="relative"
      flexDirection={"column"}
      alignItems={"center"}
      id="footer"
      _before={{
        content: '""',
        alignItems: 'center',
        background: colors.darkBg,
        height: "100%",
        position: 'absolute',
        width: "100%",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        zIndex: -1
      }}
    >
      <Wrapper
        w={"100%"}
        minH={"10vh"}

        px={{ base: 3, md: 6, lg: 10 }}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={"center"}
        zIndex={1}
        mt={10}
      >
        {/* <LogoMobile /> */}
        <Stack direction={"row"} spacing={12} mb={{ base: 10, lg: 0 }} flex={2} >
          <Stack align={{ base: "center", md: "flex-start" }}>
            <Heading as={"h3"} fontSize={{ base: "1em", md: "1em", lg: "1em" }}>
            EBIZBOX
            </Heading>
            {NAV_ITEMS.map((navItem) => (
              <Link  href={navItem.href} key={navItem.label}>
                {navItem.label}
              </Link>
            ))}
           
          </Stack>
         
        </Stack>
        <Stack align={{ base: "center" }} flex={1}>
          <Logo />
        </Stack>
        <Stack align={{ base: "center", md: "flex-end" }} flex={2}>
          <Heading as={"h3"} mb={4} fontSize={{ base: "26px" }}>
            FOLLOW US
          </Heading>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"https://twitter.com"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com//"}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton
              label={"Reddit"}
              href={"https://www.reddit.com/r/"}
            >
              <FaReddit />
            </SocialButton>
            <SocialButton
              label={"Reddit"}
              href={"https://www.reddit.com/r/"}
            >
              <FaReddit />
            </SocialButton>
          </Stack>
         

          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Terms & Conditions</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
        </Stack>

      </Wrapper>
      <Box py={10}>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
        © 2026 EBIZBOX. All rights reserved.
        </Text>
      </Box>
    </Flex>
  );
}
