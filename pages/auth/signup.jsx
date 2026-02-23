import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import LoginForm from "./components/LoginForm";
import OTPForm from "./components/OTPForm";
import useLoginHook from "@/libs/Hooks/useLoginHook";
import { colors } from "@/utils/colors";
import { Flex } from "@chakra-ui/react";

function Login({ previousRoute }) {
    const {
        step,
        loginDetails,
        handleSendOTP,
        handleVerifyOTP,
        isLoading,
        handleChange,
    } = useLoginHook(previousRoute);
    console.log({
        step
    })
    return (
        <>
            <Navbar />
            <Flex
                bg={colors.darkBg}
                bgImage={"/bg/bg.png"}
                bgPos="center center"
                bgRepeat="no-repeat"
                bgSize="cover"
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                px={5}
                py={"80px"}
            >

                {step === 0 ?
                    <LoginForm
                        title="SIGN UP"
                        previousRoute={previousRoute}
                        handleChange={handleChange}
                        isLoading={isLoading}
                        handleSubmit={handleSendOTP}
                        form={loginDetails}
                    /> :
                    <OTPForm
                        previousRoute={previousRoute}
                        handleChange={handleChange}
                        isLoading={isLoading}
                        handleSubmit={handleVerifyOTP}
                        form={loginDetails}
                        ResendOTP={handleSendOTP}
                    />}
            </Flex>
            <Footer />
        </>

    );
}

export async function getServerSideProps(context) {
    return { props: { previousRoute: context.req.headers.referer || null } };
}

export default Login;