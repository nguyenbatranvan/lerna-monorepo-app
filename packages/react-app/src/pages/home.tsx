import {Box, Button, Heading} from "@chakra-ui/react";
import React from "react";
import {Blog} from "shared/src/components/blog/blog";
import {useLoading} from "shared/src/states/zustand/use-loading";

export function Home() {
    // @ts-ignore
    const {loading,setLoading}=useLoading();
    return <>
        <Heading>loading state by ZUSTAND is: {loading ? "true" : "false"}</Heading>
        <Box marginTop={5}>
            <Button marginRight={2} colorScheme={"blue"} onClick={() => setLoading(true)}>Show</Button>
            <Button colorScheme={"red"} onClick={() => setLoading(false)}>Hide</Button>
        </Box>
        <Blog title={"Chakra UI Blog By ReactJs App"}/>
    </>
}
