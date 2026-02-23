import useSubcriptionHook from "@/libs/Hooks/useSubcriptionHook";
import { toastError } from "@/utils/helpers";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { Box, useDisclosure } from "@chakra-ui/react";

const amount = 5;

const SubscribeButton = ({paymentOnclose}) => {
    const { createSubscripsstion, isLoading } = useSubcriptionHook();
    const [{ isResolved }] = usePayPalScriptReducer();

    if (!isResolved) return <div>Loading paypal...</div>;



    const paypalSubscribe = (actions) => {
        return actions.subscription.create({
            'plan_id': process.env.NEXT_PUBLIC_SUBSCRIPTIONID
        });
    };

    const paypalOnError = (err) => {
        if (err?.message) {
            toastError("Error", { errorMessage: err?.message });

        }
    }
    const paypalOnApprove = async (data, detail) => {
        let plan = {
            planType: "Standard",
            planid: process.env.NEXT_PUBLIC_SUBSCRIPTIONID
        }
        createSubscripsstion(plan, data, detail).then(_success => paymentOnclose());
    };

    return (
        <>

            <Box
                padding="5px"
                backgroundColor="#ffffff"
                borderRadius="5px"
               w={"full"}
            >
                <PayPalButtons
                    //  onClick={(data, actions) => {
                    //     if (userDetails?.subscriptionType === 1) {
                    //         toastError(null, null, `You have been successfully subscribed`)
                    //         return actions.reject()
                    //     } else {
                    //         return actions.resolve()
                    //     }
                    // }}
                    createSubscription={(data, actions) => paypalSubscribe(actions)}
                    onApprove={(data, details) => paypalOnApprove(data, details)}
                    onError={(err) => paypalOnError(err)}
                    catchError={(err) => paypalOnError(err)}
                    onCancel={(err) => paypalOnError(err)}
                    key={amount}
                    // style={{
                    //     shape: 'rect',
                    //     color: 'blue',
                    //     layout: 'horizontal',
                    //     label: 'subscribe',
                    //     height: 35,
                    //     size: "responsive",
                    //     tagline: false,
                    // }}
                    // style={{
                    //     layout: 'horizontal',
                    //     color: "blue",
                    //     height: 35,
                    // }}
                    style={{
                        color: "blue"
                    }}
                />
            </Box>

           
        </>

    );
}

export default SubscribeButton;