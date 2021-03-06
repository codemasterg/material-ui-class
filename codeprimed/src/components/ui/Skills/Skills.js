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
import ArchitectureCard from './ArchitectureCard';
import ProgrammingCard from './ProgrammingCard';
import FrameworksCard from './FrameworksCard';
import WebServicesCard from './WebServicesCard';
import DatabasesCard from './DatabasesCard';

import {executeScroll} from '../../../utils/Scroll'

const Skills = (props) => {
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
            <Typography className={classes.cardPageTitle}>Skills Summary</Typography>
            <Grid container direction="column" >
                <Accordion expanded={panelExpanded === '#architecturePanel'} onChange={handleChange('#architecturePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar ref={scrollRef} className={classes.firstAvatar}>A</Avatar>
                        <Typography className={classes.cardSummary}>Architecture and Design</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ArchitectureCard />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#programmingPanel'} onChange={handleChange('#programmingPanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar  ref={scrollRef}  className={classes.secondAvatar}>P</Avatar>
                        <Typography className={classes.cardSummary}>Programming</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ProgrammingCard/>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#softwarePanel'} onChange={handleChange('#softwarePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.thirdAvatar}>S</Avatar>
                        <Typography className={classes.cardSummary}>Software Frameworks</Typography>
                    </AccordionSummary>
                    <AccordionDetails ref={scrollRef} >
                       <FrameworksCard />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#webservicePanel'} onChange={handleChange('#webservicePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.fourthAvatar}>W</Avatar>
                        <Typography className={classes.cardSummary}>Web Services and Cloud</Typography>
                    </AccordionSummary>
                    <AccordionDetails ref={scrollRef} >
                       <WebServicesCard />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={panelExpanded === '#databasePanel'} onChange={handleChange('#databasePanel')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Avatar className={classes.fifthAvatar}>D</Avatar>
                        <Typography className={classes.cardSummary}>Databases</Typography>
                    </AccordionSummary>
                    <AccordionDetails ref={scrollRef} >
                       <DatabasesCard />
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>

    );
}

export default Skills;