import { makeStyles } from '@material-ui/styles'



/**
 * Styles for the <Skills> component
 */
export default makeStyles((theme) => ({
    skillsTitle: {
        ...theme.typography.h4,
    },
    skillsSummary: {
        ...theme.typography.handwrittenTitle,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
        }
    },
    skillsCard: {
        boxShadow: theme.shadows[8],
        borderRadius: 15,
        padding: ".5em", 
    },

    skillsDetails: {
        ...theme.typography.cardText,
    },
    architectureAvatar: {
        marginRight: "1em",
        color: "white",
        backgroundColor: "#74543d"
    },
    programmingAvatar: {
        marginRight: "1em",
        color: "white",
        backgroundColor: "#c1770c",
    },
   softwareAvatar: {
        marginRight: "1em",
        color: "white",
        backgroundColor: "#ce5310",
    },
    webservicesAvatar: {
        marginRight: "1em",
        color: "white",
        backgroundColor: "#fca503",
    },
    databasesAvatar: {
        marginRight: "1em",
        color: "white",
        backgroundColor: "#69737f",
    },
    listItemHeader: {
        ...theme.typography.listItemHeader,
    }
    
}));