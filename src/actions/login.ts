"use server";
import * as z from "zod";
import { LoginSchema } from "@/schema";

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "invalid fields!" };
  }

  return { success: "Login successfully!" };
};
