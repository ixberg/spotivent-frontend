"use client";
import DefaultLayout from "@/components/Dashboard/layouts/DefaultLayout";
import CardDataStats from "@/components/elements/CardDataStats";
import React, { useEffect } from "react";
import { TicketCheck, UsersRound, BadgeDollarSign } from "lucide-react";
import ChartOne from "@/components/elements/ChartOne";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
          <CardDataStats
            title="Ticket sales revenue"
            total="3.456.000"
            rate="0.43%"
            levelUp
          >
            <div className="flex items-center justify-center p-2 rounded-full bg-yellow-500">
              <BadgeDollarSign />
            </div>
          </CardDataStats>
          <CardDataStats
            title="Total customer"
            total="2.301"
            rate="0.43%"
            levelUp
          >
            <div className="flex items-center justify-center p-2 rounded-full bg-blue-500">
              <UsersRound />
            </div>
          </CardDataStats>
          <CardDataStats title="My Event" total="12" rate="0.43%" levelUp>
            <div className="flex items-center justify-center p-2 rounded-full bg-red-500">
              <TicketCheck />
            </div>
          </CardDataStats>
        </div>
        <ChartOne />
      </div>
    </DefaultLayout>
  );
};

export default Page;
