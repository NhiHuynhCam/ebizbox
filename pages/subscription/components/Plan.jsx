import { Box, Flex, SimpleGrid} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import PlanItem from './PlanItem'
import useSubcriptionHook from '@/libs/Hooks/useSubcriptionHook'
import PaymentModal from './PaymentModal'


const SubscribePlan = () => {
  const { userDetails } = useSelector((state) => state.user);
  const {
    plan,
    setPlan,
    paymentIsOpen,
    paymentOnopen,
    paymentOnclose,
    createSubscripsstion, isLoading
  } = useSubcriptionHook();
  const createNewTransaction = () => {
    if (plan === 0) {
      createSubscripsstion(
        {
          planType: "Free",
          planid: "Free"
        },
        "",
        ""
      ).then(_success => paymentOnclose());
    }
  }
  return (
    <Flex justifyContent={"center"}>
      <Box px={10}>
        <SimpleGrid columns={[1, 1, 2, 4]} spacing={[0,0,10,5]} mt={160}>
          <PlanItem
            setPlan={setPlan}
            paymentOnopen={paymentOnopen}
            plan={1}
            userDetails={userDetails}
            title={"FREE"}
            bg={"linear-gradient(0.62deg, rgba(4, 8, 31, 0.7) 8.02%, rgba(56, 208, 255, 0.7) 130.09%, rgba(44, 93, 218, 0.7) 130.11%)"}
            description={[
              `Can build map`,
              `Map square limit: 1x1`,
            ]}
          >

          </PlanItem>
          <PlanItem
            plan={2}
            setPlan={setPlan}
            paymentOnopen={paymentOnopen}
            userDetails={userDetails}
            title={"Package 1 (Medium)"}
            bg={"linear-gradient(0deg, rgba(9, 7, 44, 0.7) 7.41%, rgba(161, 59, 215, 0.7) 130.42%)"}
            description={[
              `10$/Month`,
              `Can build map`,
              `Map square limit: (Free) + 2x2`,
              'Can save map',
              `Can share map (Max: 10 maps)`,
              `Voxedit: Can save (model...)`,
              `Market share: 95%`,
              `Multiplayer`
            ]}
          />
          <PlanItem
            plan={3}
            setPlan={setPlan}
            paymentOnopen={paymentOnopen}
            userDetails={userDetails}
            title={"Package 2 (Premium)"}
            bg={"linear-gradient(0deg, rgba(9, 7, 44, 0.7) 7.41%, rgba(161, 59, 215, 0.7) 130.42%)"}
            description={[
              `20$/Month`,
              `Can build map`,
              `Map square limit: (Package 1) + 3x3`,
              'Can save map',
              `Can share map (Max: 50 maps)`,
              `Voxedit: Can save (model...)`,
              `Market share: 96%`,
              `Multiplayer`,
            ]}
          />
          <PlanItem
            plan={4}
            setPlan={setPlan}
            paymentOnopen={paymentOnopen}
            userDetails={userDetails}
            title={"VIP"}
            bg={"linear-gradient(0deg, rgba(9, 7, 44, 0.7) 7.41%, rgba(161, 59, 215, 0.7) 130.42%)"}
            description={[
              `50$/Month`,
              `Can build map`,
              `Map square limit: (Package 2) + 4x4`,
              'Can save map',
              `Can share map (Unlimite)`,
              `Voxedit: Can save (model...)`,
              `Market share: 97%`,
              `Multiplayer`,
            ]}
          />
          
        </SimpleGrid>
      </Box>
      <PaymentModal
        paymentIsOpen={paymentIsOpen}
        paymentOnclose={paymentOnclose}
        totalBill={1000}
        totalPrice={2000}
        createNewTransaction={createNewTransaction}
        plan={plan}
      />
      
    
    </Flex>
  )
}

export default SubscribePlan