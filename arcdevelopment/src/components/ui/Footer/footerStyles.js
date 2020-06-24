import { makeStyles } from '@material-ui/styles'

/**
 * Footer styles based on the theme setup in App.js
 */
export default makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: theme.zIndex.modal + 1,
        // even though this is the default position, must set it in order to zIndex to work
        position: "relative",
    },

    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em",
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em",
        },
    },
    footerContainer: {
        position: "absolute",
    },

    footerLink: {
        color: "white",
        fontFamily: "arial",
        fontSize: "0.75em",
        fontWeight: "bold",
        textDecoration: "none",
    },

    footerGridItem: {
        margin: "3em",
    },

    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em",
        }
    },

    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em"
        }
    },
}));