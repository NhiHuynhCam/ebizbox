import { Image, Link, VStack } from "@chakra-ui/react";
import React from "react";

const PartnerItem = ({ img, href }) => {
  return (
    <VStack
      w={{ base: "full", md: "250px" }}
      p={4}
      align="center"
      justify="space-between"
      h="full"
    >
      <Image src={img}
        px={2}
        objectFit="cover"
        borderRadius="5px"
      />
    </VStack>
  );
};

export default PartnerItem;
