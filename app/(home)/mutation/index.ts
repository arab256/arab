import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CREATE_DONATION_ACTION } from "../action";
import { toast } from "sonner";

export const useCreateDonationMutation = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: CREATE_DONATION_ACTION,
        onSuccess: (data) => {
            if (data.success) {
                toast.success(data.success);
                router.push(`/payment/${data.id}`);
            }

            if (data.error) {
                toast.error(data.error);
            }
        },
    });
};