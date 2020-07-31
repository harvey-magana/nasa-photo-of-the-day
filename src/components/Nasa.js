import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Nasa = props => {
    const classes = useStyles();
    const { nasa } = props
    console.log(nasa)
    return ( 
        <div>
            <Toolbar>
                <Typography component="div" className={classes.paper} />
                <h1>{nasa.title}</h1>
            </Toolbar>
            <div>
                <React.Fragment>
                <CssBaseline />
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ backgroundColor: '#f1f1f1' }} />

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <Paper className={classes.paper}>                    
                                <figure>
                                    <img src={nasa.url} alt=""/>
                                    <figcaption>F{nasa.copyright}</figcaption>
                                </figure>
                            </Paper>
                            </Grid>
                            <Grid item xs={12}>
                            <Paper className={classes.paper}><p>{nasa.explanation}</p></Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </React.Fragment>
            </div>
        </div>
    )
}

export default Nasa