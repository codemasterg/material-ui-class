import { makeStyles } from '@material-ui/styles'

/**
 * Footer styles based on the theme setup in App.js
 */
export default makeStyles((theme) => ({
    landingImage: {
        
        height: "30em",
        width: "100%",
        // since the toolbar has a bottom margin, bring the image up so that it joins the toolbar
        marginTop: "-1em",
        [theme.breakpoints.down("md")]: {
            height: "16em",
        },
        [theme.breakpoints.down("xs")]: {  // mobile phones are extra small
            height: "12em",

        },
    },

    tagLine: {
        marginBottom: "1em",
        marginTop: "1em",
    },
    
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 50,
        height: 45,
        width: 145,
        // marginRight: 40,
        "&:hover": {
            // by default hover results in light grey.  note primary and secondary support a "light" option
            backgroundColor: theme.palette.secondary.light,
        }
    },

    buttonContainer: {
        marginBottom: "2em",
    },

    learnButton: {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        borderWidth: 2,
        textTransform: "none",
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "0.9 rem",
        height: 45,
        width: 145,
    }
}));