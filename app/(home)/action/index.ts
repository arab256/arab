"use server"

import { db } from "@/lib/prisma"
import { DonationSchema, DonationSchemaType } from "@/schema/donation.schema"


export const CREATE_DONATION_ACTION = async (values: DonationSchemaType) => {
    const { success, data } = DonationSchema.safeParse(values)

    if (!success) {
        return {
            error: "Invalid input value"
        }
    }

    try {
        const donation = await db.donation.create({
            data: {
                ...data
            }
        })

        return {
            success: "Donation created successfully",
            id: donation.id
        }
    } catch (error) {
        return {
            error: "Failed to create donation"
        }
    }
}