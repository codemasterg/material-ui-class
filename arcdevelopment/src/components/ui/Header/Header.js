import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

import logo from '../../../assets/logo.svg'
import headerStyles from './headerStyles'
import tabIndexToPathMap from './headerTabs'

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
    const classes = headerStyles();
    const theme = useTheme();
    const isMediumToSmallScreen = useMediaQuery(theme.breakpoints.down("md"));  // medium and smaller

    // Hooks
    const [tabIndex, setTabIndex] = useState(0);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuItemSelectedIndex, setMenuItemSelectedIndex] = useState(0);

    useEffect(() => {

        // use current URL to determine which tab should be selected following a page refresh
        let targetTabIndex = getTabIndexByPath(tabIndexToPathMap, window.location.pathname);
        if (targetTabIndex !== tabIndex) {
            setTabIndex(targetTabIndex);
        }
    }, [tabIndex]);

    /**
     * Tab change handler
     * 
     * @param {*} value index of the selected tab 
     */
    const handleChange = (event, value) => {
        setTabIndex(value);
    }

    /**
     * Services submenu click handlers
     */
    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
        setMenuOpen(true);
    }

    const handleMenuClose = (event) => {
        setMenuAnchorEl(null);
        setMenuOpen(false);
    }

    const tabs = (
        <Fragment>
            <Tabs value={tabIndex} onChange={handleChange} className={classes.tabContainer}>
                <Tab className={classes.tab} component={Link} to={tabIndexToPathMap[0].path} label="Home" />
                <Tab className={classes.tab} component={Link} to={tabIndexToPathMap[1].path}
                    label="Services"
                    aria-owns={menuAnchorEl ? "service-items" : undefined}
                    aria-haspopup={menuAnchorEl ? true : undefined}
                    onMouseOver={event => handleMenuClick(event)}
                />
                <Tab className={classes.tab} component={Link} to={tabIndexToPathMap[2].path} label="The Revolution" />
                <Tab className={classes.tab} component={Link} to={tabIndexToPathMap[3].path} label="About Us" />
                <Tab className={classes.tab} component={Link} to={tabIndexToPathMap[4].path} label="Contact Us" />
            </Tabs>
            <Button variant="contained" color="secondary" component={Link} to="/estimate" className={classes.ovalButton}>
                Free Estimate
                    </Button>

            {/* Create services submenu using aria-owns ID. Note how mouse leave must be handled
                        as a menu list property while mouse over is simply a direct property of Tab (above). */}
            <Menu id="service-items"
                anchorEl={menuAnchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
                // elevation={0}
                MenuListProps={{ onMouseLeave: handleMenuClose }}
                // paper is the underlying mui css style used by Menu, see API doc
                classes={{ paper: classes.servicesMenu }}>

                {
                    tabIndexToPathMap[1].submenuItems.map((item, index) => (

                        <MenuItem key={index} component={Link} to={item.path}
                            onClick={() => { handleMenuClose(); setTabIndex(1); setMenuItemSelectedIndex(index) }}
                            classes={{ root: classes.serviceMenuItem }}
                            selected={index === menuItemSelectedIndex && tabIndex === 1}>{item.label}
                        </MenuItem>

                    ))
                }
            </Menu>
        </Fragment>
    )

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
                    
                    {isMediumToSmallScreen ? null : tabs}
                
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )


    /**
     * Return the tab index associated with the given pathValue.
     * @param {*} object 
     * @param {*} pathValue 
     */
    function getTabIndexByPath(object, pathValue) {
        let key = Object.keys(object).find(key => object[key].path === pathValue);

        // check for submenu items with a matching path
        if (key === undefined) {

            Object.keys(object).forEach((menuKey, index) => {
                if (object[menuKey].submenuItems !== undefined) {
                    for (var i = 0; i < object[menuKey].submenuItems.length; i++) {
                        if (object[menuKey].submenuItems[i].path === pathValue) {
                            key = menuKey;
                            setMenuItemSelectedIndex(i);
                            break;
                        }
                    }
                }
            });
        }
        return (parseInt(key));
    }
};

export default Header