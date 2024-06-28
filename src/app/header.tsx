import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full p-2 bg-background-500">
      <div className="flex justify-between items-center bg-background-100 h-[10vh] rounded-lg px-10 relative">
        <div className="flex gap-4 items-center">
          <Image src="/Logo.svg" alt="logo" width={44} height={44} />
          <p className="font-bold text-xl font-inter tracking-tighter">
            Spotivent
          </p>
        </div>
        <div className="flex flex-grow justify-center items-center gap-4 absolute right-1/2 translate-x-1/2">
          <input
            type="text"
            placeholder="Search festival, concerts"
            className="flex-grow px-6 py-4 rounded-full outline-none bg-transparent border-white border-[1px] w-80"
          />
          <div className="flex items-center gap-2 rounded-full border-white border-[1px] p-4">
            <Image
              src="icon/location.svg"
              alt="location"
              width={24}
              height={24}
            />
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/signup">
            <button className="px-5 h-full">Sign Up</button>
          </Link>
          <button className="px-5 py-2 rounded-full bg-white text-black">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
