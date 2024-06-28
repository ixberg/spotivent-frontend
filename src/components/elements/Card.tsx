import React from "react";
import Image from "next/image";

interface EventDetailsProps {
  date: string;
  thumbnail: string;
  month: string;
  title: string;
  city: string;
  country: string;
  price: number;
  onClick?: () => void;
}

const Card: React.FC<EventDetailsProps> = ({
  date,
  thumbnail,
  month,
  title,
  city,
  country,
  price,
}) => {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <div className="relative">
        <div className="flex flex-col absolute justify-center bg-black p-3 top-2 left-2 rounded-lg">
          <h2 className="text-center">{date}</h2>
          <p className="text-center">{month}</p>
        </div>
        <Image
          src={thumbnail}
          alt="thumb"
          width={280}
          height={280}
          className=""
        ></Image>
      </div>
      <div className="flex flex-col gap-[6px]">
        <p className="font-medium text-xl">{title}</p>
        <p className="font-light text-gray-500 text-[14px]">
          {city}, <span>{country}</span>
        </p>
        <p className="text-normal">
          Start from{" "}
          <span className="font-semibold text-primary-500">Rp.{price}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
