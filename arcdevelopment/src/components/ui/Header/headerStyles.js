import { makeStyles } from '@material-ui/styles'

/**
 * Header styles based on the theme setup in App.js
 */
export default makeStyles((theme) => ({
    // The toolbar needs margins so that content on the page under the toolbar is not hidden behind it.
    toolbarMargin: {
        marginBottom: "8em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "7em",
        },
        [theme.breakpoints.down("xs")]: {  // mobile phones are extra small
            marginBottom: "6em",
        },
    },

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
        marginLeft: "auto",
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
        "&:hover": {
            // by default hover results in light grey.  note primary and secondary support a "light" option
            backgroundColor: theme.palette.secondary.light,
        }
    },

    servicesMenu: {
        backgroundColor: theme.palette.common.green,
        color: "white",
        // Since appbar style uses a higher z-index, must create margin for the services menu so items are not obscured by the appbar.
        marginTop: "5em",
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
        backgroundColor: theme.palette.common.green,

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

    // Put menu bar on top of everything so that when a Drawer is used for smaller screens, it will not obscure the menu bar.
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}));