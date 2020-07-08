import React from 'react'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import experienceStyles from './experienceStyles'

// Card that describes programming experience
const ProgrammingCard = () => {
    const classes = experienceStyles();

    return (
        <Card className={classes.experienceCard}>
            <CardContent>
                <Typography className={classes.listItemHeader}>Programming and Language Experience</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Java 15 years</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Currently developing using Java 11, collections streams,
                            lambdas, NIO, Optional.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Javascript 5 years</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>React JS applications (using JSX) as 
                            well as a variety of custom web applications.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Data Interchange 15 years</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>JSON, XML and supporting libraries (Jackson,
                            JAXB, XSLT).</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>SQL 15 years</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Complex queries, all join forms, sub selects,
                            schema definition and updates.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Scripting 3 years</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Bash, Groovy (for Gradle customization). </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>C and C++ 10-15 years</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Started career developing in C and C++
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