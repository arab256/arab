import { NextRequest } from "next/server"

import axios from "axios"
import { redirect } from "next/navigation"
import { db } from "@/lib/prisma"
import { PaymentStatus } from "@prisma/client"

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const paymentID = searchParams.get('paymentID')
    const token = searchParams.get('token')
    const donationId = searchParams.get('donationId')

    if (!donationId) redirect("/")

    const res = await axios.post(
        process.env.NEXT_PUBLIC_PGW_BKASH_EXECUTE_PAYMENT_URL!,
        { paymentID },
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                authorization: token,
                "x-app-key": process.env.NEXT_PUBLIC_PGW_BKASH_API_KEY,
            }
        }
    );

    if (res.data && res.data?.statusCode === "0000") {
        await db.donation.update({
            where: {
                id: donationId
            },
            data: {
                paymentStatus: PaymentStatus.Paid
            }
        })
        redirect("/payment/success")
    } else {
        redirect("/payment/failed")
    }
}