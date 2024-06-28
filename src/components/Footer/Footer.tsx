import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-2">
      <div className="w-full py-10 px-20 bg-background-100">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-center">
              <Image src="/Logo.svg" alt="logo" width={44} height={44} />
              <div>
                <p className="font-bold text-2xl font-inter tracking-tighter">
                  Spotivent
                </p>
              </div>
            </div>
            <p>Copyright © 2022. All Rights Reserved.</p>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <p className="font-bold">Page Menus</p>
              <ul className="flex flex-col gap-2">
                <li>Home</li>
                <li>Album</li>
                <li>Artis</li>
                <li>Sound</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Community</p>
              <ul className="flex flex-col gap-2">
                <li>For Artist</li>
                <li>Developer</li>
                <li>Ads</li>
                <li>Investor</li>
                <li>Vendor</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Term & Condition</p>
              <ul className="flex flex-col gap-2">
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Social Media</p>
              <ul className="flex flex-col gap-2">
                <li>Twitter</li>
                <li>Tiktok</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
