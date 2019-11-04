import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
    maxWidth: 'fixed',
    alignItems: "flex-start",
    justifyItems: 'flex-end'
  },
}));

export default function FullWidthGrid(props) {
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
            <h1 id="title">All<br></br>Housewives</h1>
          </div>
          <hr></hr>
          </Paper>
        </Grid>
        <Container fixed>
          <div style={{ margin: 10, textAlign: 'center'}}>
            <Grid container spacing={5} justify="center" >
              <Grid item xs={3} id="yolo">xs=3</Grid>
              <Grid item xs={3} id="yolo">xs=3</Grid>
              <Grid item xs={3} id="yolo">xs=3</Grid>
            </Grid>
          </div>
        </Container>
      </Grid>
    </div>
  );
}