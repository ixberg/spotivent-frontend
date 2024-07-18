import DefaultLayout from "@/components/Dashboard/layouts/DefaultLayout";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard | Profile",
};

const page = () => {

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  
  return (
    <DefaultLayout>
      <div>Profile</div>
    </DefaultLayout>
  );
};

export default page;
