import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full p-2 bg-background-500">
      <div className="flex justify-between items-center bg-background-100 h-[10vh] rounded-lg px-10">
        <div className="flex gap-4 items-center">
          <Image src="/Logo.svg" alt="logo" width={44} height={44}></Image>
          <p className="font-bold text-xl font-inter tracking-tighter">
            Spotivent
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-5">Sign Up</button>
          <button className="px-5 py-2 rounded-full bg-white text-black">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
