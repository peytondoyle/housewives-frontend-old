import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
            <Link to="/housewives" onClick={props.settingCityATL}><p id="menucities">Atlanta</p></Link>
            <Link to="/housewives" onClick={props.settingCityBH}><p id="menucities" >Beverly Hills</p></Link>
            <Link to="/housewives" onClick={props.settingCityD}><p id="menucities">Dallas</p></Link>
            <Link to="/housewives" onClick={props.settingCityNJ}><p id="menucities">New Jersey</p></Link>
            <Link to="/housewives" onClick={props.settingCityNY}><p id="menucities">New York</p></Link>
            <Link to="/housewives" onClick={props.settingCityOC}><p id="menucities">Orange County</p></Link>
            <Link to="/housewives" onClick={props.settingCityP}><p id="menucities">Potomac</p></Link>
            <hr id="hrmenu"></hr>
            <Link to="/housewives" onClick={props.settingCityDC}><p id="menucities">D.C.</p></Link>
            <Link to="/housewives" onClick={props.settingCityM}><p id="menucities">Miami</p></Link>
          </Paper>
      </Grid>

      <Grid item xs={12} sm={6} id="menuright">
        <Paper className={classes.paper}>

        <>
          {props.currentUser ?
          <>
          <a href="/" class="menulinks"><p id="menuitems">Home</p></a>
          <Link to="/housewives" class="menulinks"><p id="menuitems" onClick={props.menuAway}>Housewives</p></Link>
          <a href="/profile"><p id="menuitems">Profile</p></a>
          <Link to="/housewives" onClick={props.logOut}><p id="menuitems">Logout</p></Link>
          </>
          :
          <>
          <a href="/" class="menulinks"><p id="menuitems">Home</p></a>
          <a href="/housewives" class="menulinks"><p id="menuitems">Housewives</p></a>
          <a href="/create" class="menulinks"><p id="menuitems">New Account</p></a>
          <a href="/login"><p id="menuitems">Login</p></a>
          </>
          }
          </>
        </Paper>
      </Grid>
    </Grid>
    </div>
  );
}