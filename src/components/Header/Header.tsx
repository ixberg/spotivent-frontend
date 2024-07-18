"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState<{
    minutes: number;
    seconds: number;
  }>({
    minutes: 15,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const { minutes, seconds } = prevTimeLeft;
        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return { minutes: 0, seconds: 0 };
        } else if (seconds === 0) {
          return { minutes: minutes - 1, seconds: 59 };
        } else {
          return { minutes, seconds: seconds - 1 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-2 bg-background-500 z-50 fixed">
      <div className="flex justify-between items-center bg-background-100 h-[80px] rounded-lg px-10 relative">
        <div className="hidden lg:flex gap-2 items-center">
          <Image src="/Logo.svg" alt="logo" width={44} height={44} />
          <p className="font-bold text-xl font-inter tracking-tighter">
            Spotivent
          </p>
        </div>
        <div className="flex gap-4 items-center text-center">
          <p className="text-lg">Pay Before :</p>
          <div className="flex bg-red-500 rounded-xl p-2 w-[100px] justify-center space-x-2">
            <div>
              <p className="text-xl">
                {String(timeLeft.minutes).padStart(2, "0")}
              </p>
            </div>
            <div>:</div>
            <div>
              <p className="text-xl">
                {String(timeLeft.seconds).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
