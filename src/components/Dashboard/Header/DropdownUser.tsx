import { useState } from "react";
import Link from "next/link";
import ClickOutside from "@/components/Dashboard/ClickOutside";
import { User2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium">Thomas Anree</span>
          <span className="block text-xs">Event Organizer</span>
        </span>

        <span className="h-12 w-12 rounded-full border-white border-[1px] flex items-center justify-center">
          <User2 />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div className="absolute px-4 py-2 right-0 mt-4 flex flex-col gap-2 rounded-sm border border-white/10 bg-background-50 shadow-default">
          <div>
            <Button
              variant="noFill"
              className="h-14 text-white text-base flex gap-1 w-full"
            >
              <span>
                <User2 />
              </span>
              My Profile
            </Button>
          </div>
          <Link href="/dashboard/signin">
            <Button
              variant="noFill"
              className="h-14 text-white text-base flex gap-1 w-full"
              onClick={() => signOut({ callbackUrl: "/signin" })}
            >
              <span>
                <LogOut />
              </span>
              Log Out
            </Button>
          </Link>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
