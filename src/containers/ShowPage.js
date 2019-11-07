import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class ShowPage extends React.Component {

  makeGif(){
    let firstHalf = "https://api.giphy.com/v1/gifs/search?api_key=MBLG8iL6WK4fhlNTBExR5HjnVI5P6CIf&q="
    let firstName = this.props.selectedHW.firstname
    let lastName = this.props.selectedHW.lastname
    let secondHalf = "&limit=12&offset=0&rating=G&lang=en"
    let firstChunk = firstHalf.concat(firstName)
    let secondChunk = lastName.concat(secondHalf)
    let GIPHY_URL =  firstChunk.concat(secondChunk)

    fetch(GIPHY_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      })
    }

    useStyles = () => {
      return makeStyles(theme => ({
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
        color: theme.palette.text.secondary
      }
    }));
    }

    classes = this.useStyles();

  render(){

  	return (
      this.props.selectedHW ?
      <div className={this.classes.root}>
      <div class="menubutton">
        <img src="https://i.ibb.co/6szFNdq/Menu-Icons.png" class="menubuttonimage"
        onClick={this.props.openMenu}></img>
      </div>
        <Grid container spacing={3}>
          <Grid item xs>
          </Grid>

          <Grid item xs={2}>
            <Paper className={this.classes.paper}>
            <div id="housewifeimg">
            {console.log(this.makeGif)}
            <img src={this.props.selectedHW.image} class="housewifeshowimg"></img>
            </div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={this.classes.paper} style={{textAlign: "left", paddingTop: "20vw"}}>
            <div id="housewifetitle">
              <h2 id="title">{this.props.selectedHW.firstname}</h2>
            </div>

            <div id="housewifesubtitle">
              <h8><em>Real Housewives of {this.props.selectedHW.city}</em><br></br>
              {this.props.selectedHW.firstname} {this.props.selectedHW.lastname} is {this.props.selectedHW.current ? "a current housewife." : "not a current housewife."}<br></br>
              Seasons as an active housewife:            {this.props.selectedHW.seasons.map(function(item) {
                return <div className="item">{item}</div>;
              })}
              <p id="heart">❤<h8><em># Likes</em></h8></p>
              </h8>
              <p id="showpagebuttons">Add to Favorites</p> &nbsp; <p id="showpagebuttons">Share this Housewife</p>



            </div>
            </Paper>
          </Grid>

          <Grid item xs>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
        <Grid item xs>
        </Grid>

        <Grid item xs>
        </Grid>

        <Grid item xs={7}>
          <Paper className={this.classes.paper} style={{textAlign: "left"}}>
            <div id="housewifesubtitle">
              <h8><em>Taglines</em></h8><br></br>

              {this.props.selectedHW.taglines.map(tagline =>
              {return <div><h8>Season {tagline.season}</h8> <br></br> <p id="taglines">{tagline.tagline}</p></div>})}

            </div>
          </Paper>
        </Grid>

        <Grid item xs>
        </Grid>
      </Grid>

      </div>
      :
      "yolo"

  	);
  }

};

export default ShowPage;
