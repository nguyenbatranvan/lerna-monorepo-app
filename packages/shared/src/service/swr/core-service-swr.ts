import {MiddleWareSwr} from "./middle-ware-swr";
import {fetcher} from "./fetcher";
import useSWR from "swr";
import {useSWRLoading} from "../../states/swr/use-loading";
import {IRequest} from "../../models/i-request";

export const CoreServiceSwr = {
    get<T = any>(params: Partial<IRequest>) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [, setLoading] = useSWRLoading();
        const {loading} = params;

        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useSWR<T>(params, {
            revalidateOnFocus: false,
            fetcher: fetcher,
            use: [MiddleWareSwr],
            dedupingInterval: 100000,
            onSuccess: (data, key, config) => {
                if (loading) {
                    setLoading(false);
                }
            },
            onError: () => {
                if (loading) {
                    setLoading(false);
                }
            },
            errorRetryCount: 1
        })
    }
}
