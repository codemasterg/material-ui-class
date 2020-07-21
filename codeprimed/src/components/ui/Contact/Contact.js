import React from 'react'

import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar';

import cardStyles from '../CommonStyles/cardStyles';
import contactStyles from './contactStyles'
import selfie from '../../../assets/greg-totsline.jpg'
import linkedInLogo from '../../../assets/linkedin.png'
import gmailLogo from '../../../assets/gmail.png'
import phoneLogo from '../../../assets/cellphone.jpeg'
import favicon from '../../../assets/favicon.png'

const Contact = (props) => {

    const classes = { ...cardStyles(), ...contactStyles() };

    return (
        <>
            <Grid container alignItems="center" justify="center" spacing={1} >
                <Typography className={classes.cardPageTitle}>Contact Me</Typography>
            </Grid>
            <Card className={classes.card} style={{ margin: "1em" }}>

                <CardContent>
                    <Grid container alignItems="center" justify="left" spacing={1} alignContent='space-between'>
                        <Grid item>
                            <Avatar alt="favicon" src={favicon} />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.cardTitle}>Code Primed, LLC</Typography>
                        </Grid>

                    </Grid>
                    <Divider variant="inset" className={classes.divider} />
                    <Grid container direction="row" alignItems="center" justify="left" spacing={1} >
                        <Grid item>
                            <Avatar alt="Greg Totsline" src={selfie} />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.cardSummary}>Greg Totsline, Owner</Typography>
                        </Grid>
                    </Grid>
                    <Divider variant="inset" className={classes.divider} />
                    <Grid container direction="row" alignItems="center" justify="center" spacing={1} >
                        <Grid item>
                            <Avatar alt="gmail" src={gmailLogo} />
                        </Grid>
                        <Grid item>
                            <Typography><a className={classes.link} href="mailto:codeprimed@gmail.com">codeprimed@gmail.com</a></Typography>
                        </Grid>
                    </Grid>
                    <Divider variant="fullWidth" className={classes.divider} />
                    <Grid container direction="row" alignItems="center" justify="center" spacing={1} >
                        <Grid item>
                            <Avatar alt="cell phone" src={phoneLogo} />
                        </Grid>
                        <Grid item>
                            <Typography><a className={classes.link} href="tel:301-956-5548">Call / Text 301-956-5548</a></Typography>
                        </Grid>
                    </Grid>
                    <Divider variant="fullWidth" className={classes.divider} />
                    <Grid container direction="row" alignItems="center" justify="center" spacing={1} >
                        <Grid item>
                            <Avatar alt="Linked In" src={linkedInLogo} />
                        </Grid>
                        <Grid item>
                            <Typography><a className={classes.link} href="https://www.linkedin.com/in/greg-totsline" rel="noopener noreferrer" target="_blank">
                                Contact Me Via LinkedIn</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>


            </Card>
        </>
    );
}

export default Contact