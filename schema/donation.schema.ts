import { z } from "zod"

const requiredString = z.string().min(1, { message: "required" })

export const DonationSchema = z.object({
    name: requiredString,
    email: z.string().email({ message: "Invalid email address" }),
    comment: z.string().optional(),
    callSign: z.string().optional(),
    companyName: z.string().optional(),
    amount: z.number().min(50, { message: "Donation amount must be at least 50" }),
    phone: requiredString.length(11, { message: "phone number must be exactly 11 characters" }),
})

export type DonationSchemaType = z.infer<typeof DonationSchema>