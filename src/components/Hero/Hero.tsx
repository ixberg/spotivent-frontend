import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="px-2 w-full">
      <div className="flex items-center relative h-[535px]">
        <Image
          src="/image/banner.png"
          alt="banner"
          width={1424}
          height={535}
          className="object-cover w-full absolute -z-10"
        ></Image>
        <div className="flex flex-col gap-5 relative left-20 justify-center w-fit">
          <Image
            src="/image/image-logo.png"
            alt="logo"
            width={95}
            height={108}
            priority
            quality={100}
          ></Image>
          <h1 className="font-syne font-bold text-5xl">
            Find concerts near you
          </h1>
          <p>
            Get personalized concert recommendations and <br /> stay connected
            with your favorite artists
          </p>
          <Button className="w-fit">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
