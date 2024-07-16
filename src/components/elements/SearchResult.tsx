import React from "react";
import Image from "next/image";
import { Event } from "@/app/header"; // Adjust the path if needed
import ClickOutside from "../Dashboard/ClickOutside";

interface SearchResultsProps {
  results: Event[];
  query: string;
  loading: boolean;
  error: any;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  query,
  loading,
  error,
  dropdownOpen,
  setDropdownOpen,
}) => {
  if (query && loading) return <div>Loading...</div>;
  if (query && error) return <div>Error: {error.message}</div>;

  return (
    dropdownOpen && (
      <ClickOutside onClick={() => setDropdownOpen(false)}>
        <div className="absolute top-[168px] w-[90%] left-1/2 -translate-x-1/2 lg:top-[90px] lg:w-2/5 overflow-hidden border-[1px] border-white/20 rounded-lg bg-background-500 z-50">
          <ul>
            {results.length > 0 ? (
              results.map((result) => (
                <li
                  key={result.id}
                  className="flex items-center gap-4 p-4 hover:bg-white/20"
                >
                  <Image
                    src={result.thumbnail}
                    alt="thumb"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col gap-1">
                    <h2 className="font-semibold">{result.title}</h2>
                    <p className="text-sm font-extralight">
                      {result.date} -{" "}
                      <span>
                        {result.time} |{" "}
                        <span>
                          {result.location} ,{result.city}
                        </span>
                      </span>
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <li className="p-4">No results found</li>
            )}
          </ul>
        </div>
      </ClickOutside>
    )
  );
};

export default SearchResults;
