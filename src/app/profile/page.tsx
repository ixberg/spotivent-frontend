import React from "react";
import Profile from "@/components/profile/Profile";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOptions from "@/lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  } else if (session.user.role !== "ORGANIZER") {
    redirect("/unauthorized");
  }
  const price = 100000;
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <Profile></Profile>
    </main>
  );
};

export default page;
