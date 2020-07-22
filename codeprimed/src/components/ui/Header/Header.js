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


import logo from '../../../assets/CP-logo-v1.svg'
// import logo from '../../../assets/logo.svg'
import headerStyles from './headerStyles'
import tabIndexToPathMap, {getTabIndexFromPath} from './headerTabs'

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
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));  // medium and smaller
    // iOS has a "swipe to go back" feature that interferes with the discovery feature, so discovery has to be disabled.
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    // Hooks
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState([false, false, false]);   // padded so that this array aligns with 'tabIndexToPathMap' submenu def

    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        /**
         * Return the tab index associated with the given pathValue.
         * @param {*} object 
         * @param {*} pathValue 
         */
        function getTabIndexByPath(object, pathValue) {
            let tabIndex = getTabIndexFromPath();

            // check for submenu items with a matching path
            if (tabIndex === undefined) {

                Object.keys(object).forEach((menuKey, index) => {
                    if (object[menuKey].submenuItems !== undefined) {
                        for (var i = 0; i < object[menuKey].submenuItems.length; i++) {
                            if (object[menuKey].submenuItems[i].path === pathValue) {
                                tabIndex = parseInt(menuKey);
                                props.setMenuItemSelectedIndex(i);
                                break;
                            }
                        }
                    }
                });
            }
            return tabIndex;
        }

        // use current URL to determine which tab should be selected following a page refresh
        let targetTabIndex = getTabIndexByPath(tabIndexToPathMap, window.location.pathname);
        if (targetTabIndex !== props.tabIndex) {
            props.setTabIndex(targetTabIndex);
        }
    }, [props, props.tabIndex]);

    /**
     * Tab change HANDLER
     * 
     * @param {*} value index of the selected tab 
     */
    const handleChange = (event, value) => {
        props.setTabIndex(value);
    }

    /**
     * Services submenu click handlers
     */
    const handleMenuClick = (event, tabIndex, tab) => {
        setMenuAnchorEl(event.currentTarget);

        let openStates = [...menuOpen];
        openStates.fill(false);  // make sure that the sub-menus are always closed if another menu item is clicked
        if (tab.hasOwnProperty('submenuItems')) {
            openStates[tabIndex] = !menuOpen[tabIndex];  // toggle current state
        }
        setMenuOpen(openStates);
        props.setTabIndex(tabIndex);  // ensure tab selected is highlighted and underlined
    }

    const handleMenuClose = (event) => {
        setMenuAnchorEl(null);
        let openStates = [...menuOpen];
        openStates.fill(false);
        setMenuOpen(openStates);
    }

    let tabWithSubmenu = (tab, tabIndex) => {
        return (
            <>
                <Tab key={tab.path} className={classes.tab} component={Link} to={tab.path}
                    label={tabIndexToPathMap[tabIndex].label}
                    onClick={event => handleMenuClick(event, tabIndex, tab)}
                />
                {/* Create submenu under this Tab. Note how mouse leave must be handled
                as a menu list property while mouse over is simply a direct property of Tab (above). */}
                <Menu key={tab.path + tabIndex}
                    anchorEl={menuAnchorEl}
                    open={menuOpen[tabIndex]}
                    onClose={handleMenuClose}
                    // elevation={0}
                    MenuListProps={{ onMouseLeave: handleMenuClose }}
                    // paper is the underlying mui css style used by Menu, see API doc
                    classes={{ paper: classes.skillsMenu }}>
                    {
                        tabIndexToPathMap[tabIndex].submenuItems.map((item, index) => (

                            <MenuItem key={item.path} component={Link} to={item.path}
                                onClick={() => { handleMenuClose(); }}
                                classes={{ root: classes.skillsMenuItem }}
                            selected={index === props.menuItemSelectedIndex && props.tabIndex === 1} 
                            >{item.label}
                            </MenuItem>

                        ))
                    }
                </Menu>
            </>

        );
    }

    // Only appears when medium and small screens are not used, see varibale 'isMediumToSmallScreen' in this file.
    const tabs = (
        <Fragment>
            <Tabs value={props.tabIndex} onChange={handleChange} className={classes.tabContainer} >
                {/* Experiences has a sub-menu, estimate is implemented as button on the menu, but is a regular drawer item */}
                {Object.values(tabIndexToPathMap).map((tab, index) => (
                    tab.hasOwnProperty('submenuItems') ?
                        tabWithSubmenu(tab, index)
                        : <Tab key={tab.path} className={classes.tab} component={Link} to={tab.path} label={tabIndexToPathMap[index].label} onClick={event => handleMenuClick(event, index, tab)} />
                ))}
            </Tabs>


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

                        <ListItem key={tab.path} divider button onClick={() => { setOpenDrawer(false); handleChange() }} selected={props.tabIndex === index}
                            component={Link} to={tabIndexToPathMap[index].path}>
                            <ListItemText className={props.tabIndex === index ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem} > {tabIndexToPathMap[index].label}
                            </ListItemText>
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
                            onClick={() => props.setTabIndex(0)}
                            className={classes.logoContainer} disableRipple>
                            <img src={logo} alt="company logo" className={classes.logo} />
                        </Button>

                        {isSmallScreen ? drawer : tabs}

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* Add bottom margin so content apprearing below the tool bar is not hidden behind it */}
            <div className={classes.toolbarMargin} />

        </Fragment>
    )
};

export default Header