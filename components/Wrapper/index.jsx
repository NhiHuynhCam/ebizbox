import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Wrapper = ({ children, ...rest }) => {
  return (
    <Flex
      maxW={"8xl"}

      px={8}
      {...rest}
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </Flex>
  );
};

export default Wrapper;
