"use client";
import React from "react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

interface CuponComponentProps {
  cuponName: string;
  discount: number;
  isCouponActive: boolean;
  setIsCouponActive: (active: boolean) => void;
}

const CuponComponent: React.FC<CuponComponentProps> = ({
  cuponName,
  discount,
  isCouponActive,
  setIsCouponActive,
}) => {
  return (
    <div className="relative flex flex-col gap-4 border border-white/50 bg-gradient-to-r from-yellow-500 from-10% via-yellow-600 to-yellow-700 rounded-lg p-5">
      <div className="absolute bg-background-100 rounded-full p-4 border-r-white/50 border-r-[1px] w-fit -left-5 top-[96px]"></div>
      <div className="absolute bg-background-100 rounded-full p-4 border-l-white/50 border-l-[1px] w-fit -right-5 top-[96px]"></div>
      <div>
        <h2 className="text-lg text-black font-semibold mb-2">{cuponName}</h2>
        <p className="text-yellow-800 text-2xl font-semibold mb-2">
          {discount}
          <span>%</span>
        </p>
      </div>
      <hr className="border-dashed border-black" />
      <div className="flex justify-between items-center w-full">
        <p className="font-normal text-black text-sm">
          Can use: <span></span>
        </p>
        <Switch checked={isCouponActive} onCheckedChange={setIsCouponActive} />
      </div>
    </div>
  );
};

export default CuponComponent;
