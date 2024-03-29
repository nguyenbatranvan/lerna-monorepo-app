import {Box, Heading, HStack, Image, Link, Text} from "@chakra-ui/react";
import React from "react";

interface BlogAuthorProps {
    date: Date;
    name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

export function Blog({title}) {
    // @ts-ignore
    // const {setLoading} = useLoading();
    return <Box padding={"12"} maxW={"7xl"} marginX={"auto"}>
        <Heading variant={"title"}>
            {title}
        </Heading>
        <Box
            marginTop={{base: '1', sm: '5'}}
            display="flex"
            flexDirection={{base: 'column', sm: 'row'}}
            justifyContent="space-between">
            <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center">
                <Box
                    width={{base: '100%', sm: '85%'}}
                    zIndex="2"
                    marginLeft={{base: '0', sm: '5%'}}
                    marginTop="5%">
                    <Link textDecoration="none" _hover={{textDecoration: 'none'}}>
                        <Image
                            borderRadius="lg"
                            src={
                                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                            }
                            alt="some good alt text"
                            objectFit="contain"
                        />
                    </Link>
                </Box>

            </Box>
            <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{base: '3', sm: '0'}}>
                {/*<BlogTags tags={['Engineering', 'Product']} />*/}
                <Heading variant={"title"} marginTop="1">
                    <Link textDecoration="none" _hover={{textDecoration: 'none'}}>
                        Blog article title
                    </Link>
                </Heading>
                <Text
                    as="p"
                    marginTop="2"
                    fontSize="lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                </Text>
                <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')}/>
            </Box>
        </Box>
    </Box>
}
