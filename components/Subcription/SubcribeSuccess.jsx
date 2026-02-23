
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button,
    Alert,
    AlertTitle,
    AlertIcon,
    Wrap,
    useToast,
    Stack,
    HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { logoutUser } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { CommonButton } from "../Button";

const PayPalSuccess = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const toast = useToast();
    const logoutHandler = () => {
        dispatch(logoutUser());
        toast({
            description: "You have been logged out.",
            status: "success",
            isClosable: true,
        });
    };
    return (
        <>
            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Wrap justify="center" direction="column" align="center" mt="20px">
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
                                    Subcription Successful!
                                </AlertTitle>

                                <HStack mt="20px" minW="200px">
                                    <Link href={"/orders"} >
                                        <CommonButton w="full">
                                            Your Order
                                        </CommonButton>
                                    </Link>

                                    <CommonButton w="full" onClick={logoutHandler} >
                                        Logout
                                    </CommonButton>

                                </HStack>
                            </Alert>
                        </Wrap>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PayPalSuccess;