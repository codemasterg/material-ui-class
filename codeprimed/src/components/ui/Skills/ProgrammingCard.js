import React from 'react'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import cardStyles from '../CommonStyles/cardStyles'

// Card that describes programming card
const ProgrammingCard = () => {
    const classes = cardStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.listItemHeader}>Programming and Languages</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Java (15 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Currently developing using Java 11, using modern features:
                             collections, streams, lambdas, optionals, and the latest NIO.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Javascript (5 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>React JS applications (using JSX) as 
                            well as a variety of custom JQuery based web applications.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>SQL (15 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Complex queries, all join forms, sub selects,
                            schema definition and updates.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Markup (5yr) and Data (15yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>HTML, CSS, JSON, XML and supporting libraries
                            (Jackson, JAXB, XSLT).</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Scripting (3 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Bash, Groovy (for Gradle customization). </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>C and C++ (10-15 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Started career developing in C and C++
                            (satellite communications systems, network management systems).</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                </List>
            </CardContent>
        </Card>
    );
}

export default ProgrammingCard;