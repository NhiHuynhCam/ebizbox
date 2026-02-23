import React from 'react';
import { colors } from '@/utils/colors'
import Button from '@/components/Button';
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  ModalCloseButton, 
  Text, 
  useDisclosure 
} from '@chakra-ui/react';
const CancelPlan = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = localStorage.getItem('base_acccess_token');

  const handleCancel = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/subscriptionWithStripe/cancel-subscription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );


    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
  } catch (error) {
    console.error("Error canceling plan:", error);
  } finally {
    onClose();
  }
  };

  return (

    <>
      <Button border={0} onClick={onOpen}>
        Cancel Plan
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={colors.darkBg}>
          <ModalHeader>Confirm Cancellation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to cancel your plan?</Text>
          </ModalBody>
          <ModalFooter>
            <Button  onClick={handleCancel}>
              Confirm
            </Button>
            <Button  onClick={onClose} ml={3}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CancelPlan;
