import {extendTheme} from "@chakra-ui/react";
import {Card} from "./components/Card";
import {Heading} from "./components/heading";
import {Button} from "./components/Button";

const customTheme = extendTheme({
    components: {Button, Heading,Card},
    fonts: {
        heading: 'Montserrat, sans-serif',
        body: 'Montserrat, sans-serif'
    },
    styles: {
        global: {
            'html,body': {
                fontFamily: 'Montserrat, sans-serif'
            }
        }
    }
});

export default customTheme;
