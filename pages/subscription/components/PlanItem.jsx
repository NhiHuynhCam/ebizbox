import { CommonButton } from "@/components/Button";
import {
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaCheck, FaRegHandPointUp } from "react-icons/fa";

function PlanItem({
  userDetails,
  children,
  description = [],
  plan,
  setPlan,
  title,
  paymentOnopen,
  ...props
}) {
  const subscribeButtonText = userDetails ? "SUBSCRIBE" : "LOGIN TO SUBSCRIBE";
  const subscribeButtonLink = userDetails
    ? `/subscription/${plan}`
    : "/auth/login?redirect=true";

  return (
    <Stack w="full">
      <VStack
        minH={650}
        p={10}
        {...props}
        sx={{ border: `2px solid #08C5BF`, borderRadius: 10 }}
      >
        <Flex flexDir="column" flex={1}>
          <Heading fontSize="4xl" textAlign="center">
            {title}
          </Heading>
          <List spacing={5}>
            {description.map((desc, idx) => (
              <ListItem key={idx}>
                <ListIcon as={FaCheck} color="#08C5BF" />
                {desc}
              </ListItem>
            ))}
          </List>
          {children}
        </Flex>
        <Flex justifyContent="center">
          <Link href={subscribeButtonLink}>
            <CommonButton>
              <Flex alignItems="center">
                <FaRegHandPointUp w="6" h="6" />
                <Text as="span" ml={3} mt={1}>
                  {subscribeButtonText}
                </Text>
              </Flex>
            </CommonButton>
          </Link>
        </Flex>
      </VStack>
    </Stack>
  );
}

export default PlanItem;
