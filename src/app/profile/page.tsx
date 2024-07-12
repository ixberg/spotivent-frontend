import React from "react";
import { CircleUserRound, CircleDollarSign, TicketPercent } from "lucide-react";

const Profile = () => {
  const price = 100000;
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <section className="px-2 w-full mt-[96px]">
        <div className="w-full bg-background-500 p-20 flex gap-12">
          <div className="p-5 bg-white/10 basis-1/3 sticky top-[100px] h-fit rounded-xl flex flex-col gap-5 ">
            <div className="flex flex-col gap-4 items-center">
              <CircleUserRound
                size={90}
                strokeWidth={1}
                className="text-primary-500"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl text-center">
                  Ahmad Wiryawan
                </p>
                <p className="font-light text-xs text-center">
                  ahmadwiryawan@gmail.com
                </p>
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
                Rp{price.toLocaleString("id-ID")}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="p-1 bg-yellow-500 rounded-full">
                  <CircleDollarSign size={16} />
                </div>
                <p>Referral </p>
              </div>
              <span className="font-semibold text-lg ml-8">
                asdas9230232n3jken2
              </span>
            </div>
          </div>
          <div className="basis-2/3">
            {/* Simulating content to allow the sticky element to work */}
            <div style={{ height: "2000px" }}>My Ticket</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
