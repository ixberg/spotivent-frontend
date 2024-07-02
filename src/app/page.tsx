import Image from "next/image";
import Header from "./header";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero/Hero";
import UpcomingEvent from "@/components/Home/Upcoming";
import Category from "@/components/Home/Category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spotivent",
  description: "Enjoy the amazing concert",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <Hero />
      <UpcomingEvent />
      <Category />
    </main>
  );
}
