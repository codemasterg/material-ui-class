import { makeStyles } from '@material-ui/styles'

/**
 * Footer styles based on the theme setup in App.js
 */
export default makeStyles((theme) => ({
    landingImage: {
        
        height: "20em",
        width: "40em",
        [theme.breakpoints.down("md")]: {
            height: "16em",
            width: "30em",
        },
        [theme.breakpoints.down("xs")]: {  // mobile phones are extra small
            height: "12em",
            width: "22em",

        },
    },

    
}));