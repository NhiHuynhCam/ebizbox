import Button, { CommonButton } from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const FreePlan = () => {
  return (
    <Flex
      justify="center"
      id="collection"
      position="relative"
      py={32}
    >
      <Image
        src="/detail1.png"
        position="absolute"
        w={150}
        h={"auto"}
        top={0}
        right={32}
        opacity={0.25}
        zIndex={1}
      />
      <Image
        src="/detail2.png"
        position="absolute"
        w={150}
        h={"auto"}
        bottom={0}
        left={{ base: 8, lg: 32 }}
        opacity={0.25}
        zIndex={1}
        
      />
      <Wrapper flexDir={{ base: "column", lg: "row" }}  gap={8} zIndex={2} justifyContent={"center"} alignItems={"center"}>
        <Flex flexDir={"column"} w={{ base: "100%", lg: "50%" }} align="center" p={10} border={"1px solid #071b3e"} borderRadius={8} boxShadow="0px 0px 20px 0px rgba(0,0,0,0.5)">
          <Flex
            flexDir="column"
            w={"full"}
            textAlign={"left"}
          >
            
            <Heading mt={4} fontWeight={800} fontSize="4xl">
              Free.
            </Heading>
            <Text
              mt={2}
              mb={4}
              fontWeight={600}
              color={colors.darkerText}
            >
              Zero fees on contract deployments
            </Text>
            <Text
              mt={2}
              mb={4}
              fontWeight={600}
              color={colors.darkerText}
            >
              Zero fees on contract deployments
            </Text>
            <Text
              mt={2}
              mb={4}
              fontWeight={600}
              color={colors.darkerText}
            >
              Zero fees on contract deployments
            </Text>
            <Text
              mt={2}
              mb={4}
              fontWeight={600}
              color={colors.darkerText}
            >
              Zero fees on contract deployments
            </Text>
            <CommonButton w={"full"}>
                Start building today
            </CommonButton>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} w={{ base: "100%", lg: "50%" }} gap={8}>
          <Text
            fontWeight={800}
            fontSize={"6xl"}
          >
            Transparent pricing. No hidden fees.
          </Text>
         
          <Text
            textAlign={{ base: "center", lg: "left" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et, fugiat ut nesciunt voluptatum necessitatibus ea explicabo quod? Reiciendis eum aliquid debitis quo ea tempore unde dolorem id dicta vitae!
          </Text>
        
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default FreePlan;
