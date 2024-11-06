"use server"

import axios from "axios"

export const GENERATE_BKASH_TOKEN = async () => {

    const res = await axios.post(
        process.env.NEXT_PUBLIC_PGW_BKASH_GRANT_TOKEN_URL!,
        {
            app_key: process.env.NEXT_PUBLIC_PGW_BKASH_API_KEY,
            app_secret: process.env.NEXT_PUBLIC_PGW_BKASH_API_SECRET,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                username: process.env.NEXT_PUBLIC_PGW_BKASH_USERNAME,
                password: process.env.NEXT_PUBLIC_PGW_BKASH_PASSWORD,
            },
        }
    )

    return {
        success: true,
        token: res.data?.id_token
    }

}


type CreateDonationPayment = {
    token: string;
    donationId: string;
    amount: number;
}
export const CREATE_PAYMENT_FOR_DONATION = async ({ token, donationId, amount }: CreateDonationPayment) => {
    const res = await axios.post(
        process.env.NEXT_PUBLIC_PGW_BKASH_CREATE_PAYMENT_URL!,
        {
            mode: "0011",
            payerReference: "Donation",
            callbackURL: `https://s21arab.vercel.app/api/payment/donation/verify?token=${token}&donationId=${donationId}`,
            amount: amount,
            currency: "BDT",
            intent: "sale",
            merchantInvoiceNumber: "Inv" + Math.floor(100000 + Math.random() * 900000),
        },
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                authorization: token,
                "x-app-key": process.env.NEXT_PUBLIC_PGW_BKASH_API_KEY,
            }
        }
    )

    return {
        succes: true,
        url: res.data?.bkashURL
    }
}


