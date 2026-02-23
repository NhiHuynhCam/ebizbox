import { colors } from "@/utils/colors";
import { Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

function DesktopNav({ navItems }) {
    return (
        <Stack direction={"row"} spacing={4}>
            {navItems.map((navItem) => (
                <DesktopNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
}

function DesktopNavItem({ label, href }) {
    return (
        <NextLink href={href ?? "#"} passHref scroll={false}>
            <Text
                p={2}
                fontSize={"sm"}
                fontWeight={700}
                textTransform={"uppercase"}
                _hover={{
                    textDecoration: "none",
                    color: colors.primary,
                }}
            >
                {label}
            </Text>
        </NextLink>
    );
}

export default DesktopNav;