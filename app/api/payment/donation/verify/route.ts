import { NextRequest } from "next/server"

import axios from "axios"
import { redirect } from "next/navigation"
import { db } from "@/lib/prisma"
import { PaymentStatus } from "@prisma/client"
import nodemailer from "nodemailer"

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const paymentID = searchParams.get('paymentID')
    const token = searchParams.get('token')
    const donationId = searchParams.get('donationId')

    if (!donationId) redirect("/")

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

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
        const donation = await db.donation.update({
            where: {
                id: donationId
            },
            data: {
                paymentStatus: PaymentStatus.Paid
            }
        })

        const emailText = `
        Dear ${donation?.name},
        
        Thank you for your generous donation of ${donation?.amount}. Your support helps us provide essential healthcare to underserved communities. We’re deeply grateful for your belief in our mission and your commitment to making a difference. With your help, we are creating lasting change in the lives of those we serve.
        
        Together, we are making a tangible impact!
        
        Donation received by
        Masum Billah 
        S21IGP-H
        73
      `;

        const emailHtml = `
        <p>Dear ${donation?.name},</p>
        
        <p>Thank you for your generous donation of <strong>${donation?.amount}</strong>. Your support helps us provide essential healthcare to underserved communities. We’re deeply grateful for your belief in our mission and your commitment to making a difference. With your help, we are creating lasting change in the lives of those we serve.</p>
        
        <p>Together, we are making a tangible impact!</p>
        
        <p>Donation received by<br />
        Masum Billah 
        S21IGP-H
        73
      `;
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: donation?.email,
            subject: "Donation Completed",
            text: emailText,
            html: emailHtml,
        });

        redirect("/payment/success")
    } else {
        redirect("/payment/failed")
    }
}