import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
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
    0: {
        path: "/"
    },
    1: {
        path: "/services",
        submenuItems: [
            // Services is repeated because popup menu obscures original services tab
            {
                path: "/services",
                label: "Services"
            },
            {
                path: "/customsoftware",
                label: "Custom Software Development"
            },
            {
                path: "/mobileapps",
                label: "Mobile Applications"
            },
            {
                path: "/websites",
                label: "Websites"
            }
        ]
    },
    2: {
        path: "/revolution",
    },
    3: {
        path: "/about",
    },
    4: {
        path: "/contact",
    },
}

const Header = (props) => {
    const classes = headerStyles();

    // Hooks
    const [tabIndex, setTabIndex] = useState(0);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuItemSelectedIndex, setMenuItemSelectedIndex] = useState(0);


    function getKeyByValue(object, value) {
        console.log(value);
        let key = Object.keys(object).find(key => object[key].path === value);

        // check for submenu items with a matching path
        if (key === undefined) {

            Object.keys(object).forEach((menuKey, index) => {
                if (object[menuKey].submenuItems !== undefined) {
                    for (var i = 0; i < object[menuKey].submenuItems.length; i++) {
                        if (object[menuKey].submenuItems[i].path === value) {
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

    useEffect(() => {

        // use current URL to determine which tab should be selected following a page refresh
        let targetTabIndex = getKeyByValue(tabIndexToPathMap, window.location.pathname);
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
                                    selected={index === menuItemSelectedIndex  && tabIndex === 1}>{item.label}
                                </MenuItem>

                            ))
                        }
                    </Menu>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
};

export default Header