"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "./ui/button";

interface Props {
    totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const currentPage = parseInt(searchParams.get("page") || "1", 10);

    const handleClick = (page: string) => {
        const params = Object.fromEntries(searchParams.entries());

        const url = queryString.stringifyUrl(
            {
                url: pathname,
                query: {
                    ...params,
                    page,
                },
            },
            { skipEmptyString: true, skipNull: true },
        );

        router.push(url);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            handleClick((currentPage + 1).toString());
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            handleClick((currentPage - 1).toString());
        }
    };

    return (
        <Pagination className="pt-5">
            <PaginationContent>
                <Button
                    variant="ghost"
                    className="flex items-center gap-x-2"
                    onClick={handlePrev}
                    disabled={currentPage <= 1}
                >
                    <ChevronLeft className="h-5 w-5" />
                    Previous
                </Button>
                <div className="hidden md:flex">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <PaginationItem key={i}>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleClick((i + 1).toString())}
                                disabled={currentPage === i + 1}
                            >
                                {i + 1}
                            </Button>
                        </PaginationItem>
                    ))}
                </div>
                <Button
                    variant="ghost"
                    className="flex items-center gap-x-2"
                    onClick={handleNext}
                    disabled={currentPage >= totalPages}
                >
                    Next
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </PaginationContent>
        </Pagination>
    );
};
