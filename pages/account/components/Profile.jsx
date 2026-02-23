
import Wrapper from '@/components/Wrapper'
import { colors } from '@/utils/colors'
import { Box, Flex, GridItem, Heading, Image, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoWallet } from 'react-icons/io5'
import { RiUser2Fill } from 'react-icons/ri'
import TabPackage from './TabPackage'
import { useSelector } from 'react-redux'
import IdenticonImg from './IdenticonImg'

function Feature({ title, desc, ...rest }) {
    return (
        <Box p={5} shadow='md' borderWidth='1px' {...rest}>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
}

function StackEx() {
    return (
        <Stack spacing={8} direction='row'>
            <Feature
                title='Plan Money'
                desc='The future can be even brighter but a goal without a plan is just a wish'
            />
            <Feature
                title='Save Money'
                desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
            />
        </Stack>
    )
}
function Profile() {
    const {userDetails} = useSelector(state => state.user)
    const selectedStyle = {
        color: `#08C5BF`,
        fontWeight: 700,
        _before: {
            content: '""',
            h: "54px",
            w: "6px",
            bg: `#08C5BF`,
            position: "absolute",
            left: 0
        }
    };
    return (
        <Flex
            bg={colors.darkBg}
            justify="center"
            id="account"
            position="relative"
            pb={32}
            w={"full"}
        >

            <Wrapper flexDir={{ base: "column" }} w={"full"}>
                <Tabs variant='unstyled' colorScheme='green'>
                    <SimpleGrid columns={12} spacing={4}>
                        <GridItem colSpan={{base: 12, md: 3}}>
                            <VStack bg={"#040C3A"}>
                                <Stack p={5} textAlign={"center"}>
                                    <IdenticonImg username={userDetails?.userEmail} saturation="90" />
                                    <Text> {userDetails?.userEmail} </Text>
                                </Stack>
                                <Stack w={"full"}>
                                    <TabList flexDir={"column"} w={"full"} textAlign={"left"}>
                                        
                                        <Tab
                                            _selected={selectedStyle}
                                            justifyContent={"flex-start"}
                                            borderTop={`1px solid #08C5BF`}
                                            borderBottom={`1px solid #08C5BF`}
                                            h={"54px"}
                                            position={"relative"}
                                        >
                                            <IoWallet color='#08C5BF' />
                                            <Text ml={2} as={"span"}>
                                                Your Package
                                            </Text>
                                        </Tab>
                                       
                                    </TabList>
                                </Stack>
                            </VStack>
                        </GridItem>
                        <GridItem colSpan={{base: 12, md: 9}}>
                            <VStack bg={"#040C3A"} p={5}>
                                <TabPanels minH={"700px"}>
                                    
                                    <TabPanel>
                                        <TabPackage user={userDetails}/>
                                    </TabPanel>
                                   
                                </TabPanels>

                            </VStack>

                        </GridItem>
                    </SimpleGrid>
                </Tabs>
            </Wrapper>
        </Flex>
    )
}

export default Profile