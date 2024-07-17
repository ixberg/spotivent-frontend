import React from "react";
import Profile from "@/components/profile/Profile";

const page = () => {
  const price = 100000;
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <Profile></Profile>
    </main>
  );
};

export default page;
