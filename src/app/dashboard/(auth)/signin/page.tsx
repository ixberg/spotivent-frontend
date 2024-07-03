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
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex basis-2/5 justify-center">
        <div className="flex gap-4 items-center">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="animate-spin"
          />
          <div className="flex flex-col gap-4">
            <p className="font-bold text-6xl font-inter tracking-tighter">
              Spotivent
            </p>
            <p className="font-light text-lg">For Event Organizer</p>
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
