import { makeStyles } from '@material-ui/styles'

/**
 * Contact styles based on the theme setup in App.js
 */
export default makeStyles((theme) => ({
    cardTitle: {
        ...theme.typography.h3,
        [theme.breakpoints.down("sm")]: {
            ...theme.typography.h4,
            fontSize: "1.5rem",
        },
    },
    link: {
        color: theme.palette.primary.light,
        textDecoration: "none",
        ...theme.typography.h6,
        [theme.breakpoints.down("sm")]: {
            ...theme.typography.h8,
            fontSize: "1rem",
        },
    },
    contactTypeLabel: {
        ...theme.typography.handwrittenTitle,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
        }
    },

    divider: {
        marginTop: "1em",
        marginBottom: "1em",
    }
}));