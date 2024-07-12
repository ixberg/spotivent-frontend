"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Dashboard/Sidebar/SidebarItem";
import ClickOutside from "@/components/Dashboard/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { LayoutDashboard, Ticket, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Plus, ChevronLeft } from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU...",
    menuItems: [
      {
        icon: <LayoutDashboard />,
        label: "Dashboard",
        route: "/dashboard",
      },
      {
        icon: <Ticket />,
        label: "My Event",
        route: "/dashboard/my-event",
      },
      {
        icon: <User2 />,
        label: "Profile",
        route: "/dashboard/profile",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-50 flex h-screen w-72.5 flex-col overflow-y-hidden bg-background-50 border-r-white/10 border-r-[1px] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex gap-4 items-center h-[100px] justify-center px-6 py-5.5 lg:py-6.5">
          <Link href="/dashboard">
            <div className="flex gap-2 items-center w-full">
              <Image
                src="/Logo.svg"
                alt="logo"
                width={44}
                height={44}
                className="animate-spin"
              />
              <div className="flex flex-col">
                <p className="font-bold text-xl font-inter tracking-tighter">
                  Spotivent
                </p>
                <p className="font-light text-xs">For Event Organizer</p>
              </div>
            </div>
          </Link>
          <ChevronLeft
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          />
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col pb-5 justify-between h-full overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="px-4 py-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
