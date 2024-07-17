import Category from "@/components/Home/Category";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required, minimum 2 characters",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Minimum 8 character required!",
  }),
  role: z.string().optional(),
});

export const UserRegisterSchema = z.object({
  username: z.string().min(2, {
    message: "Name is required, minimum 2 characters",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Minimum 8 character required!",
  }),
  referralCode: z.string().optional(),
  role: z.string().optional(),
});

const ticketTierSchema = z.object({
  name: z.string().min(1, "Ticket name is required"),
  seats: z.string().min(1, "Seats are required"),
  price: z.string().min(1, "Price is required"),
});

const voucherSchema = z.object({
  name: z.string().min(1, "Voucher name is required"),
  discount: z.number().min(0, "Discount must be a positive number"),
  limitUsage: z.number().int().min(1, "Limit usage must be at least 1"),
  isReferralPromo: z.boolean(),
});

const createEventSchema = z.object({
  eventName: z.string().min(1, "Event name is required"),
  category: z.string().min(1, "Category is required"),
  date: z
    .date()
    .refine((date) => date > new Date(), {
      message: "Date must be in the future",
    })
    .or(z.string().min(1, "Date is required")),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
  city: z.string().min(1, "City is required"),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(1, "Description is required"),
  thumbnail: z.string().min(1, "Thumbnail is required"),
  bannerImage: z.string().min(1, "Banner image is required"),
  isFreeEvent: z.boolean(),
  ticketTiers: z
    .array(ticketTierSchema)
    .min(1, "At least one ticket tier is required"),
  vouchers: z.array(voucherSchema).optional(),
});

export { createEventSchema };
