import SignUp from "@/components/auth/register-form";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spotivent",
  description: "Enjoy the amazing concert",
};

const SignUpPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col basis-2/5 justify-center">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={180}
            height={180}
            className="animate-spin"
          />
          <div className="flex flex-col gap-4">
            <p className="font-bold text-6xl font-inter tracking-tighter text-primary-500">
              Spotivent
            </p>
            <p className="font-thin text-lg">Enjoy the amazing music fest!</p>
          </div>
        </div>
        <p className="text-center">
          Register as{" "}
          <span className="hover:underline poinre text-blue-500">
            <Link href="/dashboard/signup">Event Organizer</Link>
          </span>
        </p>
      </div>
      <div className="flex basis-3/5 mt-10 justify-center">
        <SignUp />
      </div>
    </main>
  );
};

export default SignUpPage;
