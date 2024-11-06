"use client"

import { Button } from "@/components/ui/button"
import { Donation } from "@prisma/client"

interface ExportButtonProps {
    donations: Donation[]
}

export const ExportButton = ({ donations }: ExportButtonProps) => {
    const handleExportCSV = () => {
        const headers = ["Name", "Phone", "Email", "Call Sign", "Company Name", "Amount", "Date", "Payment Method", "Payment Status"];

        const rows = donations.map((donation) => {
            return [
                donation.name,
                donation.phone,
                donation.email,
                donation.callSign,
                donation.companyName,
                donation.amount,
                donation.createdAt,
                donation.paymentMethod,
                donation.paymentStatus,
            ];
        });

        const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "report_list.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <Button className="mt-4" onClick={handleExportCSV}>Export</Button>
}