import {IRequest} from "@shared/models/i-request";
import {fetcher} from "@shared/service/swr/fetcher";
import {MiddleWareSwr} from "@shared/service/swr/middle-ware-swr";
import {useSWRLoading} from "@shared/states/swr/use-loading";
import useSWR from "swr";

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
