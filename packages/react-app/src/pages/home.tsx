import {Box, Button, Heading} from "@chakra-ui/react";
import {Blog} from "@shared/components/blog/blog";
import {useConfig} from "@shared/states/zustand/use-config";
import React from "react";
import {useLoading} from "@shared/states/zustand/use-loading";

export function Home() {
    const {loading, setLoading} = useLoading();
    const {info, setConfig} = useConfig();
    return <>
        <Heading>loading state by ZUSTAND is: {loading ? "true" : "false"}</Heading>
        <Box marginTop={5}>
            name is: {info.name}
            <Button onClick={() => setConfig(new Date().getTime().toString())}>Change name</Button>
            <Button marginRight={2} colorScheme={"blue"} onClick={() => setLoading(true)}>Show</Button>
            <Button colorScheme={"red"} onClick={() => setLoading(false)}>Hide</Button>
        </Box>
        <Blog title={"Chakra UI Blog By ReactJs App"}/>
    </>
}
