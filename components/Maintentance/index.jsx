import { colors } from "@/utils/colors";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Maintentance() {
    return (
       <Flex
        minH="100vh"
        minW="100vw"
        h="100%"
        bg={colors.darkBg}
        align="center"
        justify="center"
        pb={{ base: 8, lg: 0 }}
        flexDir={'column'}>
            <Image 
                src="/logo.png"
                w={{
                    base: 300,
                    sm: 300,
                    lg: 400,
                    xl: 550
                }}
                h={"auto"}
                objectFit="cover"
                zIndex={1}
            />
            <Text fontSize={{
                    base: '2xl',
                    sm: '2xl',
                    lg: '3xl',
                    xl: '4xl'
                }} textAlign={'center'} padding={10}>
                    Site is currently being updated in preparation for launch. Please check back later, or email{' '}
                    <Link href="mailto:info@ebizworldsolutions.com">
                        <Text as="span" color={colors.primary}>[info@ebizworldsolutions.com]</Text>
                    </Link> for any inquiries.
            </Text>
       </Flex>
    )
}