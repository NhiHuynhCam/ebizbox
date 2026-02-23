import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FiFolderMinus } from 'react-icons/fi'

function NoRecordsFound() {
    return (
        <Flex
            justify="center"
            align="center"
            direction="column"
            gap={3}
            px={6}
            py={16}
            color="accent-5"
        >
            <Icon as={FiFolderMinus} boxSize={12} />

            <Text fontSize="sm" fontWeight="medium">
                No records found
            </Text>
        </Flex>
    )
}

export default NoRecordsFound