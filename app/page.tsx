"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Header from "./dashboard/_components/header";
import Footer from "./dashboard/_components/footer";
import HeroSection from "./dashboard/_components/HeroSection";


const Page = () => {
  const router = useRouter();

  return (
    <main>
      {/* <Header /> */}
      {/* <Button onClick={() => router.push("/dashboard")}>

        Click Me
      </Button> */}
      < HeroSection />
      {/* <Footer /> */}
    </main>
  );
};

export default Page;
