import { create } from "zustand";

interface DonationState {
    open: boolean;
    id: string;
    onOpen: (id: string) => void;
    onClose: () => void;
}

export const useDonation = create<DonationState>()((set) => ({
    open: false,
    id: "",
    onOpen: (id) => set({ open: true, id }),
    onClose: () => set({ open: false, id: "" }),
}));
