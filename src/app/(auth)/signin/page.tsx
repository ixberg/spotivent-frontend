import SignIn from "@/components/Dashboard/auth/login-form";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spotivent",
  description: "Enjoy the amazing concert",
};

const SignInPage = () => {
  return (
    <main className="flex flex-col gap-8 w-full p-10 lg:p-0 lg:flex-row lg:gap-0 items-center justify-center min-h-screen">
      <div className="flex basis-2/5 justify-center w-full">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <Image src="/Logo.svg" alt="logo" width={100} height={100} />
          <div className="flex flex-col gap-4">
            <p className="font-bold text-center text-3xl lg: lg:text-start lg:text-6xl font-inter tracking-tighter">
              Spotivent
            </p>
            <p className="font-light text-sm lg:text-lg">
              Enjoy the amazing music fest!
            </p>
          </div>
        </div>
      </div>
      <div className="flex basis-3/5 items-center justify-center">
        <SignIn />
      </div>
    </main>
  );
};

export default SignInPage;
