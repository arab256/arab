import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { formatBDTCurrency } from "@/lib/utils"
import Link from "next/link"

interface DonationCardProps {
    donations: number | null
    totalDonations: number
}

export const DonationCard = ({ donations, totalDonations }: DonationCardProps) => {
    return (
        <Card className="max-w-[500px] mx-auto">
            <CardContent className="p-4 space-y-3">
                <h1 className="text-3xl font-bold text-center text-green-600">অনুদান দিন</h1>
                <p className="text-center text-muted-foreground">জাতীয় এ্যামেচার রেডিও ড্রিল ২০২৪- কে আরও সুন্দর ও শিক্ষনীয় করার লক্ষে আপনার সামর্থ  অনুযায়ী অনুদান (বিনা শর্তে)  দিয়ে সহযোহিতা করতে পারেন । </p>
                <div className="grid grid-cols-3">
                    <div className="border p-3 flex flex-col items-center justify-center">
                        <h1 className="text-xl font-bold">{donations && donations}</h1>
                        <p className="text-muted-foreground">Raised</p>
                    </div>
                    <div className="border p-3 flex flex-col items-center justify-center">
                        <h1 className="text-xl font-bold">{totalDonations}</h1>
                        <p className="text-muted-foreground">Donations</p>
                    </div>
                    <div className="border p-3 flex flex-col items-center justify-center">
                        <h1 className="text-xl font-bold">2,50,000</h1>
                        <p className="text-muted-foreground">Goal</p>
                    </div>
                </div>

                <div className="border p-2">
                    <Progress
                        value={(donations || 0) / 250000 * 100}
                        className="w-full"
                    />
                    <div className="flex justify-between">
                        <p className="text-muted-foreground">{donations && donations}</p>
                        <p>{((donations || 0) / 250000 * 100).toFixed(1)}%</p>
                        <p className="text-muted-foreground">2,50,000</p>
                    </div>
                </div>

                <Button asChild className="w-full">
                    <Link href="/donation">Donate Now</Link>
                </Button>
            </CardContent>
        </Card>
    )
}