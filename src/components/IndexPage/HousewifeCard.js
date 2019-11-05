import React from 'react';
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
  card: {
  maxWidth: 300,
  border: 0,
  padding: 10,
  // maxWidth: 'fixed',
  // alignItems: "flex-start",
  // justifyItems: 'flex-end'
  },
  media: {
    height: 140,
  },
  root: {
  flexGrow: 1,
},
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <div class="indexcard">
       <h4>{props.housewife.firstname}</h4>
       <img src={props.housewife.image} class="housewifeindeximg"></img>
      </div>
     </Grid>
  );
}