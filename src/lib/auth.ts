// import type { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const users = [
//   {
//     id: "1",
//     name: "John Organizer",
//     email: "organizer@example.com",
//     password: "password123",
//     role: "organizer",
//   },
//   {
//     id: "2",
//     name: "John Doe",
//     email: "user@example.com",
//     password: "password456",
//     role: "user",
//   },
// ];

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) return null;

//         const user = users.find((user) => user.email === credentials.email);

//         if (user && user.password === credentials.password) {
//           return {
//             id: user.id,
//             email: user.email,
//             role: user.role,
//             name: user.name,
//           };
//         }

//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.name = user.name;
//         token.email
//         token.id = user.id;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.name = token.name as string;
//         session.user.id = token.id as string;
//         session.user.role = token.role as string;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/signin",
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 60 * 60,
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

//----------------------------------------------for backend intergration----------------------------------------------------//

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import axios from "axios";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // console.log(response);
          const user = response.data;
          const useCookies = cookies();
          useCookies.set("sid", user.token);

          if (response.status === 200 && user) {
            return {
              id: user.id,
              email: credentials.email,
              role: user.role,
              token: user.token,
            };
          }

          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }): Promise<JWT> {
      if (user) {
        token.role = user.role;
        token.accessToken = user.token;
      }

      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.user.role = token.role;
      session.user.accessToken = token.accessToken;
      console.log(session);
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
};

export default authOptions;
