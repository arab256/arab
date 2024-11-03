"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DonationSchema, DonationSchemaType } from "@/schema/donation.schema"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { LoadingButton } from "@/components/loading-button"
import { useCreateDonationMutation } from "../mutation"
import { cn } from "@/lib/utils"

export const DonationForm = () => {

    const { mutate, isPending } = useCreateDonationMutation()

    const form = useForm<DonationSchemaType>({
        resolver: zodResolver(DonationSchema),
        defaultValues: {
            name: "",
            amount: undefined,
            callSign: "",
            phone: "",
            email: "",
            comment: "",
        },
    })

    const onSubmit = (values: DonationSchemaType) => {
        mutate(values)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Donation Form</CardTitle>
                <CardDescription>
                    Please fill out the form below to donate to the cause.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} disabled={isPending} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your phone number" {...field} disabled={isPending} />
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
                                        <Input placeholder="Enter your email" {...field} disabled={isPending} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="comment"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Comment</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter your comment" {...field} disabled={isPending} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="callSign"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Call Sign</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your call sign" {...field} disabled={isPending} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Amount</FormLabel>
                                    <FormControl>
                                        <div className="space-y-4">
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
                                                {
                                                    ["50", "100", "200", "500", "1000"].map((amount) => (
                                                        <Badge key={amount} variant="outline" className={cn("cursor-pointer rounded-full px-6 py-2", isPending && "pointer-events-none")} onClick={() => field.onChange(parseInt(amount))}>
                                                            {amount}
                                                        </Badge>
                                                    ))
                                                }
                                            </div>
                                            <Input placeholder="Enter your amount" {...field} type="number" onChange={(e) => field.onChange(parseInt(e.target.value))} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <LoadingButton
                            isLoading={isPending}
                            type="submit"
                            title="Donate"
                            loadingTitle="Donating..."
                            onClick={form.handleSubmit(onSubmit)}
                        />

                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}