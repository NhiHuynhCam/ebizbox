

import { VStack } from "@chakra-ui/react";
import { colors } from "@/utils/colors";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import SubscribePlan from "./components/Plan";
function Subcription() {
    return (
        <>
            <Navbar />
            <VStack
                    bg={colors.darkBg}
                    bgImage={"/bg/bg.jpg"}
                    bgPos="center center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    minH={"100vh"}
                    align={"center"}
                    justify={"center"}
            >

                <SubscribePlan />
            </VStack>
            <Footer />
        </>
    );
}

export default Subcription;