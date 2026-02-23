import { useRouter } from 'next/router'
import {
    Avatar,
    Badge,
    Box,
    Container,
    Flex,
    IconButton,
    Td,
    Text,
    Tr
} from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'
import Table from '../Common/Table'
import Wrapper from '../Wrapper'
import { colors } from '@/utils/colors'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSubcriptions } from '@/redux/slices/userSlice'

const SubcriptionList = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { loading, subcriptions } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(fetchSubcriptions())
    }, [])

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ]

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
                <Box h={"15vh"} w={"full"} as='div' />
                <Table
                    data={subcriptions}
                    fetched={true}
                    th={[
                        'OrderID',
                        'Price',
                        'Payment Method',
                        'Status',
                        'createdAt',
                        ''
                    ]}
                    td={(subcription) => (
                        <Tr key={subcription._id}>
                            <Td maxW={200}>
                                <Flex align="center" gap={3}>

                                    <Text
                                        overflow="hidden"
                                        textOverflow="ellipsis"
                                    >
                                        {subcription.orderID}
                                    </Text>
                                </Flex>
                            </Td>


                            <Td>
                                <Text>
                                    $ 5
                                </Text>
                            </Td>

                            <Td>
                                <Badge variant="tinted" colorScheme="brand">
                                    PayPal
                                </Badge>
                            </Td>

                            <Td>
                                <Badge
                                    variant="tinted"
                                    colorScheme={"brand"}
                                >
                                    Completed
                                </Badge>
                            </Td>

                            <Td>
                                <Text>
                                    {subcription.createdAt}
                                </Text>
                            </Td>

                            <Td textAlign="right">
                                <IconButton
                                    size="xs"
                                    icon={<FiMoreHorizontal size={12} />}
                                    onClick={() =>
                                        router.push(
                                            `/admin/subcriptions/${subcription._id}`
                                        )
                                    }
                                />
                            </Td>
                        </Tr>
                    )}
                    filters={(data, watch) => {
                        return data.filter((data) =>
                            ['orderID'].some((key) =>
                                data[key]
                                    .toString()
                                    .toLowerCase()
                                    .includes(
                                        watch('search') &&
                                        watch('search').toLowerCase()
                                    )
                            )
                        )
                    }}
                />
            </Wrapper>
        </Flex>
    )
}

export default SubcriptionList