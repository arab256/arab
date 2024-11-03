import { z } from "zod"

const requiredString = z.string().min(1, { message: "required" })

export const DonationSchema = z.object({
    name: requiredString,
    email: z.string().optional(),
    comment: z.string().optional(),
    callSign: z.string().optional(),
    amount: z.number(),
    phone: requiredString.length(11, { message: "phone number must be exactly 11 characters" }),
})

export type DonationSchemaType = z.infer<typeof DonationSchema>