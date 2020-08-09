import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import footerStyles from './footerStyles'
import footerAdornment from '../../../assets/CP-Footer.svg'
import linkedInLogo from '../../../assets/linkedin.png'
import gmailLogo from '../../../assets/gmail.jpeg'
import phoneLogo from '../../../assets/cellphone.png'
import LightTooltip from '../../../utils/LightToolTip'

const Footer = (props) => {
    const classes = footerStyles();

    return (
        <footer className={classes.footer}>
            {/* Hide footer content if on a mobile */}
            <Hidden smDown>
                <Grid container justify="center" className={classes.footerContainer}>
                    <Grid item className={classes.footerGridItem} >
                        <Grid container direction="column" spacing={1}>
                            <Grid item component={Link} onClick={() => props.setTabIndex(0)} to="/" className={classes.footerLink}>
                                Home
                        </Grid>
                        </Grid>
                    </Grid>
                    {/* Skills Summary Column */}
                    <Grid item className={classes.footerGridItem}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item component={Link} onClick={() => { props.setTabIndex(1); props.setMenuItemSelectedIndex(0) }} to="/skills" className={classes.footerLink}>
                                Skills
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Experience Column */}
                    <Grid item className={classes.footerGridItem}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item component={Link} onClick={() => { props.setTabIndex(1); props.setMenuItemSelectedIndex(0) }} to="/experience" className={classes.footerLink}>
                                Experience
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Resume */}
                    <Grid item className={classes.footerGridItem}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item component={Link} onClick={() => props.setTabIndex(2)} to="/resume" className={classes.footerLink}>
                                Resume
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Other links */}
                    <Grid item className={classes.footerGridItem}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item component={Link} onClick={() => props.setTabIndex(3)} to="/about" className={classes.footerLink}>
                                About
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Other links */}
                    <Grid item className={classes.footerGridItem}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item component={Link} onClick={() => props.setTabIndex(4)} to="/contact" className={classes.footerLink}>
                                Contact
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            {/* Since I want the contact icons to appear in the same row as the grid above but they are never hidden,
                must use divs.  If another Grid is used and justify is flex-end, then the links above will not be clickable
                because a flex-end grid here would sit on top of and of the row item in line with the SM icons. */}
            <img alt="Footer" src={footerAdornment} className={classes.adornment} />
            <div className={classes.contactContainer} >
                {/* set anchor (a) element as the component and set its href */}
                <LightTooltip title="Email codeprimed@gmail.com" >
                    <a href="mailto:codeprimed@gmail.com" rel="noopener noreferrer" target="_blank">
                        <img alt="gmail logo" src={gmailLogo} className={classes.icon} />
                    </a>
                </LightTooltip>
                <LightTooltip title="Call or text 240-385-9914" >
                    <a href="tel:240-385-9914" rel="noopener noreferrer" target="_blank">
                        <img alt="twitter logo" src={phoneLogo} className={classes.icon} />
                    </a>
                </LightTooltip>
                <LightTooltip title="Connect on LinkedIn" >
                    <a href="https://www.linkedin.com/in/greg-totsline" rel="noopener noreferrer" target="_blank">
                        <img alt="instagrram logo" src={linkedInLogo} className={classes.icon} />
                    </a>
                </LightTooltip>
            </div>
        </footer>
    )
}

export default Footer;