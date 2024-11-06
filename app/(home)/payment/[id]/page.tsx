import { db } from "@/lib/prisma"
import { redirect } from "next/navigation"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { PaymentForm } from "./_components/payment-form"

interface Props {
    params: {
        id: string
    }
}

const Payment = async ({ params }: Props) => {
    const donation = await db.donation.findUnique({
        where: {
            id: params.id
        }
    })

    if (!donation) return redirect("/")

    return (
        <div className="w-full min-h-screen flex items-center justify-center px-4">
            <Card>
                <CardHeader>
                    <CardTitle>Payment</CardTitle>
                    <CardDescription>Please pay the amount through BKash</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-lg font-bold">Your donation amount is <span className="text-green-600 text-2xl">{donation.amount}</span> BDT</p>

                    <PaymentForm donationId={donation.id} amount={donation.amount} />
                </CardContent>
            </Card>
        </div>
    )
}

export default Payment
