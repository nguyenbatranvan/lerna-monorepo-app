import {fetcherJSON} from "@shared/service/swr/middle-ware-swr";

interface IOptionsAuth {
    needRole?: boolean;
    roles?: string[];
}

export function withAuthServerSideProps(getServerSidePropsFunc, options?: IOptionsAuth) {
    return async (context) => {
        const NextRequestMetaSymbol = Reflect.ownKeys(context.req).find(key => key.toString() === 'Symbol(NextRequestMeta)');
        const fullPath = context.req[NextRequestMetaSymbol!].__NEXT_INIT_URL;
        const url = new URL(fullPath);
        const origin = url.origin;
        // const protocol = (process.env.NODE_ENV === "production" ? 'https://' : 'http://')
        // const origin = protocol + context.req?.headers?.host;
        // let config = {
        //     "baseUrl": "https://services.sandbox.icondo.asia"
        // };
        let config;
        try {
            config = await fetcherJSON(`${url.origin}/assets/config.json`);
        } catch (e) {

        }
        // const queryString = objToQueryString(context.query)
        // const cookies = getCookie('accessToken', {req: context.req});
        // if (options && options.needRole) {
        //     if (!cookies && (!context.query.grant_type || context.query.grant_type != 'authorization_code')) {
        //         return {
        //             redirect: {
        //                 destination: `/login${queryString ? `?${queryString}` : ''}`,
        //                 permanent: false,
        //             },
        //         }
        //     }
        //     if (getServerSidePropsFunc) {
        //         return {
        //             props: {
        //                 config,
        //                 origin,
        //                 url: origin + url.pathname,
        //                 ...((await getServerSidePropsFunc(context, config)).props || {}),
        //             },
        //         }
        //     }
        // } else {
        //     if (cookies) {
        //         return {
        //             redirect: {
        //                 destination: `/${context.locale}/info/${queryString ? `?${queryString}` : ''}`,
        //                 permanent: false,
        //             },
        //         }
        //     }
        //     return {
        //         // redirect: {
        //         //     destination: `/${context.locale}/${queryString ? `?${queryString}` : ''}`,
        //         //     permanent: false,
        //         // },
        //         props: {
        //             // config: config,
        //             config,
        //             origin,
        //             url: origin + url.pathname
        //         }
        //     }
        // }
        return {
            // redirect: {
            //     destination: `/${context.locale}/${queryString ? `?${queryString}` : ''}`,
            //     permanent: false,
            // },
            props: {
                config,
                origin,
                url: origin + url.pathname,
                ...((await getServerSidePropsFunc(context, config)).props || {}),
            }
        }
    }
}
