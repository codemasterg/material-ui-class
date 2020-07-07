import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import footerStyles from './footerStyles'
import footerAdornment from '../../../assets/CP-Footer.svg'
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
                        <Grid container direction="column" spacing={1}>
                            <Grid item component={Link} onClick={() => props.setTabIndex(0)} to="/" className={classes.footerLink}>
                                Home
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
                    {/* Projects */}
                    <Grid item className={classes.footerGridItem}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item component={Link} onClick={() => props.setTabIndex(2)} to="/projects" className={classes.footerLink}>
                                Projects
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
            {/* Since I want the social media icons to appear in the same row as the grid above, but they are never hidden
                must use divs.  If another Grid is used and justify is flex-end, then the links above will not be clickable
                because a flex-end grid here would sit on top of and of the row item in line with the SM icons. */}
            <img alt="Footer" src={footerAdornment} className={classes.adornment} />
            <div className={classes.socialContainer} >
                {/* set anchor (a) element as the component and set its href */}
                <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="facebook logo" src={facebook} className={classes.icon} />
                </a>
                <a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo" src={twitter} className={classes.icon} />
                </a>
                <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagrram logo" src={instagram} className={classes.icon} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;