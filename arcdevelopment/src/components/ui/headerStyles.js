import {makeStyles} from '@material-ui/styles'

/**
 * Header styles based on the theme setup in App.js
 */
export default makeStyles ( (theme) => ({
    logo: {
        height: "8em"
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
}));