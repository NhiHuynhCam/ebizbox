import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Button, { ButtonSignUp, Buttonlogin } from "../Button";
import Link from "next/link";
import { NAV_ITEMS } from "@/utils/NavItems";
import { useState, useEffect } from "react";
import { colors } from "@/utils/colors";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const { isOpen, onToggle } = useDisclosure();
  const { userDetails } = useSelector((state) => state.user);
  const token = localStorage.getItem("base_acccess_token");
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
    const header = document.querySelector("#page-header");
    const toggleClass = "is-sticky";
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
        header.classList.add(toggleClass);
      } else {
        header.classList.remove(toggleClass);
      }
    });
  }, []);

  return (
    <Box
      id="page-header"
      position="fixed"
      minW={"100%"}
      zIndex={999}
      {...props}
    >
      <Flex
        bg={"transparent"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            _hover={{
              bg: colors.primary,
            }}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
          >
            <Link href="/">
              <Image
                src="/logo.png"
                w={161}
                h={"auto"}
                objectFit="cover"
                zIndex={1}
              />
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav navItems={NAV_ITEMS} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {user ? (
            <Link href="/account">
              <Button bg={colors.primary} borderColor={colors.primary}>
                Account
              </Button>
            </Link>
          ) : (
            <>
              <Box display={{ base: "none", md: "block" }}>
                <Link href="/auth/signup">
                  <ButtonSignUp>Sign Up</ButtonSignUp>
                </Link>
              </Box>
              <Link href="/auth/login">
                <Buttonlogin>Sign In</Buttonlogin>
              </Link>
            </>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onClick={onToggle} navItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
}
