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
    this.makeGif();
  }

  makeGif = () => {
    let firstHalf = "https://api.giphy.com/v1/gifs/search?api_key=MBLG8iL6WK4fhlNTBExR5HjnVI5P6CIf&q="
    let firstName = "real"
    let space = "%20"
    let firstNameAndSpace = firstName.concat(space)
    let firstChunk = firstHalf.concat(firstNameAndSpace)
    let lastName = "housewives"
    let secondHalf = "&limit=150&offset=0&rating=PG&lang=en"
    let secondChunk = lastName.concat(secondHalf)
    let GIPHY_URL =  firstChunk.concat(secondChunk)

    fetch(GIPHY_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let index = Math.floor(Math.random() * 150) + 1
      let gifObject = data.data[index]
      let gif = gifObject.images.original.url
      // debugger
      this.setState({loginGif: gif})
    })
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
            <h1 id="logintitle">Create<br></br>Account</h1>
          </div>
          <hr></hr>
          <img src={this.state.loginGif} id="loginimg"></img>
          <div class="block">
            <input type="text" class="input-res" placeholder="username" id="input"></input>
            <br></br>
            <input type="text" class="input-res" placeholder="image URL" id="input"></input>
            <br></br>
            <input type="text" class="input-res" placeholder="fav city" id="input"></input>
          </div>
          <button type="button" class="btn-sample" id="loginsubmit"
          onClick={this.props.handleUserFormSubmit}>Submit</button>
            <br></br>
          </Paper>
        </Grid>
      </Grid>
      </div>


  	);
  }

};

export default withStyles(styles)(LoginPage);
