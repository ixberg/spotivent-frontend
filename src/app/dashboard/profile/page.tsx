import DefaultLayout from "@/components/Dashboard/layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard | Profile",
};

const page = () => {
  return (
    <DefaultLayout>
      <div>Profile</div>
    </DefaultLayout>
  );
};

export default page;
