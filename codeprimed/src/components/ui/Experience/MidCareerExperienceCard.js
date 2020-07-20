import React from 'react'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import cardStyles from '../CommonStyles/cardStyles'

// Card that describes work history (5 - 15 yrs ago)
const MidCareerExperienceCard = () => {
    const classes = cardStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.listItemHeader}>Lockheed Martin RMS, Software Engineer Senior Staff</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Next Generation Identification (2008 - 2014)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Team lead (player/coach) and Chief Programmer responsible for design and 
                                implementation of software for a national biometrics system that supports hundreds of transactions per hour and near real time 
                                biometric identification.  <br/><br/>I developed several JEE5/EJB3 applications on JBoss EAP5, numerous SOAP and REST based web services using 
                                Apache CXF, RESTEasy, JAXB, XPath, XSLT, and the Java API for XML digital signatures.  <br/><br/>Implemented the system persistence tier and 
                                JPQL queries using JPA/Hibernate/Oracle11g.  Implemented web application using JQuery, JSP, and Spring MVC.  <br/><br/>Developed and maintained 
                                100s of JUnit tests. Established software design process and documentation standards for the project (light weight UML, Rational tool suite).  
                                <br/><br/>Worked directly with customer to develop system requirements, successfully delivered and presented system PDR/CDR for multiple increments to 
                                large federal audience, assisted in customer acceptance testing.
                                </Typography>}>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Cyber Security Team (2008)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Developed SAML 2.0 server and Java web services and integrated with COTS XML 
                                gateways and LDAP server to demonstrate cross domain ABAC concept in a multi-vendor environment.  Secured web services using XML digital signatures 
                                and XML encryption using WS-Security standards.  <br/><br/>Responsible for developing the requirements for this task and deriving the software design, 
                                presenting key milestone results to stakeholders.
                                </Typography>}>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Information Decision Superiority Team (2005-2007)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Implemented a custom DB schema and Java persistence framework using 
                                Hibernate / JPA and Oracle.  Implemented multi level security Java web services using digital signatures, SAML, SAAJ, and MTOM to authenticate 
                                and enforce access in a cross domain multi vendor environment.  J2EE based development performed using BEA Weblogic, Google Web Toolkit, Tomcat, 
                                Eclipse, and Oracle backend.  Designed XML schemas for tracking data support.  Worked with task sponsors to identify key requirements; derived 
                                software design from requirements.<br/><br/>Responsible for design and implementation of multiple Java based web services.   Developed JMS queue 
                                and topic interfaces to support subscription and asynchronous messaging.  Designed and implemented Oracle tables, views, and triggers.  Responsible 
                                for the selection of a commercial BPMN platform and integrating it with custom applications and other 3rd party tools.  <br/><br/>Introduced Agile software 
                                development processes suitable for IRAD environment: lightweight use of UML, ICDs, and other design artifacts as well as mentoring of junior team 
                                members.   Development environment: BEA WebLogic Platform, XML Beans, Eclipse, CVS, and Oracle. 
                                </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                </List>
            </CardContent>
        </Card>
    );
}

export default MidCareerExperienceCard;