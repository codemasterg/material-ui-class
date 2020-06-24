import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import footerStyles from './footerStyles'
import footerAdornment from '../../../assets/Footer Adornment.svg'
import facebook from '../../../assets/facebook.svg'
import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram.svg'

const Footer = (props) => {
    const classes = footerStyles();

    return (
        <footer className={classes.footer}>
            {/* Hide footer content if on a mobile */}
            <Hidden mdDown>
                <Grid container justify="center" className={classes.footerContainer}>
                    <Grid item className={classes.footerGridItem} >
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setTabIndex(0)} to="/" className={classes.footerLink}>
                                Home
                        </Grid>
                        </Grid>
                    </Grid>
                    {/* Services Column */}
                    <Grid item className={classes.footerGridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => { props.setTabIndex(1); props.setMenuItemSelectedIndex(0) }} to="/services" className={classes.footerLink}>
                                Services
                        </Grid>
                            <Grid item component={Link} onClick={() => { props.setTabIndex(1); props.setMenuItemSelectedIndex(1) }} to="/customsoftware" className={classes.footerLink}>
                                Custom Sofware Development
                        </Grid>
                            <Grid item component={Link} onClick={() => { props.setTabIndex(1); props.setMenuItemSelectedIndex(2) }} to="/mobileapps" className={classes.footerLink}>
                                Mobile App Development
                        </Grid>
                            <Grid item component={Link} onClick={() => { props.setTabIndex(1); props.setMenuItemSelectedIndex(3) }} to="/websites" className={classes.footerLink}>
                                Website Development
                        </Grid>
                        </Grid>
                    </Grid>
                    {/* Other links */}
                    <Grid item className={classes.footerGridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setTabIndex(2)} to="/revolution" className={classes.footerLink}>
                                The Revolution
                        </Grid>
                            <Grid item component={Link} onClick={() => props.setTabIndex(2)} to="/revolution" className={classes.footerLink}>
                                Vision
                        </Grid>
                            <Grid item component={Link} onClick={() => props.setTabIndex(2)} to="/revolution" className={classes.footerLink}>
                                Technology
                        </Grid>
                            <Grid item component={Link} to="/revolution" className={classes.footerLink}>
                                Process
                        </Grid>
                        </Grid>
                    </Grid>
                    {/* Other links */}
                    <Grid item className={classes.footerGridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setTabIndex(3)} to="/about" className={classes.footerLink}>
                                About Us
                        </Grid>
                            <Grid item component={Link} onClick={() => props.setTabIndex(3)} to="/about" className={classes.footerLink}>
                                History
                        </Grid>
                            <Grid item component={Link} onClick={() => props.setTabIndex(3)} to="/about" className={classes.footerLink}>
                                Team
                        </Grid>
                        </Grid>
                    </Grid>
                    {/* Other links */}
                    <Grid item className={classes.footerGridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setTabIndex(4)} to="/contact" className={classes.footerLink}>
                                Contact Us
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img alt="Footer" src={footerAdornment} className={classes.adornment} />
            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                {/* set anchor (a) element as the component and set its href */}
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="facebook logo" src={facebook} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo" src={twitter} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagrram logo" src={instagram} className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;