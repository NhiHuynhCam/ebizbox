import { colors } from '@/utils/colors'
import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const HeadingSection = ({
    title,
    section
}) => {
    return (
        <Box w={"100%"} textAlign={"center"} display={"flex"} alignItems={"center"} flexDirection={"column"}
            sx={{
                pos: "relative",
                _after: {
                    content: '""',
                    alignItems: 'center',
                    background: colors.primary,
                    height: 24,
                    position: 'absolute',
                    width: 32,
                    bottom: -1,
                    // borderBottomLeftRadius: "full",
                    // borderBottomRightRadius: "full",
                    clipPath: "polygon(23% 100%, 78% 100%, 100% 94%, 0 94%)"

                }
            }}
        >
            {
                section && (
                    <Heading
                        fontSize={"sm"}
                        textAlign={{ base: "center", lg: "left" }}
                        color={colors.primary}
                    >
                        {section}

                    </Heading>
                )
            }
            <Text
                fontSize={{
                    base: "5xl",
                    sm: "5xl",
                    lg: "5xl",
                    xl: "5xl",
                }}
                fontWeight={700}
            >
                {title}
            </Text>
        </Box>
    )
}

export default HeadingSection
