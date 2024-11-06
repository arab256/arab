import React from 'react'
import { ContentLayout } from '../_components/content-layout'
import { db } from '@/lib/prisma'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { DonationList } from './_components/donation-list'
import { Header } from './_components/header'
import { PaymentStatus } from '@prisma/client'
import { CustomPagination } from '@/components/custom-pagination'
import { ExportButton } from './_components/export-button'

interface Props {
    searchParams: {
        phone?: string;
        sort?: string;
        page?: string;
        perPage?: string;
        status?: PaymentStatus;
    };
}

const Donations = async ({ searchParams }: Props) => {
    const { phone, sort, page = "1", perPage = "5", status } = searchParams;

    const itemsPerPage = parseInt(perPage, 10);
    const currentPage = parseInt(page, 10);

    const [donations, totalDonations] = await Promise.all([
        db.donation.findMany({
            where: {
                ...(phone && { phone: { contains: phone, mode: "insensitive" } }),
                ...(status && { paymentStatus: status }),
            },
            orderBy: {
                createdAt: sort === "latest" ? "desc" : "asc"
            },
            skip: (currentPage - 1) * itemsPerPage,
            take: itemsPerPage,
        }),
        db.donation.count({
            where: {
                ...(phone && { phone: { contains: phone, mode: "insensitive" } }),
                ...(status && { paymentStatus: status }),
            },
        }),
    ])

    const totalPages = Math.ceil(totalDonations / itemsPerPage);

    return (
        <ContentLayout title="Donations">
            <Card>
                <CardHeader>
                    <CardTitle>Donations</CardTitle>
                    <CardDescription>
                        List of donations
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Header />
                    <ExportButton donations={donations} />
                    <DonationList donations={donations} />
                    <CustomPagination totalPages={totalPages} />
                </CardContent>
            </Card>
        </ContentLayout>
    )
}

export default Donations
