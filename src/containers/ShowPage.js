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
      this.pullingLikes()
    }, 7000)
  }

  constructor(){
    super()
      this.state={
        // liked: false,
        gifs: null,
        // heartImg: "https://i.imgur.com/j3BRC9r.png",
      }
  }

  componentDidMount(){
    this.getData();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("firedddd")
  //   if (prevProps.selectedHW !== this.props.selectedHW) {
  //     this.makeGif()
  //     this.setHearts()
  //     this.pullingLikes()
  //   }}

  pullingLikes = () => {
    let HWRATING_URL = `https://realhousewives-backend.herokuapp.com/housewives/${this.props.selectedHW.id}/ratings`
    fetch(HWRATING_URL)
    .then(res => res.json())
    .then(data => {
      let totalRatings = data.length
      let userHasRating = data.filter(rating => rating["user_id"] === 1)
      // debugger
      this.setState({hwRatings: userHasRating, totalRatings: totalRatings})
      // debugger
      if (userHasRating.length === 0) {
        this.setState({liked: false, currentRatingId: 0})
      } else {
        this.setState({liked: true, currentRatingId: userHasRating[0].id})
      }
      this.setHearts()
    })}


    postClick = () => {
      let HWRATING_URL = `https://realhousewives-backend.herokuapp.com/housewives/${this.props.selectedHW.id}/ratings`
      fetch(HWRATING_URL)
      .then(res => res.json())
      .then(data => {
        let hwRatings = data.length
        // debugger
        // this.setState(this.state)
        this.setState({totalRatings: hwRatings})
        // if (userHasRating.length === 0) {
        //   this.setState({liked: false, currentRatingId: 0})
        // } else {
        //   this.setState({liked: true, currentRatingId: userHasRating[0].id})
        // }
      })}

    // liked: true, currentRatingId: userHasRating[0].id


  setHearts = () => {
    this.state.liked ?
    this.setState({liked: true, heartImg: "https://i.imgur.com/AoMrC43.png"})
    :
    this.setState({liked: false, heartImg: "https://i.imgur.com/j3BRC9r.png"})
  }

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

    fetch(GIPHY_URL)
    .then(res => res.json())
    .then(data => {
      // debugger
      console.log(data)
      this.setState({gifs: data})
    })
  }

  handleLike = (e) => {
    console.log("click!")
    this.state.liked ?
    this.deleteLike()
    :
    this.addLike()
  }

   addLike = () => {
    let currentHW = this.props.selectedHW.id
    let body = JSON.stringify({rating: 1, user_id: 1, housewife_id: currentHW})
    fetch(`https://realhousewives-backend.herokuapp.com/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        body: body
      })
        .then((response) => {return response.json()})
        .then((rating) => {
          console.log("add like", rating)
          this.setState({currentRatingId: rating.id, liked: true, heartImg: "https://i.imgur.com/AoMrC43.png"})
          this.postClick()})
    }

    deleteLike = () => {
     let currentHW = this.props.selectedHW.id
     // let currentUser = this.props.currentUserId
     fetch(`https://realhousewives-backend.herokuapp.com/ratings/${this.state.currentRatingId}`, {
       method: 'DELETE',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       }})
         .then((response) => {return response.json()})
         .then((rating) => {
          console.log("deleted", rating)
          this.setState({liked: false, heartImg: "https://i.imgur.com/j3BRC9r.png", currentRatingId: 0})
          this.postClick()})
     }

  render(){
    window.scrollTo(0,0); 

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
              })}</h8>
              <p id="heart"><img class="heartimg" onClick={this.handleLike}
              src={this.state.heartImg}></img><h8><em>{this.state.totalRatings} Likes</em></h8></p>
              <div id="showpagebuttons">Add to Favorites</div>

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
