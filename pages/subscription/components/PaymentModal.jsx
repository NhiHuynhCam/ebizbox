import { colors } from '@/utils/colors';
import { Box, Button, Divider, Flex, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Radio, RadioGroup, Text } from '@chakra-ui/react'
import React from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import SubscribeButton from './SubscribeButton';
import { subcriptionData } from '@/utils/constants';
function PaymentModal({
    paymentIsOpen,
    paymentOnclose,
    plan,
    createNewTransaction
}) {
    return (
        <Modal
            isOpen={paymentIsOpen}
            onClose={paymentOnclose}
            closeOnOverlayClick={false}
        >
            <ModalOverlay />
            <ModalContent width={'440px'} borderRadius={'10px'} mt={110}>

                <ModalBody w={'full'}>
                    <Flex alignItems={"center"} justifyContent={"space-between"} mb={1}>
                        <Text
                            color={colors.primary}
                            fontWeight={600}
                            textAlign={"center"}
                        >Selected Plan: {subcriptionData[plan].plan}</Text>
                        <Button
                            bgColor={'#fff'}
                            _hover={'none'}
                            color={'#0095DA'}
                            onClick={() => paymentOnclose()}
                        >
                            <IoCloseSharp fontSize={'25px'} />{' '}
                        </Button>
                    </Flex>
                    <Box
                        ml={'-24px'}
                        w={'440px'}
                        h={'7px'}
                        bgColor={'rgb(243, 244, 245)'}
                    />
                    <Box h={'130px'} p={'8px 0px'}>
                        <Text
                            pt={'16px'}
                            pb={'16px'}
                            fontWeight={800}
                            fontSize={'16px'}
                            lineHeight={'22px'}
                            m={'0px'}
                            color={'#ffffff'}
                        >
                            Payment Summary
                        </Text>
                        <Flex
                            justifyContent={'space-between'}
                            color={'#31353BAD'}
                        >
                            <Text>Price</Text>
                            <Text>
                                {
                                    new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    })
                                        .format(subcriptionData[plan].price)
                                }
                            </Text>
                        </Flex>
                        <Flex
                            justifyContent={'space-between'}
                            color={'#ffffff'}
                        >
                            <Text>Transaction fees</Text>
                            <Text>
                                {
                                    new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    })
                                        .format(0)
                                }
                            </Text>
                        </Flex>
                        <Divider mt={1} />
                    </Box>

                    <Box
                        // display={'flex'}
                        h={'220px'}
                        pt={'8px 0px'}
                        flexDir={'column'}
                        display={"none"}
                    >
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            pb={'8px'}
                            pt={'16px'}
                        >
                            <Text
                                fontSize={'16px'}
                                fontWeight={800}
                                lineHeight={'22px'}
                                color={'#ffffff'}
                            >
                                Payment Methods
                            </Text>
                        </Box>
                        <RadioGroup>
                            <Box
                                display={'flex'}
                                pt={'12px'}
                                alignItems={'center'}
                                borderBottom={'1px solid rgb(229, 231, 233)'}
                                cursor={'pointer'}
                            >
                                <Image
                                    p={'0px 12px 14px 0px'}
                                    w={'45px'}
                                    h={'26px'}
                                    maxW={"xl"}
                                    src="/block.png"
                                    objectFit="cover"
                                />
                                <Box
                                    display={'flex'}
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                    flex={'1 1 0%'}
                                    minH={'52px'}
                                    pr={'16px'}
                                    pb={'12px'}
                                    flexDir={'row'}
                                >
                                    <Text
                                        fontSize={'14px'}
                                        fontWeight={700}
                                        lineHeight={'20px'}
                                        color={'#ffffff'}
                                    >
                                        Paypal
                                    </Text>
                                    <Radio
                                        whiteSpace={'nowrap'}
                                        paddingLeftp={'8px'}
                                        position={'relative'}
                                        isChecked={true}
                                    />
                                </Box>
                            </Box>
                        </RadioGroup>

                    </Box>
                    <Flex flexDir={"row"} alignItems={"flex-end"} justifyContent={'space-between'} mb={3}>
                        <Text
                            color={'#ffffff'}
                            fontWeight={700}
                            lineHeight={'20px'}
                            whiteSpace={'nowrap'}
                            textOverflow={'ellipsis'}
                            overflow={'hidden'}
                        >
                            Total
                        </Text>
                        <Text
                            color={'#ffffff'}
                            fontSize={'16px'}
                            fontWeight={800}
                            m={'0px'}
                            lineHeight={'20px'}
                        >
                            {
                                new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })
                                    .format(subcriptionData[plan].price)
                            }
                        </Text>

                    </Flex>
                    <Box
                        ml={'-24px'}
                        w={'440px'}
                        h={'7px'}
                        bgColor={'rgb(243, 244, 245)'}
                    />
                </ModalBody>
                <ModalFooter
                    display={'flex'}
                    justifyContent={'flex-end'}
                    flexDir={'row'}
                    p={'12px 16px'}
                >

                    {
                        plan === 0 ? (
                            <Button
                                variant="ghost"
                                h={'40px'}
                                w={'210px'}
                                p={'0px 16px'}
                                lineHeight={'18px'}
                                borderRadius={'8px'}
                                fontWeight={800}
                                bgColor={'#0095DA'}
                                color={'#fff'}
                                onClick={createNewTransaction}
                                _hover={'none'}
                                _active={{
                                    bgColor: '#0370A2',
                                }}
                            >
                                <Text pl={'2px'}>Subcription Now</Text>
                            </Button>
                        ) : (
                            <SubscribeButton paymentOnclose={paymentOnclose}/>
                        )
                    }

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default PaymentModal