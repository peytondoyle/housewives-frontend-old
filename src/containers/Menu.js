import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: 0,
    boxShadow: 'none'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: 0,
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  // debugger
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div class="menubutton">
      <img src="https://i.ibb.co/6szFNdq/Menu-Icons.png" class="menubuttonimage"
      onClick={props.openMenu}></img>
    </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div id="maintitle">
            <h1 id="title">Real<br></br>Housewives</h1>
          </div>
          <hr></hr>
          <div id="maintitle">
          <div id="subtitle">
            <p class="psubtitle">Most everything you’d want to know about the <em>Real Housewives of New York</em> & all of the other American housewife franchises.</p>
          </div>
          </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}