import Button from '@/components/Button'
import { colors } from '@/utils/colors'
import { Box, Divider, Flex, HStack, Heading, List, ListIcon, ListItem, Stack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

function FreePlan({
    onOpenHistory,
    plan
}) {
    return (
        <Flex flexDir={"column"}>
            {/* <HStack>
                <Text flex={1} fontSize={"xl"} fontWeight={600}>
                    Current Plan
                </Text>
                <HStack spacing={3}>
                    <Button>Payment History</Button>
                    <Button>Upgrade</Button>
                </HStack>
            </HStack>
            <Divider my={5} mt={2} /> */}
            <VStack
                alignItems={"flex-start"}
                border={`1px solid #08C5BF`}
                borderRadius={10}
                overflow={"hidden"}
            >
                <HStack
                    w={"full"}
                    p={5}
                    bg={colors.secondaryBg}
                    borderBottom={`1px solid #08C5BF`}
                >
                    <Text flex={1} fontSize={"xl"} fontWeight={600}>
                        Current Package
                    </Text>
                    <HStack spacing={3}>
                        <Button border={0} onClick={onOpenHistory}>Payment History</Button>
                        <Link href={"/subscription"}>
                        <Button border={0}>Upgrade</Button>
                        </Link>
                        <Link href={"/topup"}>
                        <Button border={0}>Topup</Button>
                        </Link>
                    </HStack>
                </HStack>
                <VStack alignItems={"flex-start"} w={"full"}>
                    <Text p={5} flex={1} fontSize={"4xl"} fontWeight={600}>
                        {plan}
                    </Text>
                    <HStack
                        w={"full"}
                        alignItems={"flex-start"}
                        p={5}
                        bg={`linear-gradient(0.62deg, rgba(4, 8, 31, 0.7) 8.02%, rgba(56, 208, 255, 0.7) 130.09%, rgba(44, 93, 218, 0.7) 130.11%)`}
                    >
                        <Box flex={1}>
                            <List spacing={5} >
                                <ListItem>
                                    <ListIcon as={FaCheck} color='#08C5BF' />
                                    Can build map
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheck} color='#08C5BF' />
                                    Map square limit: 1x1
                                </ListItem>
                            </List>
                        </Box>
                        <Box flex={1}>
                            <Text>Not included:</Text>
                            <List spacing={5} >
                                <ListItem>
                                    <ListIcon as={FaTimes} color='#d47616' />
                                    Save map
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaTimes} color='#d47616' />
                                    Share map
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaTimes} color='#d47616' />
                                    Voxedit
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaTimes} color='#d47616' />
                                    Market share
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaTimes} color='#d47616' />
                                    Multiplayer
                                </ListItem>
                            </List>
                        </Box>
                    </HStack>
                </VStack>
            </VStack>
        </Flex>
    )
}

export default FreePlan