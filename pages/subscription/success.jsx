import { CommonButton } from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Alert, AlertIcon, AlertTitle, Stack, Flex } from "@chakra-ui/react";
import Link from "next/link";

const SubcriptionSuccessPage = () => {
  return (
    <>
      <Navbar />
      <Flex
        justify="center"
        direction="column"
        alignItems={"center"}
        align="center"
        mt="20px"
        minH="100vh"
      >
        <Alert
          bg={"transparent"}
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="auto"
        >
          <AlertIcon boxSize="55px" />
          <AlertTitle pt="8px" fontSize="xl">
            Successful!
          </AlertTitle>

          <Stack mt="20px" minW="200px">
            <Link href={"/account"}>
              <CommonButton w="full">Your Order</CommonButton>
            </Link>
          </Stack>
        </Alert>
      </Flex>
      <Footer />
    </>
  );
};

export default SubcriptionSuccessPage;
