"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schema";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "invalid fields!" };
  }

  return { success: "Register successfully!" };
};
