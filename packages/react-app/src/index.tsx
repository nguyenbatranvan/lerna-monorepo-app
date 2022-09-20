import {ChakraProvider} from "@chakra-ui/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import customTheme from "shared/src/theme/theme";
import {Home} from "./pages/home";
import App from './App';
import reportWebVitals from './reportWebVitals';

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

reportWebVitals();
