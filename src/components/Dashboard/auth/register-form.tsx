"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schema";
import { Eye, EyeOff } from "lucide-react";
import { FormError } from "../../ui/form-error";
import { FormSuccess } from "../../ui/form-success";
import { register } from "@/actions/registerEo";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPanding, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "ORGANIZER",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setError("");
    setSuccess("");
    console.log(values);

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          router.push("/signin");
        }
      });
    });
  }

  return (
    <div className="flex justify-center h-fit">
      <div className="flex flex-col gap-12 p-10 lg:py-16 w-fit lg:px-20 bg-background-100 lg:w-[680px] rounded-xl">
        <h1 className="text-center font-semibold text-3xl">
          Create an account
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        disabled={isPanding}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        {...field}
                        disabled={isPanding}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          {...field}
                          disabled={isPanding}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        disabled={isPanding}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error}></FormError>
            <FormSuccess message={success}></FormSuccess>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isPanding}
            >
              Register
            </Button>
            {/* <div className="flex gap-2 w-full items-center">
              <hr className="w-full border-dashed border-white/50" />
              <p className="w-fit font-light">Or</p>
              <hr className="w-full border-dashed border-white/50" />
            </div> */}
          </form>
        </Form>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/dashboard/signin">
            <span className="font-semibold text-primary-500 cursor-pointer hover:underline">
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
