import DefaultLayout from "@/components/Dashboard/layouts/DefaultLayout";
import { Button } from "@/components/ui/button";
import React from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { column } from "./components/column-table";

const page = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full flex-col gap-10">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">My Event</h1>
          <Button variant={"secondary"}>
            <span>
              <Plus size={20} />
            </span>
            Create New Event
          </Button>
        </div>
        <DataTable columns={column} data={[]}></DataTable>
      </div>
    </DefaultLayout>
  );
};

export default page;
