import {ChakraProvider} from "@chakra-ui/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {fetcherJSON} from "shared/src/service/swr/middle-ware-swr";
import customTheme from "shared/src/theme/theme";
import App from './App';
import reportWebVitals from './reportWebVitals';

(async () => {
    // load config json file
    const config =await fetcherJSON('/assets/config.json');
    console.log('config', config);
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <ChakraProvider theme={customTheme}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ChakraProvider>
        </React.StrictMode>
    );

})()
reportWebVitals();
