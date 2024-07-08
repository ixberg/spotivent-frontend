"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import TicketComponent from "@/components/elements/Ticket";
import { StarsIcon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import { resetTicketOrders } from "@/store/ticketSlice";

type Event = {
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  event_organizer: string;
  ticket_tier: { tier: string; price: number }[];
};

const EventDetail = ({ params }: { params: { id: string; slug: string } }) => {
  const { id, slug } = params;
  const [event, setEvent] = useState<Event | null>(null);
  const ticketOrders = useSelector(
    (state: RootState) => state.tickets.ticketOrders
  );
  const dispatch = useDispatch();

  // Calculate the total price
  const totalPrice = ticketOrders.reduce(
    (total: number, order: { price: number; quantity: number }) =>
      total + order.price * order.quantity,
    0
  );

  useEffect(() => {
    // Reset ticket orders when component mounts or when event ID changes
    dispatch(resetTicketOrders());

    axios
      .get(`http://localhost:8080/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching event data: ", error);
      });
  }, [id, dispatch]);

  if (!event) {
    return (
      <main className="flex min-h-screen flex-col items-center gap-2">
        <div>Event not found..</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <section className="px-2 w-full mt-10">
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
            />
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-8 basis-3/5">
              <h1 className="font-syne text-3xl font-bold">{event.title}</h1>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <Image
                    src="/icon/location.svg"
                    alt="icon-loc"
                    width={24}
                    height={24}
                  />
                  <p>{event.location}</p>
                </div>
                <p>{event.description}</p>
                <div className="flex gap-3 rounded-xl border-white border-[1px] p-4 w-fit">
                  <Image
                    src="/icon/calendar.svg"
                    alt="icon-loc"
                    width={24}
                    height={24}
                  />
                  <p>
                    {event.date} · {event.time}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-bold font-syne text-xl">
                  Choose your seat
                </h1>
                <div className="flex flex-col gap-3">
                  {event.ticket_tier.map((tier) => (
                    <TicketComponent
                      key={tier.tier}
                      ticketName={tier.tier}
                      price={tier.price}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col basis-2/5 gap-6">
              <div className="flex flex-col gap-3 border-white border-[1px] p-6 rounded-2xl">
                <h2 className="text-white/50">Hosted by</h2>
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-primary-600 rounded-full">
                    <StarsIcon />
                  </div>
                  <p className="font-medium text-xl">{event.event_organizer}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 border-white border-[1px] p-6 rounded-2xl sticky top-[120px] overflow-auto">
                <h2>Your Ticket Order</h2>
                <div>
                  {ticketOrders.length === 0 ? (
                    <p className="text-white/50">No Ticket Selected</p>
                  ) : (
                    ticketOrders.map((order) => (
                      <div key={order.name} className="flex justify-between">
                        <span>
                          {order.name} x {order.quantity}
                        </span>
                        <span>
                          Rp
                          {(order.price * order.quantity).toLocaleString(
                            "id-ID"
                          )}
                        </span>
                      </div>
                    ))
                  )}
                  {/* Total Price */}
                  {ticketOrders.length > 0 && (
                    <div className="flex justify-between mt-4 pt-4 border-t border-gray-600">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold">
                        Rp{totalPrice.toLocaleString("id-ID")}
                      </span>
                    </div>
                  )}
                </div>
                <Button>Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
