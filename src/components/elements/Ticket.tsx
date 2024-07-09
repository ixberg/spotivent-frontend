"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTicketQuantity } from "@/store/ticketSlice";

interface TicketComponentProps {
  ticketName: string;
  price: number;
}

const TicketComponent: React.FC<TicketComponentProps> = ({
  ticketName,
  price,
}) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    dispatch(
      setTicketQuantity({ name: ticketName, quantity: newQuantity, price })
    );
  };

  return (
    <div className=" relative flex flex-col gap-4 border border-white/50 bg-background-500 rounded-lg p-5">
      <div className="absolute bg-background-100 rounded-full p-4 border-r-white/50 border-r-[1px] w-fit -left-5 top-[88px]"></div>
      <div className="absolute bg-background-100 rounded-full p-4 border-l-white/50 border-l-[1px] w-fit -right-5 top-[88px]"></div>
      <div>
        <h2 className="text-lg font-semibold mb-2">{ticketName}</h2>
        <p className="text-gray-500 mb-2">Price exclude tax</p>
      </div>
      <hr className="border-dashed border-white/20" />
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-primary-500">
          Rp{price.toLocaleString("id-ID")}{" "}
          <span className="font-normal text-white/50 text-sm">/ pax</span>
        </p>
        <div className="flex items-center justify-between">
          <select
            value={quantity}
            onChange={handleQuantityChange}
            className="border rounded-lg py-1 px-3 bg-background-50"
          >
            {Array.from({ length: 11 }, (_, num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
