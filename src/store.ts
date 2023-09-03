import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStoreApp = create(
  persist(
    (set) => ({
      color: "#B922E2",
      setColor: (payload: string) => set({ color: payload }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
