import {extendTheme} from "@chakra-ui/react";
import {Card} from "@shared/theme/components/Card";
import {Heading} from "@shared/theme/components/heading";
import {Button} from "@shared/theme/components/Button";

const customTheme = extendTheme({
    components: {Button, Heading, Card},
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
