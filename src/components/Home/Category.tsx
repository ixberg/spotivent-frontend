"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import Card from "../elements/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import slugify from "@/lib/slugify";
// import { Skeleton } from "@shadcn/ui"; // Import Skeleton component

interface Event {
  id: number;
  date: string;
  time: string;
  thumbnail: string;
  banner_image: string;
  title: string;
  category: string;
  description: string;
  city: string;
  country: string;
  location: string;
  price: number;
  ticket_tier: { tier: string; price: number }[];
  event_organizer: string;
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

const Category = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Concerts");
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/events");
        setEvents(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle loading state on error as well
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Ensure events are set before filtering
    filterEvents(selectedCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  const handleCardClick = (event: Event) => {
    const slug = slugify(event.title);
    router.push(`/event/${event.id}/${slug}`);
  };

  const filterEvents = (category: string) => {
    setSelectedCategory(category);
    if (category === "All Concerts") {
      setFilteredEvents(events); // Show all events
    } else {
      setFilteredEvents(events.filter((event) => event.category === category));
    }
  };

  return (
    <div className="px-2 w-full">
      <div className="flex flex-col w-full bg-background-100 h-fit rounded-lg p-10 lg:p-20 gap-5 lg:gap-10 ">
        <div className="flex justify-between w-full">
          <h1 className="font-syne text-2xl lg:text-3xl font-bold">
            Concert Category
          </h1>
        </div>

        <Tabs
          defaultValue={selectedCategory}
          value={selectedCategory}
          onValueChange={filterEvents}
          className="flex flex-col gap-10"
        >
          <div className="flex justify-between sticky top-[176px] lg:top-[96px] gap-4 lg:gap-0 flex-col lg:flex-row z-40 bg-background-100 py-2">
            <TabsList className="flex gap-3 overflow-x-scroll w-full items-start justify-start rounded-lg">
              <TabsTrigger
                value="All Concerts"
                onClick={() => filterEvents("All Concerts")}
              >
                All Concerts
              </TabsTrigger>
              {/* Loop through your available categories to render tabs */}
              {[
                "Solo Artist",
                "Festival Artist",
                "Opera",
                "Classical Music",
                "Jazz Music",
              ].map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => filterEvents(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button variant={"outline"} className="w-fit">
              Filter
            </Button>
          </div>
          <TabsContent
            value={selectedCategory}
            className="grid grid-cols-1 lg:grid-cols-4 h-fit gap-4 gap-y-8 w-full justify-center"
          >
            {/* Conditional rendering based on loading and data availability */}
            {loading ? (
              // Show skeleton loaders while loading
              Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="280px" />
              ))
            ) : filteredEvents.length > 0 ? (
              // Show event cards if events are available
              filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  date={splitDate(event.date).day}
                  month={splitDate(event.date).month}
                  thumbnail={event.thumbnail}
                  title={event.title}
                  city={event.city}
                  country={event.country}
                  price={event.price}
                  width="w-full"
                  onClick={() => handleCardClick(event)}
                />
              ))
            ) : (
              // Show message if no events found in this category
              <p className="text-center text-gray-500">
                No events found in this category.
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
