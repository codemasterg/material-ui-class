import { makeStyles } from '@material-ui/styles'

import cardBackground from '../../../assets/CP-Card.svg'


/**
 * Footer styles based on the theme setup in App.js
 */
export default makeStyles((theme) => ({
    landingImage: {

        height: "25em",
        width: "100%",
        // since the toolbar has a bottom margin, bring the image up so that it joins the toolbar
        marginTop: "-1em",
        marginBottom: "-1em",
        [theme.breakpoints.down("md")]: {
            height: "20em",
        },
        [theme.breakpoints.down("xs")]: {  // mobile phones are extra small
            height: "14em",

        },
    },

    tagLine: {
        ...theme.typography.h2,
        marginBottom: "1em",
        marginTop: "1em",
        [theme.breakpoints.down("sm")]: {
            ...theme.typography.h4,
        }

    },

    backgroundButton: {
        // ...theme.typography.estimate,
        // backgroundColor: theme.palette.secondary.main,
        borderRadius: 5,
        height: 45,
        width: 195,
        fontFamily: "Raleway",
        fontWeight: "bold",
        // boxShadow: "1px 2px 1px grey",
        // marginRight: 40,
        // "&:hover": {
        //     // by default hover results in light grey.  note primary and secondary support a "light" option
        //     backgroundColor: theme.palette.secondary.light,
        // }
    },

    buttonContainer: {
        marginBottom: "2em",
    },


    resumeButton: {
        // fontSize: "0.7 rem",
        height: 35,
        padding: 10,
        marginTop: "1em",
        [theme.breakpoints.down("sm")]: {
            padding:  8,
        },
    },

    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.secondary.main,
    },

    subtitle: {
        marginBottom: "1em",
    },

    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        }
    },

    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
        },
    },

    skillsContainer: {
        height: "50em",
        [theme.breakpoints.down("sm")]: {
            height: "40em",
        },
    },

    cardBackground: {
        backgroundImage: `url(${cardBackground})`,
        backgroundPosition: "left",
        backgroundSize: "65em 65em",
        backgroundRepeat: "repeat",
        height: "100%",
        width: "100%",
        marginLeft: "2em",
        [theme.breakpoints.down("md")]: {
            backgroundSize: "60em 60em",
            marginLeft: "2em",
        },
        [theme.breakpoints.down("sm")]: {
            backgroundSize: "50em 50em",
            marginLeft: "2em",
        },
    },

    biographyCard: {
        position: "absolute",  // place card on top of card background
        boxShadow: theme.shadows[8],
        borderRadius: 15,
        padding: "2em",
        [theme.breakpoints.down("sm")]: {
            padding: "1em",
            marginRight: ".5em",
        }
    },
}));