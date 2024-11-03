import { useMutation } from "@tanstack/react-query";
import { DELETE_DONATION_ACTION } from "../action";
import { toast } from "sonner";

type DeleteDonationMutationProps = {
    onClose: () => void;
};

export const useDeleteDonationMutation = ({
    onClose,
}: DeleteDonationMutationProps) => {

    return useMutation({
        mutationFn: DELETE_DONATION_ACTION,
        onSuccess: (data) => {
            if (data.success) {
                toast.success(data.success);
                onClose();
            }

            if (data.error) {
                toast.error(data.error);
            }
        },
    });
};