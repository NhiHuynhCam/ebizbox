import { colors } from "@/utils/colors";
import {
  Box,
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { IoPencil, IoTrash } from "react-icons/io5";
import NoRecordsFound from "@/components/Common/NoRecordsFound";
import { useEffect, useState } from "react";
function PaymentHistory({ isOpen, onClose }) {
  const token = localStorage.getItem("base_acccess_token");
  const [paymentData, setPaymentData] = useState([]);
  const getPaymentHistory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/subscriptionWithStripe/all-subscriptions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPaymentData(data);
    } catch (error) {
      console.error("Error fetching payment history:", error);
    }
  };
  useEffect(() => {
    getPaymentHistory();
  }, []);
  console.log(paymentData);
  const size = useBreakpointValue({ base: "sm", "2xl": "md" });
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
      <ModalOverlay />
      <ModalContent bg={colors.darkBg}>
        <ModalHeader>Payment History</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={20}>
          <Box>
            <TableContainer
              borderRadius={5}
              width="100%"
              overflowY="auto"
              overflowWrap="break-word"
              border={"1px solid #08C5BF"}
            >
              <Table size={size} variant="striped" colorScheme="blackAlpha">
                <Thead bgGradient="linear(to-b, rgba(56, 208, 255, 0.7), rgba(44, 93, 218, 0.7))">
                  <Tr>
                    <Th color={"white"}>Name</Th>
                    <Th color={"white"}>Amount</Th>
                    <Th color={"white"}>Create At</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {paymentData.map((payment) => (
                    <Tr key={payment.createdAt}>
                      <Td>{payment.name}</Td>
                      <Td>${payment.amount}</Td>
                      <Td>{new Date(payment.createdAt).toLocaleString()}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              {paymentData.length === 0 && <NoRecordsFound />}
            </TableContainer>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PaymentHistory;
