import Axios from "axios";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { BASE_API_URL } from "@/utils/constants";
import { toastError, toastSuccess } from "@/utils/helpers";
import { logoutUser, setUserDetails } from "@/redux/slices/userSlice";

const initialLoginDetails = {
  email: "",
  otp: ""
};

export default function useLoginHook(previousRoute) {
  const [step, setStep] = useState(0)
  const [loginDetails, setLoginDetails] = useState(initialLoginDetails);
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("base_acccess_token");
    dispatch(logoutUser());
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleSendOTP = (event) => {
    event.preventDefault();

    setIsLoading(true);
    Axios.post(BASE_API_URL + "/api/users/sendOTP", {
      email: loginDetails.email
    })
      .then(({ data }) => {
        setStep(1)
        toastSuccess("", data.message);
      })
      .catch(({ response }) => {
        setIsLoading(false);
        toastError("Unable to send otp", { errorMessage: response?.data });
      }).finally(() => setIsLoading(false));
  };
  const handleVerifyOTP = (event) => {
    event.preventDefault();
    setIsLoading(true);
    Axios.post(BASE_API_URL + "/api/users/verifyOTP", loginDetails)
      .then(({ data }) => {
        localStorage.setItem("base_acccess_token", data?.token);
        dispatch(setUserDetails(data?.user));
        if (query.redirect == "true") {
          Router.back();
        } else {
          Router.replace("/");
        }
      })
      .catch(({ response }) => {
        setIsLoading(false);
        setLoginDetails({
          ...loginDetails,
          "otp": "",
        });
        toastError("Unable to verify", { errorMessage: response?.data });
      });
  };

  return {
    loginDetails,
    setLoginDetails,
    isLoading,
    handleSendOTP,
    handleChange,
    step,
    handleVerifyOTP
  };
}