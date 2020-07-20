import React, { useState, useEffect, useRef } from 'react'

import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

import experienceStyles from './experienceStyles'
import {executeScroll} from '../../../utils/Scroll'

const Experience = (props) => {
    const classes = experienceStyles();

    // hooks
    const [panelExpanded, setPanelExpanded] = useState(false);
    const scrollRef = useRef(null);

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
        // update URL hash with given panel name so that on a page reload the panel remains open
        if(isExpanded) {
            props.history.replace(panelName);
        }
        else {
            props.history.push(props.history.location.pathname);  // if user explicitly closes a panel, remove hash since no panels will be open
        }
        setPanelExpanded(isExpanded ? panelName : false);
        executeScroll(scrollRef);  // scroll up to clicked panel
    }

    return (
        <Grid container direction="column" alignItems="center">
            <Typography className={classes.experienceTitle}>Experience & Education</Typography>
            <Grid container direction="column" >
                <Accordion expanded={panelExpanded === '#0to5'} onChange={handleChange('#0to5')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar ref={scrollRef} className={classes.architectureAvatar}>R</Avatar>
                        <Typography className={classes.experienceSummary}>Recent</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       Past 5
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#5to15'} onChange={handleChange('#5to15')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar  ref={scrollRef}  className={classes.programmingAvatar}>M</Avatar>
                        <Typography className={classes.experienceSummary}>Mid Career</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Past 5 to 15
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#15toBeginning'} onChange={handleChange('#15toBeginning')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.softwareAvatar}>E</Avatar>
                        <Typography className={classes.experienceSummary}>Early Career</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       {/* <FrameworksCard ref={scrollRef} /> */}
                       Past 15 to Begining
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#trainingAndEducation'} onChange={handleChange('#trainingAndEducation')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.webservicesAvatar}>T</Avatar>
                        <Typography className={classes.experienceSummary}>Training And Education</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       {/* <WebServicesCard ref={scrollRef} /> */}
                       Training & Education
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>

    );
}

export default Experience;