import { useState, useEffect } from "react";
import axios from "axios";

interface TicketTier {
  tier: string;
  price: number;
  quantity: number;
}

interface Event {
  id: string;
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
  ticket_tier: TicketTier[];
  event_organizer: string;
}

const useFetchEvents = (url: string) => {
  const [data, setData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchEvents;
