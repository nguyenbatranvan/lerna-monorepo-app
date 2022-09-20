import create from "zustand";

export const useLoading = create((set) => ({
    loading: 1,
    setLoading: (value) => set((state) => ({ loading: value })),
}))
