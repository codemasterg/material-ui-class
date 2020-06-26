import React from 'react'

import { useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ButtonArrow from '../../ui/ButtonArrow'
// import './landingPage.css'
import background from '../../../assets/landingPage.jpg'
import landingPageStyles from './landingPageStyles'
import customSoftwareIcon from '../../../assets/Custom Software Icon.svg'

// The course uses an Adobe Effects animation rendered with React Lottie.
// I would rather learn how to make a jpg a background in a react component

const LandingPage = (props) => {
    const classes = landingPageStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
            <Grid item> {/* ---Hero Block--- */}
                <Grid container justify="center" alignItems="center" direction="row"  >
                    <Grid sm item>
                        <Typography align="center" variant="h2" className={classes.tagLine}>From Requirements to<br />Production Ready Code</Typography>
                        <Grid container justify="center" className={classes.buttonContainer} spacing={1}>
                            <Grid item>
                                <Button variant="contained" className={classes.estimateButton}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" className={classes.learnButtonHero}><span style={{ marginRight: 10 }}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item>
                        <img alt="st lucia" src={background} className={classes.landingImage} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item> { /* Services Block */}
                <Grid container direction="row" className={classes.serviceContainer} justify={isSmallScreen ? "center" : undefined}>
                    <Grid item style={ {marginLeft: isSmallScreen? 0 : "5em", textAlign: isSmallScreen ? "center" : undefined} }>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1">
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Complete digital solutions, from investigation to {" "} <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.primary.main} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img alt="custom software icon" src={customSoftwareIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default LandingPage;