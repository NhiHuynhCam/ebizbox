import React from "react";
import { Box, Button as Btn } from "@chakra-ui/react";
import { colors } from "@/utils/colors";
import { ArrowBackIcon } from "@chakra-ui/icons";

const Button = ({ children, acitve = false, ...props }) => {
  return (
    <Btn

      bg={"#8038FE"}
      willChange={"transform"}
      _hover={{
        opacity: 0.7
      }}

      color={"white"}
      py={5}
      px={4}
      display="flex"
      fontFamily={"heading"}
      borderRadius={8}
      border={"1px solid #08C5BF"}
      {...props}
    >
      {children}
    </Btn>
  );
};

export const CommonButton = ({ children, acitve = false, ...props }) => {
  return (
    <Box p={1} borderWidth={1} borderColor={colors.primary} h={"55px"}>
      <Btn
        bg={acitve ? colors.primary : "transparent"}
        {...props}
        sx={{
          borderBottomWidth: 3,
          borderBottomColor: colors.primary,
          borderRadius: 0,
          pos: "relative",
          h: "45px",
          minW: "150px",
          textTransform: "uppercase",
          overflow: "hidden",
          background: "none",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "0.28s ease-in",
          _before: {
            content: '""',
            pos: "absolute",
            bg: colors.primary,
            bottom: 0,
            right: 0,
            left: 0,
            top: acitve ? 0 : "100%",
            zIndex: -1,
            WebkitTransition: "top 0.29s ease-in"
          },
          _hover: {
            color: "white",
            _before: {
              top: acitve ? "100%" : 0
            }
          }
        }}
      >
        {children}
      </Btn>
    </Box>
  );
};

export const ButtonSignUp = ({ children, acitve = false }) => {
  return (
    <>
      <Box
        as="button"
        sx={{
          bgImage: "/btn_signup.svg",
          bgSize: "cover",
          bgRepeat: "no-repeat",
          w: "120px",
          h: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: -8,
          color: colors.whiteText,
          textTransform: "uppercase",
          fontWeight: 700,
          _hover: {
            cursor: "pointer",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export const Buttonlogin = ({ children, acitve = false }) => {
  return (
    <>
      <Box
        as="button"
        sx={{
          bgImage: "/btn_login.svg",
          bgSize: "cover",
          bgRepeat: "no-repeat",
          w: "120px",
          h: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: colors.whiteText,
          textTransform: "uppercase",
          fontWeight: 700,
          _hover: {
            cursor: "pointer",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export const BackButton = ({ ml = "0", mr = "0", mt = "0", mb = "0" }) => {
  return (
    <Btn
      w="200px"
      h="50px"
      color="#fff"
      border="2px solid #222"
      textTransform="uppercase"
      fontFamily="monospace"
      letterSpacing="-1px"
      position="relative"
      overflow="hidden"
      sx={{
        ".btn__text-dynamic, .btn__text-dynamic-inner": {
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          display: "none",

          transition: "all ease 0.5s",
        },
        ".btn__text-dynamic": {
          bgColor: "transparent",
          color: "#fff",
          overflow: "hidden",
        },
      }}
      _hover={{
        ".btn__text-dynamic": {
          display: "flex",
          transform: "translateY(-100%)",
        },
        ".btn__text-dynamic-inner": {
          display: "flex",
          bg: colors.primary,
          transform: "translateY(100%)",
        },
      }}
      _active={{
        ".btn__text-dynamic": {
          transform: "translateY(0)",
        },
        ".btn__text-dynamic-inner": {
          bg: colors.primary,
          transform: "translateY(0)",
        },
      }}
    >
      <span className="btn__text-static">Cover bottom</span>
      <div className="btn__text-dynamic">
        <span className="btn__text-dynamic-inner">Cover bottom</span>
      </div>
    </Btn>
  );
};

export const CircleButton = ({ children, ...rest }) => {
  return (
    <Btn
      variant="unstyled"
      bg={colors.primary}
      color={"black"}
      _hover={{ opacity: 0.8 }}
      borderRadius={"full"}
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      {...rest}
    >
      {children}
    </Btn>
  );
};

export default Button;
