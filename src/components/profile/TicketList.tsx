import React from "react";
import { EventTicket } from "./type";

interface TicketListProps {
  tickets: EventTicket[];
  onSelectEvent: (event: EventTicket) => void;
}

const TicketList: React.FC<TicketListProps> = ({ tickets, onSelectEvent }) => {
  return (
    <ul>
      {tickets.map((event) => (
        <li
          key={event.id}
          className="mb-4 p-4 bg-white/5 rounded cursor-pointer hover:bg-white/10 transition-colors"
          onClick={() => onSelectEvent(event)}
        >
          <span className="font-semibold text-lg text-primary-600">
            {event.eventName}
          </span>
          <br />
          <span className="text-sm font-extralight text-gray-300">
            {event.date}
          </span>
          <ul className="mt-2">
            {event.tickets.map((ticket, index) => (
              <li key={index} className="text-sm">
                {ticket.tier}: {ticket.quantity}{" "}
                {ticket.quantity > 1 ? "tickets" : "ticket"}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default TicketList;
