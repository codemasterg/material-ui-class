import { makeStyles } from '@material-ui/styles'

/**
 * Footer styles based on the theme setup in App.js
 */
export default makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.green,
        width: "100%",
        height: "8em",
        zIndex: theme.zIndex.modal + 1,
        // even though this is the default position, must set it in order to zIndex to work
        position: "relative",
        [theme.breakpoints.down("md")]: {
            height: "6em",
        },
    },

    adornment: {
        width: "10em",
        marginTop: "1em",
        [theme.breakpoints.down("md")]: {
            width: "8em",
        },
        [theme.breakpoints.down("xs")]: {
            width: "7em",
        },
    },
    footerContainer: {
        position: "absolute",
        marginTop: "2em",
    },

    footerLink: {
        color: "white",
        fontFamily: "arial",
        fontSize: "0.75em",
        fontWeight: "bold",
        textDecoration: "none",
    },

    footerGridItem: {
        margin: "1em",
    },

    icon: {
        height: "2.5em",
        width: "2.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("sm")]: {
        height: "2em",
        width: "2em",
        },
    },

    contactContainer: {
        display: "flex",
        position: "absolute",
        right: "1.5em",
        marginTop: "-2.5em",
        [theme.breakpoints.down("sm")]: {
            right: "0.6em",
        }
    },
}));