import Link from "next/link";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky z-50 top-0 flex w-full bg-background-50 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <Link className="block flex-shrink-0 lg:hidden" href="/dashboard">
            <Image width={48} height={48} src="/Logo.svg" alt="Logo" />
          </Link>
          {/* <!-- Hamburger Toggle BTN --> */}
          <Button
            aria-controls="sidebar"
            variant="noFill"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block text-white rounded-sm p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <Menu />
          </Button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>
        <div></div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
