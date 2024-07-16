// pages/api/auth/[...nextauth].ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const adminUser = {
  id: 1,
  name: "Admin User",
  email: "admin@example.com",
  role: "admin",
  password: "admin123",
};

const regularUser = {
  id: 2,
  name: "Regular User",
  email: "user@example.com",
  role: "user",
  password: "user123",
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = [adminUser, regularUser].find(
          (user) =>
            user.email === credentials?.email &&
            user.password === credentials?.password
        );

        if (user) {
          return Promise.resolve({
            id: user.id.toString(), // Convert the id to a string
            name: user.name,
            email: user.email,
            role: user.role,
          });
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
});
