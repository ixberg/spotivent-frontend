import React from "react";
import { X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { EventTicket } from "./type";
import ClickOutside from "../Dashboard/ClickOutside";

interface EventDetailsModalProps {
  event: EventTicket | null;
  onClose: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  onClose,
}) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-20 flex items-center justify-center z-50">
      <div className="bg-background-500 p-8 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{event.eventName}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Time:</strong> {event.time}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <h3 className="font-semibold mt-4 mb-2">Tickets:</h3>
        <ul>
          {event.tickets.map((ticket, index) => (
            <li key={index}>
              {ticket.tier}: {ticket.quantity}{" "}
              {ticket.quantity > 1 ? "tickets" : "ticket"}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-center">
          <QRCodeSVG
            value={`Event: ${event.eventName}, Date: ${event.date}, ID: ${event.id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
