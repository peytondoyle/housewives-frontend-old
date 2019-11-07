import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'

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
  flexGrow: 1,
},
}));

let handleClick = (e) => {
    e.preventDefault();
    let value = e.target.parentElement.children[0].dataset.hwid
    this.setState({selectedId: value})
  };


export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Link to={`/housewives/${props.housewife.id}`}>
      <div class="indexcard">
       <img src={props.housewife.image} class="housewifeindeximg" data-hwid={props.housewife.id}></img>
       <h5>{props.housewife.firstname} {props.housewife.lastname}</h5>
       <h6>{props.housewife.city}</h6>
       <br></br>
      </div>
      </Link>
     </Grid>
  );
}