import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    toolbar: {
        textAlign: 'center'
    }
  }));

const Nasa = props => {
    const classes = useStyles();
    const { nasa } = props
    console.log(nasa)
    return ( 
        <div>
            <div>
                <React.Fragment>
                <CssBaseline />
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ backgroundColor: '#f1f1f1' }} />

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <Paper className={classes.paper}>   
                                <h1>{nasa.title}</h1>                 
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