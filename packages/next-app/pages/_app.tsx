import {ChakraProvider} from "@chakra-ui/react";
import Layout, {LinkItemProps} from "@shared/layout/layout";
import {useSWRConfig} from "@shared/states/swr/use-config";
import customTheme from "@shared/theme/theme";
import type {AppProps} from 'next/app'
import {NextRouter} from "next/dist/shared/lib/router/router";
import {NextComponentType, NextPageContext} from "next/dist/shared/lib/utils";
import {useRouter, withRouter} from "next/router";
import {FiCodepen, FiCreditCard, FiHome} from "react-icons/fi";
import {PagePropsModel} from "shared/src/models/page-props-model";
import {SWRConfig} from 'swr';

function MyApp({Component, pageProps}: AppProps<PagePropsModel>) {
    const [config, setConfig] = useSWRConfig();
    if (!pageProps) {
        return <h1>...</h1>;
    } else {
        console.log('pageProps', pageProps.config);
        setConfig(pageProps);
    }
    const router = useRouter();
    const menus: LinkItemProps[] = [{
        name: 'Home Index',
        link: '/',
        icon: FiHome
    }, {
        name: 'Product',
        link: 'product',
        icon: FiCreditCard
    }, {
        name: 'Tinymce',
        link: 'tinymce',
        icon: FiCodepen
    }];
    const changeRoute = (v) => {
        router.push(v);
    }
    return (
        <SWRConfig value={{revalidateOnFocus: false}}>
            <ChakraProvider theme={customTheme}>
                <Layout
                    changeRoute={changeRoute}
                    logo={"https://blog.logrocket.com/wp-content/uploads/2020/11/Nextjs-logo.png"}
                    menus={menus}>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </SWRConfig>);
}

MyApp.getInitialProps = async (appctx) => {
    return {pageProps: {router: appctx.router}}
}
export default withRouter(MyApp)
