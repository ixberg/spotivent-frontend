import DefaultLayout from "@/components/Dashboard/layouts/DefaultLayout";
import { Button } from "@/components/ui/button";
import React from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { column } from "./components/column-table";
import Link from "next/link";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | My Event",
};

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  } else if (session.user.role !== "ORGANIZER") {
    redirect("/unauthorized");
  }
  return (
    <DefaultLayout>
      <div className="flex w-full flex-col gap-10">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">My Event</h1>
          <Link href="/dashboard/create">
            <Button variant={"secondary"}>
              <span>
                <Plus size={20} />
              </span>
              Create New Event
            </Button>
          </Link>
        </div>
        <DataTable columns={column} data={[]}></DataTable>
      </div>
    </DefaultLayout>
  );
};

export default page;
