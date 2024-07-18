import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
    token?: string;
    username?: string;
    point?: number; // Add username to User interface
  }

  interface Session {
    user: {
      accessToken: any;
      id?: number;
      role?: string;
      email?: string;
      name?: string | null;
      image?: string | null;
      username?: string;
      point?: number; // Add username to Session user
    };
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    accessToken?: string;
    username?: string;
    point?: number; // Add username to JWT
  }
}
