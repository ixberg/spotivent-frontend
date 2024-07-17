import SignIn from "@/components/Dashboard/auth/login-form";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import SignUp from "@/components/Dashboard/auth/register-form";

export const metadata: Metadata = {
  title: "Spotivent",
  description: "Enjoy the amazing concert",
};

const SignUpPage = () => {
  return (
    <main className="flex flex-col gap-8 lg:gap-0 p-8 lg:p-0 lg:flex-row items-center justify-center min-h-screen">
      <div className="flex basis-2/5 justify-center">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="animate-spin"
          />
          <div className="flex flex-col gap-4 text-center lg:text-start">
            <p className="font-bold text-6xl font-inter tracking-tighter">
              Spotivent
            </p>
            <p className="font-light text-lg ml-1">For Event Organizer</p>
          </div>
        </div>
      </div>
      <div className="flex basis-3/5 items-center justify-center">
        <SignUp />
      </div>
    </main>
  );
};

export default SignUpPage;
