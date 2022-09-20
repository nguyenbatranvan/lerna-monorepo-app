import {ChakraProvider} from "@chakra-ui/react";
import Layout, {LinkItemProps} from "@shared/layout/layout";
import customTheme from "@shared/theme/theme";
import type {AppProps} from 'next/app'
import {useRouter} from "next/router";
import {FiCodepen, FiCreditCard, FiHome} from "react-icons/fi";
import {SWRConfig} from 'swr';

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();
    const menus: LinkItemProps[] = [{
        name: 'Home Index',
        link: '',
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
        router.push(v || "/");
    }
    return <SWRConfig value={{revalidateOnFocus: false}}><ChakraProvider theme={customTheme}><Layout
        changeRoute={changeRoute}
        logo={"https://blog.logrocket.com/wp-content/uploads/2020/11/Nextjs-logo.png"}
        menus={menus}><Component {...pageProps} /></Layout></ChakraProvider></SWRConfig>
}

export default MyApp
