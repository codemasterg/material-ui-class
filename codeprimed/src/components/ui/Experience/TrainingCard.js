import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import reactLogo from '../../../assets/react.png';
import springBootLogo from '../../../assets/springBoot.png';
import dockerLogo from '../../../assets/docker.png';
import materialUiLogo from '../../../assets/material-ui.png';

import hopkinsLogo from '../../../assets/hopkins.jpeg';
import ritLogo from '../../../assets/rit.png';

import cardStyles from '../CommonStyles/cardStyles';

// Card that describes work history (from 15 yrs ago to beginning)
const TrainingCard = () => {
    const classes = cardStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.listItemHeader}>Most Recent Training</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Technical Training (2020)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}><Avatar alt="React" src={reactLogo} style={ {marginBottom: "0.5em"} } />
                                React with Redux and React Hooks: Hands-on development of a single page application that included the use of the 
                                React Router, Redux, Thunk, and Hooks.<br /><br />
                                <Avatar alt="React" src={springBootLogo} style={ {marginBottom: "0.5em"} } />Deploying Spring Boot Applications
                                to AWS: EBS, Load Balanced Deployments, Auto Scaling, Rolling Deployments<br /><br />
                                <Avatar alt="React" src={materialUiLogo} style={ {marginBottom: "0.5em"} } />
                                Material-UI: Developed web application to learn best practices when using Material-UI components (Theme setup 
                                for common typography and other styles), Tabs, Lists, Menus, Buttons, SwipeableDrawer, Grid Layouts, Cards, 
                                Avatars, Inputs and Validation.<br /><br />
                                <Avatar alt="React" src={dockerLogo} style={ {marginBottom: "0.5em"} } />
                                 Docker: Setup Docker locally, creation and execution of containers, use of volumes and bind mounts, Docker 
                                 Compose for multi-containers, Swarm learning on labs.play-with-docker.
                                </Typography>}>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth"  />
                </List>
            </CardContent>
            <CardContent>
                <Typography className={classes.listItemHeader}>Education</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <Grid container direction="row">
                            <Avatar alt="JHU" src={hopkinsLogo} style={ {marginRight: "0.5em"} } />
                            <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Johns Hopkins University</Typography>}
                                secondary={<Typography variant="inherit" className={classes.cardDetails}>Baltimore, MD,
                                Master of Science; Major: Computer Science
                                </Typography>}>

                            </ListItemText>
                        </Grid>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <Grid container direction="row">
                            <Avatar alt="RIT" src={ritLogo} style={ {marginRight: "0.5em"} } />
                            <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Rochester Institute of Technology</Typography>}
                                secondary={<Typography variant="inherit" className={classes.cardDetails}>Rochester, NY, Bachelor of Science; Major: Computer Science
                                </Typography>}>

                            </ListItemText>
                        </Grid>
                    </ListItem>
                </List>
                <Divider variant="fullWidth"  />
            </CardContent >
        </Card >
    );
}

export default TrainingCard;