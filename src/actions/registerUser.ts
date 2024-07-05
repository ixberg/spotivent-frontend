"use server";
import * as z from "zod";
import { UserRegisterSchema } from "@/schema";

export const register = async (value: z.infer<typeof UserRegisterSchema>) => {
  const validatedFields = UserRegisterSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "invalid fields!" };
  }

  return { success: "Register successfully!" };
};
