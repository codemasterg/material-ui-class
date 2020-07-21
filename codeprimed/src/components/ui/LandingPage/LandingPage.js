import React, {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'

import { useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'

import ButtonArrow from '../../ui/ButtonArrow'
import background from '../../../assets/landingPage.jpg'
import javaLogo from '../../../assets/java.png'
import dockerLogo from '../../../assets/docker.png'
import reactLogo from '../../../assets/react.png'
import jenkinsLogo from '../../../assets/jenkins.png'
import mysqlLogo from '../../../assets/mysql.png'
import springBootLogo from '../../../assets/springBoot.png'
import jsLogo from '../../../assets/js.png'
import landingPageStyles from './landingPageStyles'
import {executeScroll} from '../../../utils/Scroll'


// Main page, the Hero Block is the 1st thing user's see
const LandingPage = (props) => {
    const classes = landingPageStyles();
    const theme = useTheme();
    const scrollRef = useRef(null);

    useEffect( () => {
        executeScroll(scrollRef, -100); 
    });

    return (
        <Grid ref={scrollRef} container direction="column" >
            <Grid item> {/* ---Hero Block--- */}
                <Grid container justify="center" alignItems="center" direction="row"  >
                    <Grid sm item>
                        <Typography align="center" className={classes.tagLine}>Turning Requirements into<br /> Production Ready Code</Typography>
                        <Grid container justify="center" className={classes.buttonContainer} spacing={1}>
                            <Grid item>
                                <Button variant="contained" className={classes.backgroundButton} component={Link} to="/experience"><span style={{ marginRight: 10 }}>My Experience</span>
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
                                    <Typography variant="h4" style={{ marginBottom: "1em" }}>Software Development Skills</Typography>
                                </Grid>
                                <Grid item>

                                    <Grid container direction="row" >
                                        <CardActionArea href="https://www.oracle.com/java/technologies/" style={{ height: "3em", width: "3em", margin: ".2em" }}>
                                            <CardMedia
                                                className={classes.media}
                                                image={javaLogo}
                                                title="Visit Java"
                                                style={{ height: "3em", width: "3em", margin: ".2em" }}
                                            />
                                        </CardActionArea>
                                        <CardActionArea href="https://spring.io/projects/spring-boot" style={{ height: "3em", width: "6em", margin: ".2em" }}>
                                            <CardMedia
                                                className={classes.media}
                                                image={springBootLogo}
                                                title="Visit Spring Boot"
                                                style={{ height: "3em", width: "6em", margin: ".2em" }}
                                            />
                                        </CardActionArea>
                                        <CardActionArea href="https://www.mysql.com/" style={{ height: "3em", width: "4.2em", margin: ".2em" }} >
                                        <CardMedia
                                            className={classes.media}
                                            image={mysqlLogo}
                                            title="Visit MySQL"
                                            style={{ height: "3em", width: "4.2em", margin: ".2em" }}
                                        />
                                        </CardActionArea>
                                        <CardActionArea href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" style={{ height: "3em", width: "3em", margin: ".2em" }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={jsLogo}
                                            title="Visist JS"
                                            style={{ height: "3em", width: "3em", margin: ".2em" }}
                                        />
                                        </CardActionArea>
                                        <CardActionArea href="https://reactjs.org" style={{ height: "3em", width: "3em", margin: ".2em" }} >
                                        <CardMedia
                                            className={classes.media}
                                            image={reactLogo}
                                            title="Visit React"
                                            style={{ height: "3em", width: "3em", margin: ".2em" }}
                                        />
                                        </CardActionArea>
                                        <CardActionArea href="https://www.docker.com" style={{ height: "3.1em", width: "3.6em", margin: ".2em" }} >
                                        <CardMedia
                                            className={classes.media}
                                            image={dockerLogo}
                                            title="Visit Docker"
                                            style={{ height: "3.1em", width: "3.6em", margin: ".2em" }}
                                        />
                                        </CardActionArea>
                                        <CardActionArea href="https://www.jenkins.io/" style={{ height: "3em", width: "3.1em", margin: ".2em" }} >
                                        <CardMedia
                                            className={classes.media}
                                            image={jenkinsLogo}
                                            title="Visit Jenkins"
                                            style={{ height: "3em", width: "3.1em", margin: ".2em" }}
                                        />
                                        </CardActionArea>
                                    </Grid>
                                    <Button variant="contained" className={classes.resumeButton} component={Link} to="/skills">Skills Summary
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