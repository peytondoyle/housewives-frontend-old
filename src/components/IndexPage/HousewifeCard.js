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
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper className={classes.paper}>xs=12</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>xs=12 sm=6</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>xs=12 sm=6</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid>
  </Grid>
</div>
  );
}