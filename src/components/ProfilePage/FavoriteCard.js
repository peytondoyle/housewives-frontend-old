import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  card: {
  maxWidth: 300,
  border: 0,
  padding: 10,
  },
  media: {
    height: 140,
  },
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
  maxWidth: 300,
  alignItems: "flex-start",
  justifyItems: 'flex-end'
},
container: {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridGap: theme.spacing(3),
}
}));

let handleClick = (e) => {
    e.preventDefault();
    let value = e.target.parentElement.children[0].dataset.hwid
    this.setState({selectedId: value})
  };


export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={3}>
      <Paper className={classes.paper}>
      <Link to={`/housewives/${props.housewife.id}`}>
      <div class="profilecard">
       <img src={props.housewife.image} class="housewifeprofileimg" data-hwid={props.housewife.id}></img>
       <h5>{props.housewife.firstname} {props.housewife.lastname}</h5>
       <h6>{props.housewife.city}</h6>
       <br></br>
      </div>
      </Link>
      </Paper>
    </Grid>
  );
}