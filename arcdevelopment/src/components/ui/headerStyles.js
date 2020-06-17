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
}));