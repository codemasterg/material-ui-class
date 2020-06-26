import { makeStyles } from '@material-ui/styles'

/**
 * Footer styles based on the theme setup in App.js
 */
export default makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.green,
        width: "100%",
        height: "12em",
        marginTop: "-1em",
        zIndex: theme.zIndex.modal + 1,
        // even though this is the default position, must set it in order to zIndex to work
        position: "relative",
        [theme.breakpoints.down("md")]: {
            height: "6em",
           
        },
    },

    adornment: {
        width: "10em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "8em",
        },
        [theme.breakpoints.down("xs")]: {
            width: "7em",
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
        marginLeft: "1em",
        // marginTop: "4em",
        [theme.breakpoints.down("md")]: {
            height: "2em",
            width: "2em",
            marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em",
        }
    },

    socialContainer: {
        display: "flex",
        position: "absolute",
        right: "1.5em",
        [theme.breakpoints.down("md")]: {
            right: "0.6em",
            marginTop: "-5em"
        }
    },
}));