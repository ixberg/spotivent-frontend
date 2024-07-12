"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Card from "../elements/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import slugify from "@/lib/slugify";

interface Event {
  id: number;
  date: string;
  time: string;
  thumbnail: string;
  title: string;
  city: string;
  country: string;
  price: number;
}

const monthAbbreviations: { [key: string]: string } = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

const splitDate = (dateString: string): { day: string; month: string } => {
  const [day, month, year] = dateString.split(" ");
  return { day, month: monthAbbreviations[month] };
};

const Upcoming: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get<Event[]>("http://localhost:8080/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleCardClick = (event: Event) => {
    const slug = slugify(event.title);
    router.push(`/event/${event.id}/${slug}`);
  };

  return (
    <div className="px-2 w-full">
      <div className="flex flex-col w-full bg-background-100 h-[615px] rounded-lg p-20 gap-10">
        <div className="flex justify-between w-full">
          <h1 className="font-syne text-3xl font-bold">Upcoming Event</h1>
        </div>
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {events.map((event) => (
              <CarouselItem
                key={event.id}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card
                    date={splitDate(event.date).day}
                    month={splitDate(event.date).month}
                    thumbnail={event.thumbnail}
                    title={event.title}
                    city={event.city}
                    country={event.country}
                    price={event.price}
                    onClick={() => handleCardClick(event)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Upcoming;
