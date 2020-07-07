import React from 'react'

import { useTheme } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import experienceStyles from './experienceStyles'

const Experience = (props) => {
    const classes = experienceStyles();
    const theme = useTheme();

    return (
        <Grid container direction="column" alignItems="center">
            <Typography className={classes.experienceTitle}>Experience Summary</Typography>
            <Grid container direction="column" >
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.architectureAvatar}>A</Avatar>
                        <Typography className={classes.experienceSummary}>Architecture and Design</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Card  className={classes.experienceCard}> 
                            <CardContent>
                            <Typography className={classes.experienceDetails}>Diverse expertise includes full lifecycle object oriented software 
                            development of enterprise systems entailing N-tier web applications, web services, information assurance, and databases.  Architected 
                            and lead the development of a high availability, scalable and transactional message based system for a national biometrics capability.
                            </Typography>
                            </CardContent>
                        </Card>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.programmingAvatar}>P</Avatar>
                        <Typography className={classes.experienceSummary}>Programming Languages</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.experienceDetails}>Programming Languages Card Goes Here</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.softwareAvatar}>S</Avatar>
                        <Typography className={classes.experienceSummary}>Software Frameworks</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.experienceDetails}>Software Frameworks Card Goes Here</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.webservicesAvatar}>W</Avatar>
                        <Typography className={classes.experienceSummary}>Web Services</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.experienceDetails}>Web Services Card Goes Here</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
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