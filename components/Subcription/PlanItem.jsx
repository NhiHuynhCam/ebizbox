import { colors } from '@/utils/colors'
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const PlanItem = () => {
    return (
        <HStack sx={{
            border: "1px solid #ccc",
            borderRadius: 4,
            p: 3,
            mb: 4,

        }}>
            <Box w={10} h={10}
                pos={"relative"}
                _before={{
                    content: '""',
                    w: "20px",
                    h: "20px",

                    borderRadius: "full",
                    bg: colors.primary,
                    pos: "absolute",
                    zIndex: 1
                }}
                _after={{
                    content: '""',
                    w: "28px",
                    h: "28px",
                    top: -1,
                    left: -1,
                    borderRadius: "full",
                    borderWidth: 2,
                    borderColor: colors.primary,
                    borderStyle: "solid",
                    pos: "absolute",
                    zIndex: 1
                }}
            />
            <VStack alignItems={"flex-start"} flex={1} justifyContent={"flex-start"} alignContent={"flex-start"}>
                <Text>Starter</Text>
                <Text mt={0} fontSize={{ base: "sm" }}>Lorem ipsum dolor sit amet consr adipisicing elit</Text>
            </VStack>
            <Text>$37 /mo.</Text>
        </HStack>
    )
}

export default PlanItem