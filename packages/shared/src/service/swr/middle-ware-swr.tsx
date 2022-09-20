import {METHOD} from "../../constant/api-constant";
import {IRequest} from "../../models/i-request";
import {useSWRLoading} from "../../states/swr/use-loading";

function objToQueryString(obj) {
    const keyValuePairs: any = [];
    for (const key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
}

export const fetcherJSON = (url, config?: RequestInit) => fetch(url, config).then((res) => res.json());

export function MiddleWareSwr(useSWRNext) {
    return (key, fetcher, config) => {
        const serializedKey: IRequest = Array.isArray(key) ? JSON.stringify(key) : key;
        const header: any = {...serializedKey.headers}
        if (serializedKey) {
            let {url, params, method, loading} = serializedKey;
            if (method === METHOD.GET && Object.keys(params).length) {
                url = url + '?' + objToQueryString(params);
                serializedKey.url = url;
            }
            const [, setLoading] = useSWRLoading();
            return useSWRNext(url, (k) => {
                if (serializedKey.loading)
                    setLoading(serializedKey.loading)
                // serializedKey.headers = header;
                return fetcher({...serializedKey,header:header});
            }, config)
        }
        return useSWRNext(null, (k) => {
            // serializedKey.headers = header;
        }, config)
    }
}
