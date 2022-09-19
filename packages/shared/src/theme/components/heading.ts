import {ComponentStyleConfig} from "@chakra-ui/react";

export const Heading: ComponentStyleConfig = {
    variants: {
        tittle: ({}) => ({
            color: 'blackAlpha.900',
            fontWeight: 'bold',
            fontSize: '4xl',
            lineHeight: 1.2
        })
    }
}
