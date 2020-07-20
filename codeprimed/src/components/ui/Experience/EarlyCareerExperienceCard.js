import React from 'react'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import cardStyles from '../CommonStyles/cardStyles'

// Card that describes work history (from 15 yrs ago to beginning)
const EarlyCareerExperienceCard = () => {
    const classes = cardStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.listItemHeader}>Hughes Network Systems, Pricipal Software Engineer II</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Transformational Communication MilsatCom (2004 - 2005)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>System and software engineering team member for TSAT space segment network
                            management.  Responsibilities include requirements development, architecture, system design, and prototype development of a network management
                                system for a DoD multi-satellite communication system.  <br /><br />Java Web Services / J2EE based prototyping and proof of concept performed on Linux
                                cluster as part of architecture risk reduction.  Development includes use of a policy based network management framework
                                (Java based with WSDL interfaces).
                                </Typography>}>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>Spaceway (1998 - 2005)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Lead software development engineer for the security management and element
                            management subsystems within the Spaceway NOCC – the Network Operations Control Center for the Spaceway broadband satellite system.
                                Spaceway is a satellite based broadband IP network.<br /><br />Derived design from system requirements, developed, and tested a multithreaded C++
                                key generation and distribution system which produces millions of symmetric keys and securely distributes them via satellite to millions of
                                satellite terminals on a periodic basis.  Designed a high performance, thread-safe shared memory based 3DES encryption library – scalable to
                                support millions of key updates and scalable concurrent access by client applications.<br /><br />Extensive hands on OOA&D and implementation
                                ork in UML using Rational Rose, C++ and CORBA development, as well as mentoring junior staff members. SQL query development. <br /><br />Coordinate and
                                direct the activities of subsystem development team – requires me to have multidisciplinary skills in information assurance (encryption,
                                authentication, key management), network management (SNMP/HP OpenView based), object oriented design and analysis, CORBA, C++, TCP/IP
                                networking, database, and high availability computing architectures in a UNIX environment. Support of systems integration and test teams
                                through multiple increments.<br /><br />Selected as member of NOCC Architecture Team - address key architectural considerations: high availability,
                                scalability, performance, maintainability, persistence, and security of the system.  In this role, also responsible for guiding project’s use of OO
                                methodologies, and helped develop its coding standards.
                                </Typography>}>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                </List>
                <Typography className={classes.listItemHeader}>COMSAT, Pricipal Software Engineer</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.cardDetails}>INMARSAT and ACeS Satellite Systems(1988 - 1998)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.cardDetails}>Worked as lead software engineer of network management development 
                                for the ACeS personal communications system product, a major cellular/satellite GSM based phone system. Responsible for the design 
                                and implementation of a TMN network management system for the central management site.  
                                Coordinate and direct the activities of the development team which encompasses network management, GUI, and DBMS subsystems. 
                                Product specification and task scheduling are also major job responsibilities.<br /><br />Lead software engineer for Inmarsat 
                                M/B LES communications system product.  Full SDLC including requirements writing, software design, debug, and multiple levels of 
                                testing including international on-site acceptance testing.<br /><br />Responsible for the design, implementation, and test of 
                                real time finite state machine software in C for telephony circuit switching and PSTN applications that support call rates of up 
                                to tens of calls per second.  This task was completed independently and ahead of schedule.
                                </Typography>}>

                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                </List>
            </CardContent>
        </Card>
    );
}

export default EarlyCareerExperienceCard;