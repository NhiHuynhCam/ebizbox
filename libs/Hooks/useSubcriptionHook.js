import { toastError, toastSuccess } from "@/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { createSubscription, fetchUserDetails } from "@/redux/slices/userSlice";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";


export default function useSubcriptionHook() {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.user);
    const [plan, setPlan] = useState(1);
    const { isOpen: paymentIsOpen, onOpen: paymentOnopen, onClose: paymentOnclose } = useDisclosure();
    

    const createSubscripsstion = async (plan, data, detail) => {

        const { payload, error } = await dispatch(
            createSubscription({
                plan, data, detail
            })
        );

        if (payload?.message) {
            dispatch(fetchUserDetails());
            toastSuccess(
                "Successful",
                "Subscription Successful"
            );
            return true
        } else {
            console.log(error);
            toastError(null, error);
            return false
        }
        
    };

    return {
        createSubscripsstion,
        isLoading: loading === "CREATE_SUBCRIPTION",
        plan,
        setPlan,
        paymentIsOpen,
        paymentOnclose,
        paymentOnopen
    };

}