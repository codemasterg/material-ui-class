import React from 'react'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import experienceStyles from './experienceStyles'

// Card that describes web services experience
const DatabasesCard = () => {
    const classes = experienceStyles();

    return (
        <Card className={classes.experienceCard}>
            <CardContent>
                <Typography className={classes.listItemHeader}>Web Services and Cloud</Typography>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>MySQL (6 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Schema creation and maintenance using
                            MySQL Workbench, integrated with Spring and Spring Boot applications using Spring JDBC and Spring Data (JPA/Hibernate).
                            Deleveloped numerous queries (CRUD).</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Oracle (6 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Integrated application using
                            Spring Data, Spring Boot configuration using JDBC connection pool.  Used SQLDeveloper to maintain schema.  
                            Deleveloped numerous queries (CRUD).
                            </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Lucene / Elastic (4 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Used Luecene (later converted to 
                            Elastic) to index contents of relational database to support keyword searches, and more like this searches.
                            </Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText primary={<Typography variant="h6" className={classes.experienceDetails}>Apache Accumulo (1 yr)</Typography>}
                            secondary={<Typography variant="inherit" className={classes.experienceDetails}>Defined compound key and data payloads definitions,
                            implemented Accumulo server-side iterators.</Typography>}>
                        </ListItemText>
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                </List>
            </CardContent>
        </Card>
    );
}

export default DatabasesCard;