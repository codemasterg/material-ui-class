import { createMuiTheme } from '@material-ui/core/styles';

const codeGreen = "#27AE60";

const codeRedMud = "#ae3427";

const codeGrey = "#868686";

/**
 * Define common MUI theme overrides that are unique to this app
 */
export default createMuiTheme({
    palette: {
        common: {
            green: `${codeGreen}`,
            redMud: `${codeRedMud}`
        },

        primary: {
            main: `${codeGreen}`
        },

        secondary: {
            main: `${codeRedMud}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",  // do not auto convert to upper case
            fontSize: "1rem",
            fontWeight: "700",
        },
        handwrittenTitle: {
            fontFamily: "Dancing Script",
            fontSize: "2rem",
            textTransform: "none",
            color: codeRedMud,
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.7rem",
            color: codeGreen,
        },
        h3: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.4rem", 
            color: codeGreen,
        },
        h4: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1.75rem", 
            color: codeGreen,
        },
        subtitle1: {
            // fontFamily: "Raleway",
            fontWeight: 300,
            fontSize: "1.25rem", 
            color: codeGrey,
        },
        learnButton: {
            borderColor: codeGreen,
            color: codeGreen,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
        }
    }
  
});