// import NextAuth from "next-auth";
// import { authOptions } from "@/app/auth";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
