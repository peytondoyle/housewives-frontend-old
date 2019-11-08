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

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

function getLabelText(value) {
  return `${value} Heart${value !== 1 ? 's' : ''}`;
}


class ShowPage extends React.Component {

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.makeGif();
    }, 7000)
  }

  constructor(){
    super()
      this.state={
        liked: false,
        gifs: null,
        heartImg: "https://i.ibb.co/WyQQHzY/noun-Heart-2410071-2.png",
      }
  }

  componentDidMount(){
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("firedddd")
    if (prevProps.selectedHW !== this.props.selectedHW) {
      this.makeGif()
    }}

  makeGif = () => {
    let firstHalf = "https://api.giphy.com/v1/gifs/search?api_key=MBLG8iL6WK4fhlNTBExR5HjnVI5P6CIf&q="
    let firstName = this.props.selectedHW.firstname
    let space = "%20"
    let firstNameAndSpace = firstName.concat(space)
    let firstChunk = firstHalf.concat(firstNameAndSpace)
    let lastName = this.props.selectedHW.lastname
    let secondHalf = "&limit=24&offset=0&rating=PG&lang=en"
    let secondChunk = lastName.concat(secondHalf)
    let GIPHY_URL =  firstChunk.concat(secondChunk)
    // debugger

    fetch(GIPHY_URL)
    .then(res => res.json())
    .then(data => {
      // debugger
      console.log(data)
      this.setState({gifs: data})
    })
  }

  addLike = (e) => {
    console.log("click!")
    !this.state.liked ?
    this.setState({liked: true, heartImg: "https://cdn3.imggmi.com/uploads/2019/11/9/9b79beba6a04d7dce4cfb5982d815cef-full.png"})
    :
    this.setState({liked: false, heartImg: "https://cdn3.imggmi.com/uploads/2019/11/9/64b1bcc9f2a29131686ac2a4d3e6a80a-full.png"})
  }

  render(){

    const {classes} = this.props;

  	return (
      this.props.selectedHW ?

      <div className={classes.root}>

      <div class="menubutton">
        <img src="https://i.ibb.co/6szFNdq/Menu-Icons.png" class="menubuttonimage"
        onClick={this.props.openMenu}></img>
      </div>
        <Grid container spacing={3}>
          <Grid item xs>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>
            <div id="housewifeimg">
            <img src={this.props.selectedHW.image} class="housewifeshowimg"></img>
            </div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper} style={{textAlign: "left", paddingTop: "20vw"}}>
            <div id="housewifetitle">
              <h2 id="title">{this.props.selectedHW.firstname}</h2>
            </div>

            <div id="housewifesubtitle">
              <h8><em>Real Housewives of {this.props.selectedHW.city}</em><br></br>
              {this.props.selectedHW.firstname} {this.props.selectedHW.lastname} is {this.props.selectedHW.current ? "a current housewife." : "not a current housewife."}<br></br>
              Seasons as an active housewife:            {this.props.selectedHW.seasons.map(function(item) {
                return <div className="item">{item}</div>;
              })}
              <p id="heart"><img class="heartimg" onClick={this.addLike}
              src={this.state.heartImg}></img><h8><em>{this.props.selectedHW.ratings.length} Likes</em></h8></p>
              </h8>
              <p id="showpagebuttons">Add to Favorites</p>

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
          <Paper className={classes.paper} style={{textAlign: "left"}}>
            <div id="housewifesubtitle">
              <br></br>
              <h8><em>Taglines</em></h8><br></br>

              {this.props.selectedHW.taglines.map(tagline =>
              {return <div><h8>Season {tagline.season}</h8> <br></br> <p id="taglines">{tagline.tagline}</p></div>})}

            </div>
            <div>

            <h8><em>GIFs</em></h8><br></br>
            {this.props.selectedHW.seasons.length === 1 ?
            <p id="taglines">Since {this.props.selectedHW.firstname} is a one season wonder, her GIF selection might be limited.</p>
            :
            null}
            <img id="hwgifs" src={
              this.state.gifs && this.state.gifs.data[1] ?
              this.state.gifs.data[1].images.downsized.url
              :
              null
            }></img>
            <img id="hwgifs" src={
              this.state.gifs && this.state.gifs.data[2] ?
              this.state.gifs.data[2].images.downsized.url
              :
              null
            }></img>
            <img id="hwgifs" src={
              this.state.gifs && this.state.gifs.data[3] ?
              this.state.gifs.data[3].images.downsized.url
              :
              null
            }></img>
            <img id="hwgifs" src={
              this.state.gifs && this.state.gifs.data[4] ?
              this.state.gifs.data[4].images.downsized.url
              :
              null
            }></img>
            <img id="hwgifs" src={
              this.state.gifs && this.state.gifs.data[5] ?
              this.state.gifs.data[5].images.downsized.url
              :
              null
            }></img>
            <img id="hwgifs" src={
              this.state.gifs && this.state.gifs.data[6] ?
              this.state.gifs.data[6].images.downsized.url
              :
              null
            }></img>
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

ShowPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowPage);
