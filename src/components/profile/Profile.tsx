"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserInfo from "./UserInfo";
import TicketList from "./TicketList";
import EventDetailsModal from "./EventModal";
import { EventTicket } from "./type";
import { useSession } from "next-auth/react";

interface ProfileData {}

const Profile: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventTicket | null>(null);
  const { data: session, status } = useSession();

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
      eventName: "Jazz Nights 2024",
      date: "2024-05-30",
      time: "19:00 - 22:00",
      location: "Blue Note Jazz Club, New York City",
      status: "completed",
      tickets: [
        { tier: "VIP", quantity: 4 },
        { tier: "General Admission", quantity: 6 },
      ],
    },
    {
      id: 3,
      eventName: "Rock and Roll Reunion 2024",
      date: "2024-07-05",
      time: "18:00 - 23:00",
      location: "Madison Square Garden, New York City",
      status: "completed",
      tickets: [
        { tier: "VIP", quantity: 3 },
        { tier: "General Admission", quantity: 10 },
      ],
    },
    {
      id: 4,
      eventName: "Pop Extravaganza 2024",
      date: "2024-09-10",
      time: "17:00 - 22:00",
      location: "Staples Center, Los Angeles",
      status: "upcoming",
      tickets: [
        { tier: "VIP", quantity: 5 },
        { tier: "General Admission", quantity: 20 },
      ],
    },
    {
      id: 5,
      eventName: "Electronic Dance Party 2024",
      date: "2024-04-25",
      time: "20:00 - 02:00",
      location: "Warehouse District, Miami",
      status: "completed",
      tickets: [
        { tier: "VIP", quantity: 6 },
        { tier: "General Admission", quantity: 15 },
      ],
    },
  ];

  const upcomingTickets = userTickets.filter(
    (ticket) => ticket.status === "upcoming"
  );
  const completedTickets = userTickets.filter(
    (ticket) => ticket.status === "completed"
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Access Denied</div>;
  }

  return (
    <section className="px-2 w-full mt-44 lg:mt-[96px]">
      <div className="w-full bg-background-500 p-0 lg:p-20 flex flex-col lg:flex-row gap-12">
        <UserInfo />
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
