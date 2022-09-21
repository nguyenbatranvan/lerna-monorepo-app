import create from "zustand";

interface IProps {
    info: {
        name: string;
        old: number;
    },
    setConfig: (v: string) => any;
}

export const useConfig = create<IProps>((set, get) => ({
    info: {
        name: 'van',
        old: 26
    },
    setConfig: (name: string) => {
        return set((state) => {
            return {...state, info: {...state.info, name: name}}
        })
    }
}))

