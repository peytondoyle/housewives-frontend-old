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

  const classes = useStyles();

  return (
    props.selectedHW ?
    <div className={classes.root}>
    <div class="menubutton">
      <img src="https://i.ibb.co/6szFNdq/Menu-Icons.png" class="menubuttonimage"
      onClick={props.openMenu}></img>
    </div>
      <Grid container spacing={3}>
        <Grid item xs>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <div id="housewifeimg">
          <img src={props.selectedHW.image} class="housewifeshowimg"></img>
          </div>
          </Paper>
        </Grid>

        <Grid item xs={5}>
          <Paper className={classes.paper} style={{textAlign: "left", paddingTop: "20vw"}}>
          <div id="housewifetitle">
            <h2 id="title">{props.selectedHW.firstname}</h2>
          </div>

          <div id="housewifesubtitle">
            <h8><em>Real Housewives of {props.selectedHW.city}</em><br></br>
            {props.selectedHW.firstname} {props.selectedHW.lastname} is {props.selectedHW.current ? "a current housewife." : "not a current housewife."}<br></br>

            </h8>
          </div>
          </Paper>
        </Grid>

        <Grid item xs>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
      <Grid item xs>
      </Grid>

      <Grid item xs>
        <Paper className={classes.paper}>
        <div id="housewifeimg">
        <img src={props.selectedHW.image} class="housewifeshowimg"></img>
        </div>
        </Paper>
      </Grid>

      <Grid item xs>
      </Grid>
    </Grid>

    </div>
    :
    "yolo"

  );
}