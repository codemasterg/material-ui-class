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
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
    // iOS has a "swipe to go back" feature that interferes with the discovery feature, so discovery has to be disabled.
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    // Hooks
    const [tabIndex, setTabIndex] = useState(0);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuItemSelectedIndex, setMenuItemSelectedIndex] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {

        // use current URL to determine which tab should be selected following a page refresh
        let targetTabIndex = getTabIndexByPath(tabIndexToPathMap, window.location.pathname);
        if (targetTabIndex !== tabIndex) {
            setTabIndex(targetTabIndex);
        }
    }, [tabIndex]);

    /**
     * Tab change HANDLER
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

    // Only appears when medium and small screens are not used, see varibale 'isMediumToSmallScreen' in this file.
    const tabs = (
        <Fragment>
            <Tabs value={tabIndex} onChange={handleChange} className={classes.tabContainer}>
                {/* Services has a sub-menu, esitmate is implemented as button on the menu, but is a regular drawer item */}
                {Object.values(tabIndexToPathMap).map((tab, index) => (
                    tab.path === "/services" ?
                        <Tab key={tab.path} className={classes.tab} component={Link} to={tab.path}
                            label={tabIndexToPathMap[index].label}
                            aria-owns={menuAnchorEl ? "service-items" : undefined}
                            aria-haspopup={menuAnchorEl ? true : undefined}
                            onMouseOver={event => handleMenuClick(event)}
                        /> : tab.path !== "/estimate" ?
                            <Tab key={tab.path} className={classes.tab} component={Link} to={tab.path} label={tabIndexToPathMap[index].label} /> : null
                ))}

            </Tabs>
            <Button variant="contained" color="secondary" component={Link} to={tabIndexToPathMap[5].path} className={classes.ovalButton}>
                {tabIndexToPathMap[5].label}
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

                        <MenuItem key={item.path} component={Link} to={item.path}
                            onClick={() => { handleMenuClose(); setTabIndex(1); setMenuItemSelectedIndex(index) }}
                            classes={{ root: classes.serviceMenuItem }}
                            selected={index === menuItemSelectedIndex && tabIndex === 1}>{item.label}
                        </MenuItem>

                    ))
                }
            </Menu>
        </Fragment>
    )

    // Only appears when medium and small screens are used, see varibale 'isMediumToSmallScreen' in this file.
    const drawer = (
        <Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS} disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}>
                
                {/* Add bottom margin so content apprearing below the tool bar is not hidden behind it */}
                <div className={classes.toolbarMargin} />

                <List disablePadding>
                    {Object.values(tabIndexToPathMap).map((tab, index) => (
                        tab.path !== "/estimate" ?
                            <ListItem key={tab.path} divider button onClick={() => { setOpenDrawer(false); handleChange() }} selected={tabIndex === index}
                                component={Link} to={tabIndexToPathMap[index].path}>
                                <ListItemText className={tabIndex === index ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem} > {tabIndexToPathMap[index].label}</ListItemText></ListItem>
                            :
                            <ListItem key={tab.path} divider button onClick={() => { setOpenDrawer(false); handleChange() }} selected={tabIndex === index} component={Link} to={tabIndexToPathMap[index].path}>
                                <ListItemText className={tabIndex === 5 ? `${classes.drawerItem} ${classes.drawerItemSelected} ${classes.drawerItemEstimate}` : `${classes.drawerItem} ${classes.drawerItemEstimate}`} >{tabIndexToPathMap[5].label}</ListItemText>
                            </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </Fragment>
    )

    return (
        <Fragment>
        <ElevationScroll {...props}>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar disableGutters>
                    <Button component={Link} to="/"
                        onClick={() => setTabIndex(0)}
                        className={classes.logoContainer} disableRipple>
                        <img src={logo} alt="company logo" className={classes.logo} />
                    </Button>

                    {isMediumToSmallScreen ? drawer : tabs}

                </Toolbar>
            </AppBar>
        </ElevationScroll>
        {/* Add bottom margin so content apprearing below the tool bar is not hidden behind it */}
        <div className={classes.toolbarMargin} />

        </Fragment>
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