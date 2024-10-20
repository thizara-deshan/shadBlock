"use client";
import CardWrapper from "./card-wrapper";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Registerschema } from "@/schemas/index";
import { Input } from "../ui/input";
import FormError from "./form-error";
import FormSuccess from "./form-success";
// import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import { register } from "@/actions/register";

function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setsuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof Registerschema>>({
    resolver: zodResolver(Registerschema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof Registerschema>) => {
    setError("");
    setsuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data?.error || "");
        setsuccess(data?.success || "");
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already Have an account"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name" className="text-base font-semibold">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="name"
                      placeholder="Brad Pitt"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="email"
                    className="text-base font-semibold"
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="hello@example.com"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="password"
                    className="text-base font-semibold"
                  >
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="********"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full py-2  rounded-md font-medium"
          >
            {isPending ? "Loading..." : "Create an account"}
          </Button>
        </form>
      </Form>
      <div className="relative pt-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:text-gray-200  dark:bg-gray-950 text-gray-500">
            Or continue with
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}

export default RegisterForm;
