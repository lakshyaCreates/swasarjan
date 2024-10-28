"use client";

import { useRef, useState, useTransition } from "react";
import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { useAutosizeTextArea } from "@/components/ui/autosize-textarea";
import { Button } from "@/components/ui/button";
import CountrySelect from "@/components/ui/country-select";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { HomeContactFormValidator } from "@/validators";
import { addContact } from "@/actions/add-contact";

export const HomeContactForm = () => {
    const [isPending, startTransition] = useTransition();

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [triggerAutoSize, setTriggerAutoSize] = useState("");
    useAutosizeTextArea({
        textAreaRef: textAreaRef?.current,
        triggerAutoSize: triggerAutoSize,
        minHeight: 52,
        maxHeight: 200,
    });

    const form = useForm<z.infer<typeof HomeContactFormValidator>>({
        resolver: zodResolver(HomeContactFormValidator),
        defaultValues: {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            country: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof HomeContactFormValidator>) {
        console.log(values);

        startTransition(() => {
            addContact(values);
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-4 gap-2 selection:bg-neutral-200 md:grid-cols-6 md:gap-4">
                    <div className="col-span-2 w-full">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <HomeInput
                                            required
                                            type="text"
                                            placeholder="First Name"
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-2 w-full">
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <HomeInput
                                            required
                                            type="text"
                                            placeholder="Last Name"
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-2 w-full">
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <HomeInput
                                            required
                                            type="text"
                                            placeholder="Company Name"
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-2 w-full md:col-span-3">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <HomeInput
                                            required
                                            type="email"
                                            placeholder="Email"
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-2 w-full md:col-span-3">
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <CountrySelect {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-3 w-full md:col-span-6">
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            ref={textAreaRef}
                                            placeholder="Your Message"
                                            className="rounded-xl bg-neutral-200/60 px-6 text-lg font-medium ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <Button type="submit" size={"lg"}>
                        Send Message
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const HomeInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full rounded-xl bg-neutral-200/60 p-6 text-lg font-medium shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-5",
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
HomeInput.displayName = "Input";
