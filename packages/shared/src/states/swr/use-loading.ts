import useSWR from "swr";

export const useSWRLoading = (data: boolean = false): [boolean, (loading: boolean) => void] => {
    const {data: loading, mutate: setLoading} = useSWR('loading', null, {
        fallbackData: data,
        use: []
    })
    return [loading as boolean, setLoading];
}
