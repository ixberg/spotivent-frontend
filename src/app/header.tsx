import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { User2, MapPin, CirclePercent } from "lucide-react";
import DropDownAuth from "@/components/elements/DropDownAuth";
import Fuse from "fuse.js";
import { debounce } from "lodash";
import useFetchEvents from "@/hooks/useFetchEvent";
import SearchResults from "@/components/elements/SearchResult";
import { signOut, useSession } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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
  const { data: session } = useSession();
  const router = useRouter();
  // console.log("Header - session:", session); // Logging session in Header

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
        <div>
          {session ? (
            <Popover>
              <PopoverTrigger>
                <div className="lg:hidden flex items-center rounded-full bg-black justify-center h-[44px] w-[44px]">
                  <User2 />
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1 justify-end text-end">
                    <h1 className="text-sm font-semibold">
                      {" "}
                      {session.user.username || session.user.email}
                    </h1>
                    <div className="flex gap-1 items-center justify-end">
                      <div className="flex p-1 rounded-full bg-yellow-500">
                        <CirclePercent size={10} />
                      </div>
                      <p className="text-sm font-light">
                        {session.user.point || 0}
                      </p>
                    </div>
                  </div>
                  <hr className="border-[1px] border-white/20 border-dashed" />
                  <div className="flex flex-col">
                    <Button
                      variant={"noFill"}
                      className="text-white"
                      onClick={() => router.push("/profile")}
                      size={"lg"}
                    >
                      Profile
                    </Button>
                    <Button
                      variant={"noFill"}
                      className="text-white"
                      onClick={() => signOut({ callbackUrl: "/signin" })}
                      size={"lg"}
                    >
                      Log Out
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <DropDownAuth />
          )}
        </div>

        <div className="hidden lg:flex gap-4">
          {session ? (
            <Popover>
              <PopoverTrigger>
                <div
                  className="flex items-center gap-2"
                  // onClick={() => signOut({ callbackUrl: "/signin" })}
                >
                  <div className="flex flex-col gap-1 justify-end text-end">
                    <h1 className="text-sm font-semibold">
                      {" "}
                      {session.user.username || session.user.email}
                    </h1>
                    <div className="flex gap-1 items-center justify-end">
                      <div className="flex p-1 rounded-full bg-yellow-500">
                        <CirclePercent size={10} />
                      </div>
                      <p className="text-sm font-light">
                        {session.user.point || 0}
                      </p>
                    </div>
                  </div>
                  <div className="flex p-3 bg-black rounded-full border-[1px] border-white/20">
                    <User2 />
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="right-0">
                <Button
                  variant={"noFill"}
                  className="text-white"
                  onClick={() => router.push("/profile")}
                  size={"lg"}
                >
                  Profile
                </Button>
                <Button
                  variant={"noFill"}
                  className="text-white"
                  onClick={() => signOut({ callbackUrl: "/signin" })}
                  size={"lg"}
                >
                  Log Out
                </Button>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <Link href="/signup">
                <button className="px-5 h-full">Sign Up</button>
              </Link>
              <Link href="/signin">
                <button className="px-5 py-2 rounded-full bg-white text-black">
                  Log In
                </button>
              </Link>
            </>
          )}
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
