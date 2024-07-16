import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import DropDownAuth from "@/components/elements/DropDownAuth";
import Fuse from "fuse.js";
import { debounce } from "lodash";
import useFetchEvents from "@/hooks/useFetchEvent";
import SearchResults from "@/components/elements/SearchResult";
export interface Event {
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
  ticket_tier: {
    tier: string;
    price: number;
    quantity: number;
  }[];
  event_organizer: string;
}

const Header: React.FC = () => {
  const { data, loading, error } = useFetchEvents(
    "http://localhost:8080/events"
  );
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Event[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: ["title", "city", "category", "event_organizer"],
        threshold: 0.1,
      }),
    [data]
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        if (value.length >= 2) {
          const result = fuse.search(value);
          setResults(result.map(({ item }) => item).slice(0, 4) || []);
          setDropdownOpen(true);
        } else {
          setResults([]);
          setDropdownOpen(false);
        }
      }, 1000),
    [fuse]
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <div className="w-full p-2 bg-background-500 z-50 fixed">
      <div className="flex lg:flex-row justify-between lg:items-center bg-background-100 h-40 lg:h-[80px] rounded-lg p-4 lg:px-10 relative">
        <div className="flex h-fit gap-2 items-center">
          <Image src="/Logo.svg" alt="logo" width={44} height={44} />
          <p className="font-bold text-xl font-inter tracking-tighter">
            Spotivent
          </p>
        </div>
        <div className="flex flex-grow justify-center w-full lg:w-auto pr-8 lg:p-0 bottom-4 lg:bottom-auto items-center gap-4 absolute lg:right-1/2 lg:translate-x-1/2">
          <input
            type="text"
            placeholder="Search festival, concerts"
            className="flex-grow px-6 py-4 rounded-full outline-none bg-transparent border-white border-[1px] w-[250px] lg:w-80"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex items-center gap-2 rounded-full border-white border-[1px] p-4">
            <MapPin />
            <p className="hidden lg:block">Jakarta, Indonesia</p>
          </div>
        </div>
        <DropDownAuth />
        <div className="hidden lg:flex gap-4">
          <Link href="/signup">
            <button className="px-5 h-full">Sign Up</button>
          </Link>
          <button className="px-5 py-2 rounded-full bg-white text-black">
            Log In
          </button>
        </div>
      </div>
      <SearchResults
        results={results}
        query={query}
        loading={loading}
        error={error}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />
    </div>
  );
};

export default Header;
