"use client"

import { CircleCheck } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

import { Card, CardContent } from "@/components/ui/card"

const PaymentSuccess = () => {

    const register = useSearchParams().get("register")
    const router = useRouter()

    useEffect(() => {
        if (register && register === "complete") {
            setTimeout(() => { }, 5000)
        }

    }, [register, router])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Card className="w-full max-w-md">
                <CardContent className="space-y-6 p-6">
                    <div className="flex flex-col items-center justify-center">
                        <CircleCheck className="h-12 w-12 text-green-500" />
                        <h2 className="mt-4 text-2xl font-bold">Payment Successful</h2>
                        <p className="mt-2 text-muted-foreground text-center">
                            Congratulations! Your payment was processed successfully. You will redirect soon...
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default PaymentSuccess