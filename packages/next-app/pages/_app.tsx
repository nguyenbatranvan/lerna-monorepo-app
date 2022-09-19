import {ChakraProvider} from "@chakra-ui/react";
import customTheme from "@shared/theme/theme";
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return <ChakraProvider theme={customTheme}><Component {...pageProps} /></ChakraProvider>
}

export default MyApp
