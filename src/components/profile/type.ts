export interface Ticket {
  tier: string;
  quantity: number;
}

export interface EventTicket {
  id: number;
  eventName: string;
  date: string;
  time: string;
  location: string;
  status: "upcoming" | "completed";
  tickets: Ticket[];
}
