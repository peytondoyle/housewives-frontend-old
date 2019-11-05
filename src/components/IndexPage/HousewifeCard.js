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
  maxWidth: 350,
  border: 0
  },
  media: {
    height: 140,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
    <Grid item xs>
      <Paper className={classes.paper}>
        <div style={{ width: '10%', height: '10vw', alignItems:"center"}}>
        <h3>{props.housewife.firstname}</h3>
        </div>
      </Paper>
    </Grid>
    </div>
  );
}