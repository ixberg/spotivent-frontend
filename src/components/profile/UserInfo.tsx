import React from "react";
import { CircleUserRound, CircleDollarSign, TicketPercent } from "lucide-react";
import { useSession } from "next-auth/react";
import { useUserData } from "@/hooks/useUserData";
import { Skeleton } from "../ui/skeleton";

const UserInfo: React.FC = () => {
  const { data: session } = useSession();
  const { userData, loading, error } = useUserData(session);

  if (loading) {
    return (
      <div className="p-8 lg:p-5 bg-white/10 basis-1/3 lg:sticky lg:top-[100px] h-fit rounded-xl flex flex-col gap-5">
        <div className="flex flex-col gap-4 items-center">
          <CircleUserRound
            size={90}
            strokeWidth={1}
            className="text-primary-500"
          />
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="rounded-lg w-full h-7"></Skeleton>
            <p className="font-light text-xs text-center"></p>
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
          <span className="font-semibold text-lg ml-8"></span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="p-1 bg-yellow-500 rounded-full">
              <TicketPercent size={16} />
            </div>
            <p>Referral </p>
          </div>
          <span className="font-semibold text-lg ml-8"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 lg:p-5 bg-white/10 basis-1/3 lg:sticky lg:top-[100px] h-fit rounded-xl flex flex-col gap-5">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="p-8 lg:p-5 bg-white/10 basis-1/3 lg:sticky lg:top-[100px] h-fit rounded-xl flex flex-col gap-5">
        <p>No user data available</p>
      </div>
    );
  }

  return (
    <div className="p-8 lg:p-5 bg-white/10 basis-1/3 lg:sticky lg:top-[100px] h-fit rounded-xl flex flex-col gap-5">
      <div className="flex flex-col gap-4 items-center">
        <CircleUserRound
          size={90}
          strokeWidth={1}
          className="text-primary-500"
        />
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xl text-center">
            {userData.username}
          </p>
          <p className="font-light text-sm text-center">{userData.email}</p>
        </div>
      </div>
      <hr className="border border-dashed border-white/10" />
      <div className="flex gap-4 items-center justify-center">
        <div className="flex gap-2 items-center w-full p-2 bg-background-100 rounded-lg">
          <div className="p-2 bg-yellow-500 rounded-full h-fit">
            <TicketPercent size={16} />
          </div>
          <div className="font-semibold text-lg">
            <p className="text-sm font-extralight">Referral</p>
            <p>{userData.referralCode}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center w-full p-2 bg-background-100 rounded-lg">
          <div className="p-2 bg-yellow-500 rounded-full h-fit">
            <CircleDollarSign size={16} />
          </div>
          <div className="font-semibold text-lg">
            <p className="text-sm font-extralight">My Point</p>
            <p>Rp {userData.point?.toLocaleString("id-ID") || "0"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
