import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Event: React.FC = () => {
  return (
    <section className="px-2 w-full">
      <div className="flex flex-col w-full bg-background-100 h-fit rounded-lg p-20 gap-10">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/image/event-banner.png"
            alt="banner"
            width={1232}
            height={443}
            priority
            quality={100}
            className="w-full object-cover"
          ></Image>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-8 basis-3/5">
            <h1 className="font-syne text-3xl font-bold">
              Jakarta Head In the Clouds - Music & Art Festival
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Image
                  src="/icon/location.svg"
                  alt="icon-loc"
                  width={24}
                  height={24}
                ></Image>
                <p>Parkiran Utama Mall @ Alam Sutera</p>
              </div>
              <p>
                Marty travels back in time using an eccentric scientists time
                machine. However, he must make his high-school-aged parents fall
                in love in order to return to the present.
              </p>
              <div className="flex gap-3 rounded-xl border-white border-[1px] p-4 w-fit">
                <Image
                  src="/icon/calendar.svg"
                  alt="icon-loc"
                  width={24}
                  height={24}
                ></Image>
                <p>September 22, 2021 · 20.00 - 21.56 WIB</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold font-syne text-xl">Choose your seat</h1>
            </div>
          </div>
          <div className="flex flex-col basis-2/5 gap-6">
            <div className="flex flex-col gap-3 border-white border-[1px] p-6 rounded-2xl">
              <h2>Ticket starting from</h2>
              <p className="text-primary-500 font-bold text-3xl">
                Rp. <span>500.000,00</span>
              </p>
            </div>
            <div className="flex flex-col gap-3 border-white border-[1px] p-6 rounded-2xl">
              <h2>Venue</h2>
              <Image
                src="/image/vanue.png"
                alt="vanue-image"
                width={378}
                height={278}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
