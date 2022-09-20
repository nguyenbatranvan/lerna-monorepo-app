import {Box, Button, Heading} from "@chakra-ui/react";
import {Blog} from "@shared/components/blog/blog";
import SEO from "@shared/custom-components/SEO";
import {useSWRConfig} from "@shared/states/swr/use-config";
import {useSWRLoading} from "@shared/states/swr/use-loading";
import type {NextPage} from 'next'
import React, {useEffect} from "react";
import {withAuthServerSideProps} from "shared/src/utils/authentication-ssr";

const Home: NextPage = () => {
    const [loading, setLoading] = useSWRLoading();
    const [config, setConfig] = useSWRConfig();
    useEffect(() => {
        // todo config
        console.log('config index', config);
    }, [])
    return (<>
            <SEO title={"Index page"} description={"this is index"} currentURL={config.url as any}  siteName={"Chakra next by vannbt"}/>
            <Heading>loading state by SWR is: {loading ? "true" : "false"}</Heading>
            <Box marginTop={5}>
                <Button marginRight={2} colorScheme={"blue"} onClick={() => setLoading(true)}>Show</Button>
                <Button colorScheme={"red"} onClick={() => setLoading(false)}>Hide</Button>
            </Box>
            <Blog title={"Chakra UI Blog By NextJS App"}/>
        </>
    )
}
export const getServerSideProps = withAuthServerSideProps(async (context, config) => {
    // todo config
    return {};
})

export default Home
