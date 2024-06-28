"use client";

import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";
import Header from "@/app/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const noLayoutPaths = ["/signin", "/signup"];

  return (
    <body className={poppins.className}>
      {!noLayoutPaths.includes(pathname) && <Header />}
      {children}
      {!noLayoutPaths.includes(pathname) && <Footer />}
    </body>
  );
};

export default Layout;
