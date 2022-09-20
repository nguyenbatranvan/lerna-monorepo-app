import {METHOD} from "../../constant/api-constant";
import {IRequest} from "../../models/i-request";

export async function fetcher(args: IRequest) {
    let url = args.url;
    const headerBearer = {};
    // if (sessionStorage.getItem('accessToken')) {
    //     headerBearer['authorization'] = `Bearer ${sessionStorage.getItem("accessToken")}`;
    // }
    const init: RequestInit = {
        method: args.method,
        headers: {
            ...args.headers,
            ...headerBearer
        }
    }

    if (args.method === METHOD.POST) {
        init.body = args.params;
    }
    const res = await fetch(url, init);
    if (!res.ok) {
        if (res.status === 404) {
            throw new Error('An error occurred while fetching the data.');
        } else {
            throw await res.json();
        }

    }
    return await res.json();
}
