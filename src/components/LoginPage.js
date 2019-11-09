import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const styles = theme => ({
  root: {
    flexGrow: 1,
    border: 0,
    boxShadow: 'none'
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    border: 0,
    boxShadow: 'none',
  },
});




class LoginPage extends React.Component {


  constructor(){
    super()
      this.state={

      }
  }

  componentDidMount(){
  }

  render(){

    const {classes} = this.props;

  	return (

      <div className={classes.root}>

      <div class="menubutton">
        <img src="https://i.ibb.co/6szFNdq/Menu-Icons.png" class="menubuttonimage"
        onClick={this.props.openMenu}></img>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div id="maintitle">
            <h1 id="title">Login<br></br>Housewives</h1>
          </div>
          <hr></hr>
          <div id="maintitle">
          <div id="subtitle">
            <p class="psubtitle">Most everything you’d want to know about the American <em>Real Housewives</em> franchises.</p>
          </div>
          </div>
          </Paper>
        </Grid>
      </Grid>
      </div>


  	);
  }

};

export default withStyles(styles)(LoginPage);
