import create from "zustand";

export const useLoading = create<any,any>((set) => ({
    loading: 1,
    setLoading: (value) => set((state) => ({ loading: value })),
}))
