import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;
    console.log("Middleware - Path:", path);
    console.log("Middleware - Token:", token);

    if (path.startsWith("/dashboard")) {
      if (token?.role !== "organizer") {
        console.log("Redirecting to unauthorized");
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log("Authorized callback - Token:", token);
        return !!token;
      },
    },
  }
);
