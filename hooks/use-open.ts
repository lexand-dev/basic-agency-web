import { create } from "zustand";

interface OpenMenuState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useOpenMenu = create<OpenMenuState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
