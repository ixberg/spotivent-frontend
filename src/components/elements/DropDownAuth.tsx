import React, { useState } from "react";
import ClickOutside from "../Dashboard/ClickOutside";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const DropDownAuth = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link onClick={() => setDropdownOpen(!dropdownOpen)} href="#">
        <div className="lg:hidden flex h-[44px] items-center">
          <Menu />
        </div>
        {/* Dropdown Start */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-4 bg-black border-[1px] border-white/20 rounded-lg flex flex-col p-2 w-[120px] gap-2">
            <Link href="/signin">
              <Button
                variant={"noFill"}
                size={"lg"}
                className="text-white w-full justify-start px-2 text-xl"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                variant={"noFill"}
                size={"lg"}
                className="text-white w-full justify-start px-2 text-xl"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </Link>
    </ClickOutside>
  );
};

export default DropDownAuth;
