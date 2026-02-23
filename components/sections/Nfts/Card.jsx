import { colors } from '@/utils/colors';
import Button, { CommonButton } from "@/components/Button";
import { chakra, Box, HStack, Text, VStack, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const Card = ({ id, title, description, date, btnText }) => {
    const isEvenId = id % 2 == 0;
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';
  
    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
      leftValue = '-15px';
      rightValue = 'unset';
      borderWidthValue = '15px 15px 15px 0';
    }
  
    return (
      <HStack
        flex={1}
        p={{ base: 3, sm: 6 }}
        spacing={5}
        rounded="lg"
        alignItems="center"
        pos="relative"
        
       
      >
        <Box>
  
          <VStack spacing={2} mb={3} textAlign="center">
            <chakra.h1 fontSize={48} lineHeight={"56px"} fontWeight={700} w="100%">
              {title}
            </chakra.h1>
            <Text fontSize="md">{description}</Text>
            <CommonButton>{btnText}</CommonButton>
          </VStack>
        </Box>
      </HStack>
    );
  };

export default Card