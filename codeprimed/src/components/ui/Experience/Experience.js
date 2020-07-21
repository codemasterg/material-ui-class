import React, { useState, useEffect, useRef } from 'react'

import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

import {getTabIndexFromPath} from '../Header/headerTabs';
import cardStyles from '../CommonStyles/cardStyles'
import {executeScroll} from '../../../utils/Scroll'
import RecentExperienceCard from './RecentExperienceCard'
import MidCareerExperienceCard from './MidCareerExperienceCard'
import EarlyCareerExperienceCard from './EarlyCareerExperienceCard'
import TrainingCard from './TrainingCard'

const Experience = (props) => {
    const classes = cardStyles();

    // hooks
    const [panelExpanded, setPanelExpanded] = useState(false);
    const scrollRef = useRef(null);

    const tabIndex = getTabIndexFromPath();

    // if Routing to this component with a hash in the URL, use hash value to expand the panel indicated by the hash, e.g. #programmingPanel
    useEffect(() => {
        if (props.location.hash !== null) {
            setPanelExpanded(props.location.hash);
        }
        props.setTabIndex(tabIndex);
    }, [props, props.location.hash, tabIndex]);

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
        executeScroll(scrollRef, 0);  // scroll up to clicked panel
    }

    return (
        <Grid container direction="column" alignItems="center">
            <Typography className={classes.cardPageTitle}>Experience & Education</Typography>
            <Grid container direction="column" >
                <Accordion expanded={panelExpanded === '#0to5'} onChange={handleChange('#0to5')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar ref={scrollRef} className={classes.firstAvatar}>R</Avatar>
                        <Typography className={classes.cardSummary}>Recent</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       <RecentExperienceCard />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#5to15'} onChange={handleChange('#5to15')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar  ref={scrollRef}  className={classes.secondAvatar}>M</Avatar>
                        <Typography className={classes.cardSummary}>Mid Career</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <MidCareerExperienceCard />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#15toBeginning'} onChange={handleChange('#15toBeginning')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.thirdAvatar}>E</Avatar>
                        <Typography className={classes.cardSummary}>Early Career</Typography>
                    </AccordionSummary>
                    <AccordionDetails ref={scrollRef}>
                      <EarlyCareerExperienceCard />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#trainingAndEducation'} onChange={handleChange('#trainingAndEducation')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.fourthAvatar}>T</Avatar>
                        <Typography className={classes.cardSummary}>Training And Education</Typography>
                    </AccordionSummary>
                    <AccordionDetails ref={scrollRef}> 
                       <TrainingCard />
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>

    );
}

export default Experience;