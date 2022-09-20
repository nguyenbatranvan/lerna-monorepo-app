import {ComponentStyleConfig} from "@chakra-ui/react";

export const Card: ComponentStyleConfig = {
    baseStyle: {
        shadow: 'lg',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        alignItems: 'center',
        gap: 6,
        // '.heading': {
        //     color: 'red'
        // }
    },
    variants: {
        rounded: {
            padding: 8,
            borderRadius: 'xl',
            boxShadow: 'xl',
        },
        smooth: {
            padding: 6,
            borderRadius: 'base',
            boxShadow: 'md',
        },
    },
    defaultProps: {
        variant: "smooth"
    }
}
