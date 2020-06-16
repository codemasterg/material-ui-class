import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import logo from '../../assets/logo.svg'
import './header.css'

/**
 * Component-specific styles based on the theme setup in App.js
 */
const useStyles = makeStyles (theme => ({
    logo: {
        height: "7em"
    }, 

    tabContainer: {
        marginLeft: "auto"
    },

    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
    }
}));

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Header = (props) => {
    const classes = useStyles();

    return (
        <ElevationScroll {...props}>
            {/* must use sticky so that none the page's content is hidden behind the AppBar
                and the elevate effect actually works. */}
            <AppBar position="sticky">
                <Toolbar disableGutters>
                    <img src={logo} alt="company logo" className={classes.logo} />
                    <Tabs className={classes.tabContainer}>
                        <Tab className={classes.tab} label="Home" />
                        <Tab className={classes.tab} label="Services" />
                        <Tab className={classes.tab} label="The Revolution" />
                        <Tab className={classes.tab} label="About Us" />
                        <Tab className={classes.tab} label="Contact Us" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
};

export default Header