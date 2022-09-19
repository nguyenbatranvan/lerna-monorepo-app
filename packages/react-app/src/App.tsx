import {Box, Heading, Image, Text, HStack, Link} from "@chakra-ui/react";
import React from 'react';
import {Blog} from "shared/src/components/blog/blog";
import {useLoading} from "shared/src/zustand/use-loading";

function App() {
    // @ts-ignore
    const {loading}= useLoading();
    return (
        <>
            loading: {loading.toString()}
            <Blog title={"Stories by Chakra Templates By React App"}/>
        </>
    );
}

export default App;
