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
import TextField from '@material-ui/core/TextField';

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
            <h1 id="logintitle">Login<br></br></h1>
          </div>
          <hr></hr>
          <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />

        <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
      <TextField
        id="filled-secondary"
        label="Filled secondary"
        variant="filled"
        color="secondary"
      />
      <TextField
        id="outlined-secondary"
        label="Outlined secondary"
        variant="outlined"
        color="secondary"
      />
    </form>
          Username: <input ref='name' size="80" placeholder='please enter your username' /><br></br>
          Password: <input ref='name' size="80" placeholder='please enter your username' />
            <br></br>
            <button type="button" class="btn-sample"
            onClick={this.props.handleUserFormSubmit}>Submit</button>
          </Paper>
        </Grid>
      </Grid>
      </div>


  	);
  }

};

export default withStyles(styles)(LoginPage);
