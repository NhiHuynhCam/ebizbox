import Loader from "@/components/Loader";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearStates, fetchUserDetails } from "@/redux/slices/userSlice";

export const withAuth = (Component) => {
    return function Auth(props) {
        const dispatch = useDispatch();
        const { userDetails, error } = useSelector((state) => state.user);
        const [isAuthorized, setIsAuthorized] = useState(false);
        useEffect(() => {
            userDetails && setIsAuthorized(true);
        }, [userDetails]);

        useEffect(() => {
            if (error && error.errorType === "FETCH_USER_DETAILS") {
                Router.push("/auth/login?redirect=true");
                // dispatch(clearStates());
            }
        }, [error]);

        useEffect(() => {
            if (localStorage.getItem("base_acccess_token")) {
                // setIsAuthorized(true);
                !userDetails && dispatch(fetchUserDetails());
            } else {
                Router.push("/auth/login?redirect=true");
            }
        }, []);


        return isAuthorized ? <Component {...props} /> : <Loader />;
    };
};
