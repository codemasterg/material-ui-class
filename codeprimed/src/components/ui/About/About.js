import React, { useRef, useEffect } from 'react';

import { useTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import tileData from './tileData';
import {executeScroll} from '../../../utils/Scroll'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        height: "100%",
    },
}));

const About = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const picRef = useRef(null);

    useEffect( () => {
        executeScroll(picRef); 
    });

    const handleClick = (event, description) => {
        picRef.current.textContent = description;
    };

    return (
        <>
            <Grid container alignContent="center" justify="center">
                <Typography ref={picRef} style={{ ...theme.typography.subtitle1, marginLeft: "1em" }}>Click or hover to learn about me.</Typography>
            </Grid>

            <div className={classes.root} {...props.children}>  {/* props spread must be included for Grow transition to work */}
                <Grow in={true} timeout={1400}>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {tileData.map((tile, index) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1} title={tile.description}>
                                <img src={tile.img} title={tile.description} alt={tile.title} onClick={(event) => { handleClick(event, tile.description) }} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Grow>
            </div>
            <p style={{ marginBottom: "1em" }}></p>
        </>
    );
}

export default About;