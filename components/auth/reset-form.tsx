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

import { ResetSchema } from "@/schemas/index";
import { Input } from "../ui/input";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { reset } from "@/actions/reset";

function ResetForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setsuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setsuccess("");
    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error || "");
        setsuccess(data?.success || "");
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Forgot Your Password?"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      showSocial={false}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-3">
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
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full py-2  rounded-md font-medium"
          >
            {isPending ? "Loading..." : "Send reset email"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default ResetForm;
