import React from "react";
import { CircleUserRound, CircleDollarSign, TicketPercent } from "lucide-react";

interface UserInfoProps {
  name: string;
  email: string;
  points: number;
  referralCode: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  name,
  email,
  points,
  referralCode,
}) => {
  return (
    <div className="p-8 lg:p-5 bg-white/10 basis-1/3 lg:sticky lg:top-[100px] h-fit rounded-xl flex flex-col gap-5">
      <div className="flex flex-col gap-4 items-center">
        <CircleUserRound
          size={90}
          strokeWidth={1}
          className="text-primary-500"
        />
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xl text-center">{name}</p>
          <p className="font-light text-xs text-center">{email}</p>
        </div>
      </div>
      <hr className="border border-dashed border-white/10" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="p-1 bg-yellow-500 rounded-full">
            <CircleDollarSign size={16} />
          </div>
          <p>My Point</p>
        </div>
        <span className="font-semibold text-lg ml-8">
          Rp{points.toLocaleString("id-ID")}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="p-1 bg-yellow-500 rounded-full">
            <TicketPercent size={16} />
          </div>
          <p>Referral </p>
        </div>
        <span className="font-semibold text-lg ml-8">{referralCode}</span>
      </div>
    </div>
  );
};

export default UserInfo;
