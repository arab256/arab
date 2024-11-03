import { Loader2 } from "lucide-react";

import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

interface Props {
    isLoading: boolean;
    title: string;
    loadingTitle: string;
    onClick: () => void;
    type: "button" | "submit" | "reset";
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export const LoadingButton = ({ isLoading, title, loadingTitle, onClick, type = "button", className, variant = "default" }: Props) => {
    return (
        <Button
            disabled={isLoading}
            onClick={onClick}
            className={cn("flex items-center gap-x-3", className)}
            type={type}
            variant={variant}
        >
            {isLoading && <Loader2 className="h-4 animate-spin w-4" />}
            {isLoading ? loadingTitle : title}
        </Button>
    )
}