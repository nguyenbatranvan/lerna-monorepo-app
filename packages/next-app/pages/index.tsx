import {Box, Button, Heading} from "@chakra-ui/react";
import {Blog} from "@shared/components/blog/blog";
import {useSWRLoading} from "@shared/states/swr/use-loading";
import type {NextPage} from 'next'
import React from "react";

const Home: NextPage = () => {
    const [loading, setLoading] = useSWRLoading();
    return (<>
            <Heading>loading state by SWR is: {loading ? "true" : "false"}</Heading>
            <Box marginTop={5}>
                <Button marginRight={2} colorScheme={"blue"} onClick={() => setLoading(true)}>Show</Button>
                <Button colorScheme={"red"} onClick={() => setLoading(false)}>Hide</Button>
            </Box>
            <Blog title={"Chakra UI Blog By NextJS App"}/>
        </>
    )
}

export default Home
