import React from 'react'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import skillsStyles from './skillsStyles'

// Card that describes design and architecture skills
const ArchitectureCard = () => {
    const classes = skillsStyles();

    return (
        <Card className={classes.skillsCard}>
            <CardContent>
                <Typography className={classes.listItemHeader}>Expertise in Software Architecture and Design</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.skillsDetails}>OOA&D</Typography>}
                            secondary={<Typography variant="inherit" className={classes.skillsDetails}>Extensive object oriented analysis and
                            design work for large scale enterprise systems: network management, biometrics, web applications, analytics, malware.
                                             </Typography>}>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.skillsDetails}>Messaging Systems</Typography>}
                            secondary={<Typography variant="inherit" className={classes.skillsDetails}>ReST and JMS based messaging systems
                            (using queues, topics, xa-transations).  Event subscription and publication.
                                             </Typography>}>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.skillsDetails}>Availability and Scalability</Typography>}
                            secondary={<Typography variant="inherit" className={classes.skillsDetails}>Load balanced architectures: ReST
                            based web services and web UIs, dynamic JMS message router.  Redudant nodes (hot standby, failover).
                                             </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.skillsDetails}>Data Modeling</Typography>}
                            secondary={<Typography variant="inherit" className={classes.skillsDetails}>Large scale relational models, NoSQL key-value,
                            ORMs, object data models.
                                             </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.skillsDetails}>Concurrency</Typography>}
                            secondary={<Typography variant="inherit" className={classes.skillsDetails}>Multithreading, thread pools, synchronization,
                            asynchronous processing.
                                             </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                </List>
            </CardContent>
        </Card>
    );
}

export default ArchitectureCard;