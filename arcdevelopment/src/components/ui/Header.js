import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'

import logo from '../../assets/logo.svg'
import headerStyles from './headerStyles'

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

const tabIndexToPathMap = {
    0: "/",
    1: "/services",
    2: "/revolution",
    3: "/about",
    4: "/contact",

}

const Header = (props) => {
    const classes = headerStyles();

    // Hooks
    const [tabIndex, setTabIndex] = useState(0);


    function getKeyByValue(object, value) {
        console.log(value);
        let key = Object.keys(object).find(key => object[key] === value);
        return (parseInt(key));
    }

    useEffect(() => {

        // use current URL to determine which tab should be selected following a page refresh
        let targetTabIndex = getKeyByValue(tabIndexToPathMap, window.location.pathname);
        if (targetTabIndex !== tabIndex) {
            setTabIndex(targetTabIndex);
        }
    }, [tabIndex]);

    /**
     * 
     * @param {*} event 
     * @param {*} value index of the selected tab 
     */
    const handleChange = (event, value) => {
        setTabIndex(value);
    }

    return (
        <ElevationScroll {...props}>
            {/* must use sticky so that none the page's content is hidden behind the AppBar
                and the elevate effect actually works. */}
            <AppBar position="sticky">
                <Toolbar disableGutters>
                    <Button component={Link} to="/" 
                    onClick={() => setTabIndex(0)} 
                    className={classes.logoContainer} disableRipple>
                        <img src={logo} alt="company logo" className={classes.logo} />
                    </Button>

                    <Tabs value={tabIndex} onChange={handleChange} className={classes.tabContainer}>
                        <Tab className={classes.tab} component={Link} to={tabIndexToPathMap[0]} label="Home" />
                        <Tab className={classes.tab} component={Link} to={tabIndexToPathMap[1]} label="Services" />
                        <Tab className={classes.tab} component={Link} to={tabIndexToPathMap[2]} label="The Revolution" />
                        <Tab className={classes.tab} component={Link} to={tabIndexToPathMap[3]} label="About Us" />
                        <Tab className={classes.tab} component={Link} to={tabIndexToPathMap[4]} label="Contact Us" />
                    </Tabs>
                    <Button variant="contained" color="secondary" component={Link} to="/estimate" className={classes.ovalButton}>
                        Free Estimate
                    </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
};

export default Header