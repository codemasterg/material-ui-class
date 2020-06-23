import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'


import footerStyles from './footerStyles'
import footerAdornment from '../../../assets/Footer Adornment.svg'



const Footer = (props) => {
    const classes = footerStyles();

    return (

        <footer className={classes.footer}>
            <Grid container justify="center" className={classes.footerContainer}>
                <Grid item className={classes.footerGridItem} >
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/" className={classes.footerLink}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                {/* Services Column */}
                <Grid item  className={classes.footerGridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/services" className={classes.footerLink}>
                            Services
                        </Grid>
                        <Grid item component={Link} to="/customsoftware" className={classes.footerLink}>
                            Custom Sofware Development
                        </Grid>
                        <Grid item component={Link} to="/mobileapps" className={classes.footerLink}>
                            Mobile App Development
                        </Grid>
                        <Grid item component={Link} to="/websites" className={classes.footerLink}>
                            Website Development className={classes.footerGridItem}
                        </Grid>
                    </Grid>
                </Grid>
                {/* Other links */}
                <Grid item className={classes.footerGridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/revolution" className={classes.footerLink}>
                            The Revolution
                        </Grid>
                        <Grid item component={Link} to="/revolution" className={classes.footerLink}>
                            Vision
                        </Grid>
                        <Grid item component={Link} to="/revolution" className={classes.footerLink}>
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
                        <Grid item component={Link} to="/about" className={classes.footerLink}>
                            About Us
                        </Grid>
                        <Grid item component={Link} to="/about" className={classes.footerLink}>
                            History
                        </Grid>
                        <Grid item component={Link} to="/about" className={classes.footerLink}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                {/* Other links */}
                <Grid item className={classes.footerGridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/contact" className={classes.footerLink}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img alt="Footer" src={footerAdornment} className={classes.adornment} />
        </footer>
    )
}

export default Footer;