import { colors } from "@/utils/colors";
import { Flex, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

function MobileNav({ onClick, navItems }) {
    return (
        <Stack
            bg={useColorModeValue(colors.darkBg, "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {navItems.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} onClick={onClick} />
            ))}
        </Stack>
    );
}

function MobileNavItem({ onClick, label, href }) {
    return (
        <NextLink href={href ?? "#"} passHref scroll={false}>
            <Flex
                py={2}
                justify={"space-between"}
                align={"center"}
                onClick={onClick}
                _hover={{
                    textDecoration: "none",
                    color: colors.primary
                }}
            >
                <Text
                    textTransform={"uppercase"}
                    fontWeight={700}
                >
                    {label}
                </Text>
            </Flex>
        </NextLink>
    );
}

export default MobileNav;