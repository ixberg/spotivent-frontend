// app/dashboard/page.tsx
import DashboardContent from "@/components/Dashboard/home/DashboardContent";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  } else if (session.user.role !== "ORGANIZER") {
    redirect("/unauthorized");
  }

  // if (!session || session.user.role !== "organizer") {
  //   redirect("/unauthorized");
  // }
  return <DashboardContent />;
};

export default DashboardPage;
