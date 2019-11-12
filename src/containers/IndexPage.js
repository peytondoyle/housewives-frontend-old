import React from 'react';
import HousewifeCard from "../components/IndexPage/HousewifeCard.js"
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
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
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  }
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    props.allHousewives ?
    <div className={classes.root}>
    <div class="menubutton">
      <img src="https://i.ibb.co/6szFNdq/Menu-Icons.png" class="menubuttonimage"
      onClick={props.openMenu}></img>
    </div>
      <Grid container spacing={3}>
        <Grid item xs={12} id="removepadding">
          <Paper className={classes.paper}>
          <div id="maintitle">
            <h1 id="title">All<br></br>Housewives</h1>
          </div>
          <hr></hr>
          </Paper>
        </Grid>

        <div style={{ width: '71%', alignItems:"center"}} class="filterwrapper">
          <Box display="flex" p={1} style={{marginTop: '-4.3vw'}}>
            <div id="filters">
              <p class="filterbuttontext" onClick={props.filterCity}>{props.cityButton}</p>
            </div>
            <div id="filters">
              <p class="filterbuttontext" onClick={props.filterTenure}>{props.tenureButton}</p>
            </div>
            <div id="filters">
              <p class="filterbuttontext" onClick={props.filterName}>{props.nameButton}</p>
            </div>
            <div id="filters">
              <p class="filterbuttontext" onClick={props.filterRating}>{props.ratingButton}</p>
            </div>
            <div id="filters">
              <p class="filterbuttontext" onClick={props.resetIndex}>Reset</p>
            </div>
          </Box>
        </div>

        <div style={{ width: '71%', alignItems:"center"}} class="filterwrapper">
          <Box display="flex" p={1} style={{margin: '-1.3vw'}}>
          <Grid container spacing={3}>
            {props.allHousewives.map(housewife => <HousewifeCard
            housewife={housewife}
            openMenu={props.openMenu}
            menu_on={props.menu_on}/>)}
          </Grid>
          </Box>
        </div>

      </Grid>
    </div>
    :
    "yolo"
  );
}