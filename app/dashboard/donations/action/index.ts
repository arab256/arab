"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const DELETE_DONATION_ACTION = async (id: string) => {
    try {
        const donation = await db.donation.findUnique({
            where: { id }
        })

        if (!donation) {
            return {
                error: "Donation not found",
            }
        }

        await db.donation.delete({
            where: { id }
        })

        revalidatePath("/dashboard/donations")

        return {
            success: "Donation deleted successfully",
        }
    } catch (error) {
        return {
            error: "Failed to delete donation",
        }
    }
}
