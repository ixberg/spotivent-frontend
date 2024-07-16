// app/dashboard/page.tsx
import DashboardContent from "@/components/Dashboard/home/DashboardContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return <DashboardContent />;
};

export default DashboardPage;
