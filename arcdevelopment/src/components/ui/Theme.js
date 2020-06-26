import { createMuiTheme } from '@material-ui/core/styles';

const codeGreen = "#27AE60";

const codeOrange = "#F5B041";

/**
 * Define common MUI theme overrides that are unique to this app
 */
export default createMuiTheme({
    palette: {
        common: {
            green: `${codeGreen}`,
            orange: `${codeOrange}`
        },

        primary: {
            main: `${codeGreen}`
        },

        secondary: {
            main: `${codeOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",  // do not auto convert to upper case
            fontSize: "1rem",
            fontWeight: "700",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1.7rem",
            color: `${codeGreen}`,
        }
    }
  
});