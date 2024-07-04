"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Link from "next/link";

export type Event = {
  id: string;
  image: string;
  name: string;
  date: string;
  seat: number;
};

export const column: ColumnDef<Event>[] = [
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "date",
    header: "Event Date",
  },
  {
    accessorKey: "seat",
    header: "Seat",
  },
  {
    id: "action",
    cell: ({ row }) => {
      const event = row.original;

      return (
        <div className="inline-flex gap-5 item-center">
          <Button variant={"secondary"} asChild>
            <Link href={`/dashboard/event/edit/${event.id}`}>
              <Pencil />
              Edit
            </Link>
          </Button>
        </div>
      );
    },
  },
];
