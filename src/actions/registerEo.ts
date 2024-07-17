import { z } from "zod";
import { RegisterSchema } from "@/schema"; // Adjust the import based on your file structure

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    return { success: data.success, error: null };
  } catch (error: any) {
    return { success: null, error: error.message };
  }
};
