import React from 'react'

import { useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import ButtonArrow from '../../ui/ButtonArrow'
// import './landingPage.css'
import background from '../../../assets/landingPage.jpg'
import landingPageStyles from './landingPageStyles'


// Main page, the Hero Block is the 1st thing user's see
const LandingPage = (props) => {
    const classes = landingPageStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column" >
            <Grid item> {/* ---Hero Block--- */}
                <Grid container justify="center" alignItems="center" direction="row"  >
                    <Grid sm item>
                        <Typography align="center" className={classes.tagLine}>Bridging Requirements to<br /> Production Ready Code</Typography>
                        <Grid container justify="center" className={classes.buttonContainer} spacing={1}>
                            <Grid item>
                                <Button variant="contained" className={classes.backgroundButton}><span style={{ marginRight: 10 }}>My Background</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item>
                        <img alt="bridging requirements to production" src={background} className={classes.landingImage} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>   { /* Skills Block */}
                <Grid container alignItems="center" justify="center" className={classes.skillsContainer}>
                    <Card className={classes.biographyCard}>
                        <CardContent>
                            <Grid container direction="column" style={{ textAlign: "center" }}>
                                <Grid item>
                                    <Typography variant="h4">Software Development Skills</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Java, Web Services, Spring Boot, SQL, Javascript, React, Jenkins, Maven, Docker
                                    </Typography>
                                    <Button variant="contained" className={classes.resumeButton}>My Resume
                                        <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.cardBackground} />
                </Grid>
            </Grid>

        </Grid>
    )
}
export default LandingPage;