import React from 'react'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import skillsStyles from './skillsStyles'

// Card that describes web services skills
const WebServicesCard = () => {
    const classes = skillsStyles();

    return (
        <Card className={classes.skillsCard}>
            <CardContent>
                <Typography className={classes.listItemHeader}>Web Services and Cloud</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.skillsDetails}>ReST Services (5 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.skillsDetails}>Spring MVC / Spring Boot based,
                           using embedded Tomcat and Tomcat web server, Spring interceptors and security.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.skillsDetails}>AWS (1 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.skillsDetails}>Amazon Web Services 
                            (Elastic Beanstalk, Elastic Auto Scaling using Application Load Balancer, Rolling Updates, S3) hosting enterprise web applications 
                            using Tomcat and MySQL.  2020 Coursework from UDemy:&nbsp;
                            <a href="https://www.udemy.com/course/deploy-java-spring-boot-to-aws-amazon-web-service/" target="_blank" rel="noopener noreferrer" style={ {textDecoration: "none"} }>
                                Learn AWS - Deploy Java Spring Boot to AWS Elastic Beanstalk
                            </a>
                            </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.skillsDetails}>SOAP Services (5 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.skillsDetails}>WSDL definitions, XSLT, and programming
                            of XML Gateways (IBM Datapower) using XSLT.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.skillsDetails}>Big Data (1yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.skillsDetails}>Apache Spark and Accumulo,
                            ingest of billions of location data records (transformed from proprietary format to relational in a Spark cluster).
                            </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                </List>
            </CardContent>
        </Card>
    );
}

export default WebServicesCard;