"use client";
import { useState } from "react";

import DefaultLayout from "@/components/Dashboard/layouts/DefaultLayout";

import Image from "next/image";
import { ImageUp } from "lucide-react";
import CreateEventForm from "@/components/Dashboard/event/CreateEventForm";

const CreateEvent = () => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <DefaultLayout>
      <div className="w-full flex flex-col gap-4">
        <div>
          <h1 className="font-semibold text-xl">Create New Event</h1>
        </div>

        <div className="p-12 bg-white/10 rounded-lg h-fit">
          <CreateEventForm></CreateEventForm>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CreateEvent;
