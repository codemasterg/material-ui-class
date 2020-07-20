import { makeStyles } from '@material-ui/styles'

/**
 * Common styles for components that use Cards.
 */
export default makeStyles((theme) => ({
    cardPageTitle: {
        ...theme.typography.h4,
    },
    cardSummary: {
        ...theme.typography.handwrittenTitle,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
        }
    },
    card: {
        boxShadow: theme.shadows[8],
        borderRadius: 15,
        padding: ".5em", 
    },

    cardDetails: {
        ...theme.typography.cardText,
    },
    firstAvatar: {
        marginRight: "1em",
        color: "white",
        backgroundColor: "#74543d"
    },
    secondAvatar: {
        marginRight: "1em",
        color: "white",
        backgroundColor: "#c1770c",
    },
   thirdAvatar: {
        marginRight: "1em",
        color: "white",
        backgroundColor: "#ce5310",
    },
   fourthAvatar: {
        marginRight: "1em",
        color: "white",
        backgroundColor: "#fca503",
    },
   fifthAvatar: {
        marginRight: "1em",
        color: "white",
        backgroundColor: "#69737f",
    },
    listItemHeader: {
        ...theme.typography.listItemHeader,
    }
    
}));