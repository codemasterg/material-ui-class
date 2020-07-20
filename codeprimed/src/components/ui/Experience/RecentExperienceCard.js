import React from 'react'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import cardStyles from '../CommonStyles/cardStyles'

// Card that describes recent work history
const RecentExperienceCard = () => {
    const classes = cardStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.listItemHeader}>Lockheed Martin RMS, Software Engineer Senior Staff</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Malware Management System (10/19 - Present)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Software SME for a malware management system that ingests
                                candidate malware file archives from various interfaces (GUI, JMS, ReST), stores them on a secure network, and provides a workflow
                                for user analysis. <br/><br/>Scaled out file archive ingest using JMS, and implemented a Spring Boot routing application that evaluates 
                                consumer node health and host load to make routing decisions before forwarding an archive file to a consumer via JMS.  <br/><br/>
                                Upgraded the system to Java 11, Spring Boot 2.1.5, and made changes needed to support remote Spring Boot dev tools.
                                <br/><br/>Implemented Spring Boot web services, Spring Data JDBC and  JPA/Hibernate based DAOs, custom SQL queries. Performed 
                                Javascript, HTML, and CSS updates for GUI changes.<br/><br/>Hands-on training: React, React Hooks, and Redux; Docker and 
                                Swarm; Deploying Spring Boot applications to AWS.
                                </Typography>}>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Foreignness Determination (10/18 - 10/19)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Software development lead for high-performance proof of concept 
                                that ingests billions of records in various formats, normalizes and updates them in a common data store (Accumulo) and makes 
                                foreignness determinations; accessed via ReSTful web services.  <br/><br/>Worked directly with customer to shape the TTO, develop 
                                functional and performance requirements, create system design (data model, architecture, deployment model).  <br/><br/>Hands-on development 
                                of web services using Spring Boot, Apache Spark for ingest of data, and Apache Accumulo data access layer in the customer’s high-performance 
                                computing center.  <br/><br/>Also responsible for definition of the team’s CM workflows using Git, setup of Jenkins for CI, and defining the 
                                production deployment process.
                                </Typography>}>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Knowledge Ecosystem (5/14 - 10/18)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Software development lead for an integrated set of web applications 
                                that share a common Lucence/ElasticSearch index. Re-architected system to greatly improve service availability by identifying and 
                                eliminating key single points of failure in the system: web servers, MySQL database, file storage.  <br/><br/>Performed hands on Agile development 
                                using Java, Spring MVC / Spring JDBC, JQuery, Javascript, Lucene, MySQL DB queries, and JSPs to implement ReSTful web services that 
                                scale to support 13K unique users per month. Debuged existing functions, especially timing / race conditions. <br/><br/>Lead initiatives to automate 
                                testing through use of Selenium, JUnit tests in Jenkins for CI testing of the system, and automation of build and deployment.  This greatly 
                                reduces the amount of time required for debugging, regression testing, and DevOps support.  <br/><br/>Worked with the customer to define requirements, 
                                feature milestones, user stories and MVP functions.  <br/><br/>Optimized web session establishment to greatly reduce response time for users. Advise 
                                customer and team on technical changes and choices, derive software designs from requirements, assign development tasking.  <br/><br/>Established 
                                documentation and processes for formal software builds and deployments.  Lead effort to successfully transition development to AWS so product 
                                could be shared with customer partners, task was completed on budget and schedule as part of a completion based TTO.
                                </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                </List>
            </CardContent>
        </Card>
    );
}

export default RecentExperienceCard;