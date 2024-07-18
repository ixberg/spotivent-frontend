"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserInfo from "./UserInfo";
import TicketList from "./TicketList";
import EventDetailsModal from "./EventModal";
import { EventTicket } from "./type";

const Profile: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventTicket | null>(null);

  const userTickets: EventTicket[] = [
    {
      id: 1,
      eventName: "Summer Music Festival 2024",
      date: "2024-08-15",
      time: "14:00 - 23:00",
      location: "Central Park, New York City",
      status: "upcoming",
      tickets: [
        { tier: "VIP", quantity: 2 },
        { tier: "General Admission", quantity: 1 },
      ],
    },
    {
      id: 2,
      eventName: "Tech Innovation Conference 2024",
      date: "2024-09-22",
      time: "09:00 - 18:00",
      location: "Moscone Center, San Francisco",
      status: "upcoming",
      tickets: [{ tier: "Standard", quantity: 1 }],
    },
    {
      id: 3,
      eventName: "International Food and Wine Expo",
      date: "2024-10-05",
      time: "11:00 - 20:00",
      location: "ExCeL London",
      status: "upcoming",
      tickets: [{ tier: "Gourmet Package", quantity: 2 }],
    },
    {
      id: 4,
      eventName: "World Cup Final 2024",
      date: "2024-07-14",
      time: "20:00 - 23:00",
      location: "Wembley Stadium, London",
      status: "upcoming",
      tickets: [{ tier: "Category 1", quantity: 3 }],
    },
    {
      id: 5,
      eventName: "Broadway Show: Hamilton",
      date: "2024-11-30",
      time: "19:30 - 22:30",
      location: "Richard Rodgers Theatre, New York",
      status: "upcoming",
      tickets: [{ tier: "Orchestra", quantity: 2 }],
    },
    {
      id: 6,
      eventName: "Comic Con 2024",
      date: "2024-07-18",
      time: "10:00 - 19:00",
      location: "San Diego Convention Center",
      status: "upcoming",
      tickets: [{ tier: "4-Day Pass", quantity: 1 }],
    },
    {
      id: 7,
      eventName: "Winter Jazz Festival",
      date: "2024-01-15",
      time: "18:00 - 23:00",
      location: "Blue Note Jazz Club, New York",
      status: "completed",
      tickets: [{ tier: "VIP Table", quantity: 4 }],
    },
    {
      id: 8,
      eventName: "E3 Gaming Expo",
      date: "2024-06-11",
      time: "10:00 - 18:00",
      location: "Los Angeles Convention Center",
      status: "completed",
      tickets: [{ tier: "Gamer Pass", quantity: 1 }],
    },
    {
      id: 9,
      eventName: "Formula 1 Monaco Grand Prix",
      date: "2024-05-26",
      time: "14:00 - 17:00",
      location: "Circuit de Monaco",
      status: "completed",
      tickets: [{ tier: "Grandstand K", quantity: 2 }],
    },
    {
      id: 10,
      eventName: "Tokyo Anime & Manga Convention",
      date: "2024-08-30",
      time: "09:00 - 20:00",
      location: "Tokyo Big Sight",
      status: "upcoming",
      tickets: [
        { tier: "Otaku Premium", quantity: 1 },
        { tier: "General Entry", quantity: 2 },
      ],
    },
  ];

  const upcomingTickets = userTickets.filter(
    (ticket) => ticket.status === "upcoming"
  );
  const completedTickets = userTickets.filter(
    (ticket) => ticket.status === "completed"
  );

  return (
    <section className="px-2 w-full mt-44 lg:mt-[96px]">
      <div className="w-full bg-background-500 p-0 lg:p-20 flex flex-col lg:flex-row gap-12">
        <UserInfo
          name="Ahmad Wiryawan"
          email="ahmadwiryawan@gmail.com"
          points={100000}
          referralCode="asdas9230232n3jken2"
        />
        <div className="basis-2/3">
          <h2 className="text-2xl font-bold mb-4">My Tickets</h2>
          <Tabs defaultValue="upcoming">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <TicketList
                tickets={upcomingTickets}
                onSelectEvent={setSelectedEvent}
              />
            </TabsContent>
            <TabsContent value="completed">
              <TicketList
                tickets={completedTickets}
                onSelectEvent={setSelectedEvent}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <EventDetailsModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};

export default Profile;
