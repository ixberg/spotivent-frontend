import React, { useState } from "react";
import ClickOutside from "../Dashboard/ClickOutside";
import Link from "next/link";
import { CirclePercent, LogOut, Menu, Ticket, User2 } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface DropDownUserProps {
  session: any;
}

const DropDownAuth: React.FC<DropDownUserProps> = ({ session }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <div onClick={() => setDropdownOpen(!dropdownOpen)}>
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1 justify-end text-end">
            <h1 className="text-sm font-semibold">
              {" "}
              {session.user.username || session.user.email}
            </h1>
            <div className="flex gap-1 items-center justify-end">
              <div className="flex p-1 rounded-full bg-yellow-500">
                <CirclePercent size={10} />
              </div>
              <p className="text-sm font-light">{session.user.points || 0}</p>
            </div>
          </div>
          <div className="flex p-3 bg-black rounded-full border-[1px] border-white/20">
            <User2 />
          </div>
        </div>
        {/* Dropdown Start */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-4 bg-black border-[1px] border-white/20 rounded-lg flex flex-col p-2 w-[120px] gap-2">
            <Button
              variant={"noFill"}
              size={"lg"}
              className="text-white w-full justify-start px-2 text-xl"
              onClick={() => router.push("/profile")}
            >
              <span>
                <Ticket />
              </span>{" "}
              Profile & My Ticket
            </Button>

            <Button
              variant={"noFill"}
              size={"lg"}
              className="text-white w-full justify-start px-2 text-xl"
              onClick={() => signOut({ callbackUrl: "/signin" })}
            >
              {" "}
              <span>
                <LogOut />
              </span>
              Logout
            </Button>
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default DropDownAuth;
