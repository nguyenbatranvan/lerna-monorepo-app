import {ChakraProvider} from "@chakra-ui/react";
import customTheme from "@shared/theme/theme";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

(async () => {
    // load config json file
    // const config =await fetcherJSON('/assets/config.json');
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
