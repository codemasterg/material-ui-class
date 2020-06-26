import React from 'react'

import { useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import ButtonArrow from '../../ui/ButtonArrow'
// import './landingPage.css'
import background from '../../../assets/landingPage.jpg'
import landingPageStyles from './landingPageStyles'

// The course uses an Adobe Effects animation rendered with React Lottie.
// I would rather learn how to make a jpg a background in a react component

const LandingPage = (props) => {
    const classes = landingPageStyles();
    const theme = useTheme();

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container justify="center" alignItems="center" direction="row"  >
                    <Grid sm item>
                        <Typography align="center" variant="h2" className={classes.tagLine}>From Requirements to<br />Production Ready Code</Typography>
                        <Grid container justify="center" className={classes.buttonContainer} spacing={1}>
                            <Grid item>
                                <Button variant="contained" className={classes.estimateButton}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" className={classes.learnButton}><span style={ {marginRight: 10} }>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item>
                        <img alt="st lucia" src={background} className={classes.landingImage}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default LandingPage;