"use client"

import { Donation } from "@prisma/client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { EllipsisVertical, Eye, Pen, Trash2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useDonation } from "@/hooks/use-donation"

interface DonationListProps {
    donations: Donation[]
}

export const DonationList = ({ donations }: DonationListProps) => {
    const { onOpen } = useDonation()

    return (
        <Table>
            <TableHeader>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead>Action</TableHead>
            </TableHeader>
            <TableBody>
                {donations.map((donation) => (
                    <TableRow key={donation.id}>
                        <TableCell>{donation.name}</TableCell>
                        <TableCell>{donation.phone}</TableCell>
                        <TableCell>{donation.email}</TableCell>
                        <TableCell>{donation.amount}</TableCell>
                        <TableCell>{format(donation.createdAt, "dd MMMM yyyy")}</TableCell>
                        <TableCell>{donation.paymentMethod}</TableCell>
                        <TableCell>
                            <Badge>{donation.paymentStatus}</Badge>
                        </TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <EllipsisVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem
                                        className="w-flex items-center gap-x-3"
                                        onClick={() => onOpen(donation.id)}
                                    >
                                        <Trash2 className="h-4 w-4 text-rose-500" />
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
