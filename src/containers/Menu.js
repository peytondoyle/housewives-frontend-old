import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';

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
      <img src="https://i.ibb.co/CKPwv00/Menu-Icons2.png" class="menubuttonimage"
      onClick={props.openMenu}></img>
    </div>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper} id="menuleft">
            <p id="menucities" onClick={props.settingCityHW}>Atlanta</p>
            <p id="menucities" onClick={props.settingCityHW}>Beverly Hills</p>
            <p id="menucities" onClick={props.settingCityHW}>Dallas</p>
            <p id="menucities" onClick={props.settingCityHW}>New Jersey</p>
            <p id="menucities" onClick={props.settingCityHW}>New York</p>
            <p id="menucities" onClick={props.settingCityHW}>Orange County</p>
            <p id="menucities" onClick={props.settingCityHW}>Potomac</p>
            <hr id="hrmenu"></hr>
            <p id="menucities" onClick={props.settingCityHW}>D.C.</p>
            <p id="menucities" onClick={props.settingCityHW}>Miami</p>
          </Paper>
      </Grid>
      <Grid item xs={12} sm={6} id="menuright">
        <Paper className={classes.paper}>
          <a href="/" class="menulinks"><p id="menuitems">Home</p></a>
          <a href="/housewives" class="menulinks"><p id="menuitems">Housewives</p></a>
          <p id="menuitems">Login</p>
          <p id="menuitems">Logout</p>
          <p id="menuitems">Search</p>
        </Paper>
      </Grid>
    </Grid>
    </div>
  );
}