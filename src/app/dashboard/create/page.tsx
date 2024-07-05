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

        <div className="p-6 bg-background-100 rounded-lg">
          <CreateEventForm></CreateEventForm>
          <div
            id="FileUpload"
            className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary px-4 py-4 dark:bg-gray-800 sm:py-7.5"
          >
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
              onChange={handleImageChange}
            />
            {thumbnail ? (
              <div className="relative w-full h-full">
                <Image
                  src={thumbnail}
                  width={1200}
                  height={400}
                  alt="Thumbnail Preview"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-boxdark">
                  <ImageUp />
                </span>
                <p>
                  <span className="text-primary">Click to upload</span> or drag
                  and drop
                </p>
                <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                <p>(max, 800 X 800px)</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CreateEvent;
