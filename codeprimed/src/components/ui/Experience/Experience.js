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
            <Typography className={classes.experienceTitle}>Work History</Typography>
            <Grid container direction="column" >
                <Accordion expanded={panelExpanded === '#architecturePanel'} onChange={handleChange('#architecturePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar ref={scrollRef} className={classes.architectureAvatar}>5</Avatar>
                        <Typography className={classes.experienceSummary}>Past 5 Years</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       Past 5
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#programmingPanel'} onChange={handleChange('#programmingPanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar  ref={scrollRef}  className={classes.programmingAvatar}>10</Avatar>
                        <Typography className={classes.experienceSummary}>Past 5 to 10 Years</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Past 5 to 10
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#softwarePanel'} onChange={handleChange('#softwarePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.softwareAvatar}>15</Avatar>
                        <Typography className={classes.experienceSummary}>Past 10 to 15 Years</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       {/* <FrameworksCard ref={scrollRef} /> */}
                       Past 10 - 15
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#webservicePanel'} onChange={handleChange('#webservicePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.webservicesAvatar}>15+</Avatar>
                        <Typography className={classes.experienceSummary}>Past 15 to Start</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       {/* <WebServicesCard ref={scrollRef} /> */}
                       Past 15 to Start
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>

    );
}

export default Experience;