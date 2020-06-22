import {makeStyles} from '@material-ui/styles'

/**
 * Header styles based on the theme setup in App.js
 */
export default makeStyles ( (theme) => ({
 

    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em",
        },
        [theme.breakpoints.down("xs")]: {  // mobile phones are extra small
            height: "6.5em",
        },
    }, 

    logoContainer: {
        padding: 0
    },

    tabContainer: {
        marginLeft: "auto"
    },

    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
    },

    ovalButton: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        margin: "0 50px 0 25px",
        height: "45px",
    },

    servicesMenu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
    },

    serviceMenuItem: {
        // Apply consistent tab styling to service menu items as well
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1,
        }
    },

    drawerIcon: {
        height: "50px",
        width: "50px",
    },

    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent",
        }
    },

    drawer: {
        backgroundColor: theme.palette.common.blue,

    },

    drawerItem: {
        ...theme.typography.tab,  // use spread operator to expand this def in one line
        color: "white",
        opacity: 0.7,

    },

    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange,

    },

    drawerItemSelected: {
        opacity: 1,

    },

}));