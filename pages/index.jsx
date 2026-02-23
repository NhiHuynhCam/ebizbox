import Loader from "@/components/Loader";
import Maintentance from "@/components/Maintentance";
import Navbar from "@/components/Navbar";
import AvatarOwner from "@/components/sections/AvatarOwner";
import Banner from "@/components/sections/Banner";
import Community from "@/components/sections/Community";
import Footer from "@/components/sections/Footer";
import Nfts from "@/components/sections/Nfts";
import Partner from "@/components/sections/Partner";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loader />;

  return (
    <>
      {/* <Head>
        <title>EBIZBOX</title>
        <meta name="description" content="XXXX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Community />
      <AvatarOwner />
      <Partner /> */}
      <Maintentance />
      {/* <Nfts /> */}
     
      <Footer />
    </>
  );
}
