import React from "react";
import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";
import { withAuth } from "@/utils/withAuth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import AccountBanner from "./components/AccountBanner";
import Profile from "./components/Profile";

function AccountPage() {
  return (
    <>
      <Head>
        <title>Account - Base</title>
      </Head>
      <Navbar position={"position"}/>

      <AccountBanner />
      <Profile />

     
      <Footer />
    </>
  );
}

export default withAuth(AccountPage);