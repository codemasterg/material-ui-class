import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import experienceStyles from './experienceStyles'

const Experience = (props) => {
    const classes = experienceStyles();

    // hooks
    const [panelExpanded, setPanelExpanded] = useState(false);

    // if Routing to this component with a hash in the URL, use hash value to expand the panel indicated by the hash, e.g. #programmingPanel
    useEffect(() => {
        if (props.location.hash !== null) {
            setPanelExpanded(props.location.hash);
        }
    }, [props.location.hash]);

    // Ensure only one Accordion panel is expanded at a time.  Note the use of a curried 
    // function: called with panelName, and returns a function that takes an event and panel's state
    // so that the return value can be used as the change handler.  Taken from the material-ui Accordion examples.
    const handleChange = (panelName) => (event, isExpanded) => {
console.log(props.history);
        // update URL hash with given panel name so that on a page reload the panel remains open
        if(isExpanded) {
            props.history.replace(panelName);
        }
        else {
            props.history.push(props.history.location.pathname);  // if user explicitly closes a panel, remove hash since no panels will be open
        }
        setPanelExpanded(isExpanded ? panelName : false);
    }

    return (
        <Grid container direction="column" alignItems="center">
            <Typography className={classes.experienceTitle}>Experience Summary</Typography>
            <Grid container direction="column" >
                <Accordion expanded={panelExpanded === '#architecturePanel'} onChange={handleChange('#architecturePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.architectureAvatar}>A</Avatar>
                        <Typography className={classes.experienceSummary}>Architecture and Design</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Card className={classes.experienceCard}>
                            <CardContent>
                                <Typography className={classes.listItemHeader}>Extensive experience in software design and architecture:</Typography>
                                <List>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>OOA&D</Typography>}
                                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Extensive object oriented analysis and
                                            design work for large scale enterprise systems: network management, biometrics, web applications, analytics, malware.
                                             </Typography>}>

                                        </ListItemText>
                                    </ListItem>
                                    <Divider variant="fullWidth" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Messaging Systems</Typography>}
                                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>ReST and JMS based messaging systems
                                            (using queues, topics, xa-transations).  Event subscription and publication.
                                             </Typography>}>

                                        </ListItemText>
                                    </ListItem>
                                    <Divider variant="fullWidth" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Availability and Scalability</Typography>}
                                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Load balanced architectures: ReST
                                            based web services and web UIs, dynamic JMS message router.  Redudant nodes (hot standby, failover).
                                             </Typography>}>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider variant="fullWidth" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Data Modeling</Typography>}
                                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Large scale relational models, NoSQL key-value,
                                            ORMs, object data models.
                                             </Typography>}>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider variant="fullWidth" component="li" />
                                    <ListItem alignItems="flex-start">
                                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Concurrency</Typography>}
                                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Multithreading, thread pools, synchronization,
                                            asynchronous processing.
                                             </Typography>}>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider variant="fullWidth" component="li" />
                                </List>
                            </CardContent>
                        </Card>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#programmingPanel'} onChange={handleChange('#programmingPanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.programmingAvatar}>P</Avatar>
                        <Typography className={classes.experienceSummary}>Programming Languages</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.experienceDetails}>Programming Languages Card Goes Here</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#softwarePanel'} onChange={handleChange('#softwarePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.softwareAvatar}>S</Avatar>
                        <Typography className={classes.experienceSummary}>Software Frameworks</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.experienceDetails}>Software Frameworks Card Goes Here</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#webservicePanel'} onChange={handleChange('#webservicePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.webservicesAvatar}>W</Avatar>
                        <Typography className={classes.experienceSummary}>Web Services</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.experienceDetails}>Web Services Card Goes Here</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#databasePanel'} onChange={handleChange('#databasePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.databasesAvatar}>D</Avatar>
                        <Typography className={classes.experienceSummary}>Databases</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.experienceDetails}>DB Card Goes Here</Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>

    );
}

export default Experience;