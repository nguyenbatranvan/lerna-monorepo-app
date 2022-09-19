import {ComponentStyleConfig} from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
    variants: {
        custom: ({colorMode}) => ({
            backgroundColor: "yellow",
            color: 'white'
        })
    },
    baseStyle: {
        fontSize: 'sm'
    },
    defaultProps: {
        // variant: 'custom'
    }
}
