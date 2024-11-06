"use client"

import { Button } from "@/components/ui/button"
import { GENERATE_BKASH_TOKEN, CREATE_PAYMENT_FOR_DONATION } from "@/services/bkash.service"
import { useMutation } from "@tanstack/react-query"

interface Props {
    donationId: string
    amount: number
}

export const PaymentForm = ({ donationId, amount }: Props) => {
    const { mutate: createPayment, isPending: isPendingCreatePayment } = useMutation({
        mutationFn: CREATE_PAYMENT_FOR_DONATION,
        onSuccess: (data) => {
            if (data?.url) {
                window.location.replace(data?.url)
            }
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const { mutate: generateToken, isPending: isPendingGenerate } = useMutation({
        mutationFn: (variables: { donationId: string, amount: number }) => GENERATE_BKASH_TOKEN(),
        onSuccess: (data) => {
            if (data?.token) {
                createPayment({ donationId, amount, token: data?.token })
            }
        },
        onError: (error) => {
            console.log(error)
        }
    })


    return <div>
        <Button className="w-full" onClick={() => generateToken({ donationId, amount })}>Pay with BKash</Button>
    </div>
}