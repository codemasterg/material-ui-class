import React from 'react'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import experienceStyles from './experienceStyles'

// Card that describes software frameworks experience
const FrameworksCard = () => {
    const classes = experienceStyles();

    return (
        <Card className={classes.experienceCard}>
            <CardContent>
                <Typography className={classes.listItemHeader}>Software Frameworks and Libraries</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Spring and Spring Boot (5 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Currently developing enterprise web services using
                            Spring Boot 2.1.5 (Spring AOP, Configuration and Profiles, Event Listeners, Spring Data, Security).</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Java EE (5 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>JEE 5 / EJB3 (Stateless session
                            beans, MDBs, XA transactions, CDI).</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Hibernate / JPA (8 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>All manner of queries and mapping, integration
                            with JDBC connection pools, used with MySQL, Oracle DBs.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>React and Material-UI (6 mo)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>2020 Coursework from UDemy:&nbsp; 
                            <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank" rel="noopener noreferrer" style={ {textDecoration: "none"} }>
                                React - The Complete Guide (Hooks, React Router, Redux)
                            </a> and&nbsp;
                            <a href="https://www.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/" target="_blank" rel="noopener noreferrer" style={ {textDecoration: "none"} }>
                                Implementing High Fidelity Designs with Material-UI and ReactJS.<br/>
                            </a>
                            <Typography variant="caption">(In fact, this application is written with React and Material-UI!)</Typography></Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Lucene / Elastic (4 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Implemented custom search and support
                            for "more like this" using Lucene API, migrated to Elastic for scalability and availability.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Maven (5), Gradle (1), Jenkins(4)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Large, multi module projects, CI/CD via Jenkins</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Docker and Swarm (1 mo)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>2020 Coursework from UDemy:&nbsp;
                            <a href="https://www.udemy.com/course/docker-mastery/" target="_blank" rel="noopener noreferrer" style={ {textDecoration: "none"} }>
                                Docker Mastery: with Kubernetes + Swarm from a Docker Captain
                            </a>
                            </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                </List>
            </CardContent>
        </Card>
    );
}

export default FrameworksCard;