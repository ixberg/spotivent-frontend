import DefaultLayout from "@/components/Dashboard/layouts/DefaultLayout";
import Image from "next/image";
import CreateEventForm from "@/components/Dashboard/event/CreateEventForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Create Event",
};

const CreateEvent = () => {
  return (
    <DefaultLayout>
      <div className="w-full flex flex-col gap-4">
        <div>
          <h1 className="font-semibold text-xl">Create New Event</h1>
        </div>
        <div className="lg:p-12 p-8 bg-white/10 rounded-lg h-fit">
          <CreateEventForm></CreateEventForm>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CreateEvent;
