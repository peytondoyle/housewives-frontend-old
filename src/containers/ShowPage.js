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
import Popover from '@material-ui/core/Popover';
import LinearProgress from '@material-ui/core/LinearProgress';

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

class ShowPage extends React.Component {

  // getData(){
  //   setTimeout(() => {
  //     console.log('Our data is fetched');
  //     this.makeGif();
  //     this.pullingLikes();
  //     this.pullingFavs();
  //   }, 50)
  // }

  constructor(){
    super()
      this.state={
        gifs: null,
        favoriteText: "Add to Favorites",
        userHasFavs: [],
        userHasRating: [],
        loading: true,
        commentText: null
      }
  }

  componentDidMount(){
    // this.getData();
    this.makeGif();
    this.pullingLikes();
    this.pullingFavs();
    this.pullingComments();
  }

  pullingLikes = () => {
    let HWRATING_URL = `https://realhousewives-backend.herokuapp.com/housewives/${this.props.selectedHW.id}/ratings`
    fetch(HWRATING_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.state.currentUser ?
      this.pullingUserLikes(data)
      :
      this.noUserLikes(data)
  })}

  pullingFavs = () => {
    let HWFAVS_URL = `https://realhousewives-backend.herokuapp.com/housewives/${this.props.selectedHW.id}/favorites`
    fetch(HWFAVS_URL)
    .then(res => res.json())
    .then(data => {
      this.props.currentUser ?
      this.pullingUserFavs(data)
      :
      this.noUserFavs(data)
  })}

  pullingComments = () => {
    let HWCOMMENT_URL = `https://realhousewives-backend.herokuapp.com/housewives/${this.props.selectedHW.id}/comments`
    fetch(HWCOMMENT_URL)
    .then(res => res.json())
    .then(data => {
      this.state.currentUser ?
      this.pullingUserComments(data)
      :
      this.noUserComments(data)
  })}

  pullingUserComments = (data) => {
    let totalComments = data
    let totalCommentsLength = totalComments.length
    let userHasComments = data.some(comment => comment.user_id === this.props.currentUser.id)
    if (userHasComments) {
      let usersComments = data.filter(comment => comment["user_id"])
      this.setState({userComments: usersComments, totalComments: totalComments, commented: this.trueorFalse(totalCommentsLength), currentCommentId: usersComments[0].id})
      this.setComments();
    }
    else {
      this.setState({userComments: [], totalComments: totalComments, commented: this.trueorFalse(totalCommentsLength), currentCommentId: 0})
      this.setComments();
    }
  }

  noUserComments = (data) => {
    let totalComments = data
    let totalCommentsLength = totalComments.length
    this.setState({userComments: [], totalComments: totalComments, commented: this.trueorFalse(totalCommentsLength), currentCommentId: 0})
    this.setComments();
  }

  trueorFalse = (totalCommentsLength) => {
    if (totalCommentsLength === 0){
      return false
    } else {
      return true
    }
  }

  noUserFavs = (data) => {
    let totalFavs = data.length
    this.setState({hwFavs: [], totalFavs: totalFavs, favorited: false, currentFavId: 0})
    this.setFav();
  }

  pullingUserFavs = (data) => {
    let totalFavs = data.length
    let userHasFavs = data.some(fav => fav.user_id === this.props.currentUser.id)
    if (userHasFavs) {
      let usersFavs = data.filter(fav => fav["user_id"])
      this.setState({hwFavs: userHasFavs, totalFavs: totalFavs, favorited: true, currentFavId: usersFavs[0].id})
      this.setFav();
    }
    else {
      this.setState({hwFavs: [], totalFavs: totalFavs, favorited: false, currentFavId: 0})
      this.setFav();
    }
  }

  noUserLikes = (data) => {
    let totalRatings = data.length
    this.setState({hwRatings: [], totalRatings: totalRatings, liked: false, currentRatingId: 0})
    this.setHearts();
  }

  pullingUserLikes = (data) => {
    let totalRatings = data.length
    let userHasRating = data.some(rating => rating.user_id === this.props.currentUser.id)
    if (userHasRating) {
      let usersRatings = data.filter(rating => rating["user_id"])
      this.setState({hwRatings: userHasRating, totalRatings: totalRatings, liked: true, currentRatingId: usersRatings[0].id})
      this.setHearts();
    }
    else {
      this.setState({hwRatings: [], totalRatings: totalRatings, liked: false, currentRatingId: 0})
      this.setHearts();
    }
  }

  // pullingFavs = () => {
  //   let HWFAVS_URL = `https://realhousewives-backend.herokuapp.com/housewives/${this.props.selectedHW.id}/favorites`
  //   fetch(HWFAVS_URL)
  //   .then(res => res.json())
  //   .then(data => {
  //     let totalFavs = data.length
  //     // debugger
  //     if (this.props.currentUser && totalFavs.length === 0) {
  //       console.log("first")
  //       this.setState({favorited: false, currentFavId: 0, totalFavs: totalFavs})
  //     }
  //     else if (this.props.currentUser && totalFavs.length > 0) {
  //       let userHasFavs = data.filter(fav => fav["user_id"] === this.props.currentUser.id)
  //       console.log("second")
  //       this.setState({hwFavs: userHasFavs, totalFavs: totalFavs, favorited: true, currentFavId: userHasFavs[0].id})
  //     } else {
  //       console.log("third")
  //       this.setState({favorited: false, currentFavId: 0, totalFavs: totalFavs})
  //     }
  //     this.setFav()
  //     }
  //   )}

    setFav = () => {
      this.state.favorited ?
      this.setState({favoriteText: "Remove from Favorites", loading: false})
      :
      this.setState({favoriteText: "Add to Favorites", loading: false})
    }


    postClick = () => {
      let HWRATING_URL = `https://realhousewives-backend.herokuapp.com/housewives/${this.props.selectedHW.id}/ratings`
      fetch(HWRATING_URL)
      .then(res => res.json())
      .then(data => {
        let hwRatings = data.length
        this.setState({totalRatings: hwRatings})
      })}



  setHearts = () => {
    this.state.liked ?
    this.setState({heartImg: "https://i.imgur.com/AoMrC43.png"})
    :
    this.setState({heartImg: "https://i.imgur.com/j3BRC9r.png"})
  }

  setComments = () => {
    this.state.commented ?
    console.log()
    :
    this.setState({commentText: "There are no comments for this housewife yet!"})
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

  userLoggedIn = (e) => {
    return this.props.currentUser ?
    this.handleLike(e)
    :
    this.mustLogIn()}

  mustLogIn = () => {
    window.alert("You must log in to do that!");
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
    let currentUser = this.props.currentUser
    let body = JSON.stringify({rating: 1, user_id: currentUser.id, housewife_id: currentHW})
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

     userLoggedInFav = (e) => {
       return this.props.currentUser ?
       this.handleFav(e)
       :
       this.mustLogIn()
     }

     handleFav = (e) => {
       console.log("click!")
       this.state.favorited ?
       this.deleteFav()
       :
       this.addFav()
     }

     addFav = () => {
      let currentHW = this.props.selectedHW.id
      let currentUser = this.props.currentUser
      let body = JSON.stringify({housewife_id: currentHW, user_id: currentUser.id})
      fetch(`https://realhousewives-backend.herokuapp.com/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
          body: body
        })
          .then((response) => {return response.json()})
          .then((fav) => {
            console.log("add fav", fav)
            this.setState({currentFavId: fav.id, favorited: true, favoriteText: "Remove from Favorites"})
            // this.setState({currentRatingId: rating.id, liked: true, heartImg: "https://i.imgur.com/AoMrC43.png"})
            // this.postClick()})
      })}


      deleteFav = () => {
       // let currentHW = this.props.selectedHW.id
       fetch(`https://realhousewives-backend.herokuapp.com/favorites/${this.state.currentFavId}`, {
         method: 'DELETE',
         headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         }})
           .then((response) => {return response.json()})
           .then((fav) => {
            console.log("deleted", fav)
            this.setState({favorited: false, favoriteText: "Add to Favorites"})
            // this.setState({currentFavId: 0, favorited: false, favoriteText: "Add to Favorites"})
            // this.setState({liked: false, heartImg: "https://i.imgur.com/j3BRC9r.png", currentRatingId: 0})
            // this.postClick()})
       })}

       mustLogIn = () => {
         window.alert("You must log in to do that!");
       }

       userLoggedInComments = (e) => {
         return this.props.currentUser ?
         this.handleComment(e)
         :
         this.mustLogIn()}

       handleComment = (e) => {
         let comment = e.target.parentNode.children[14].children[0].value
         console.log(comment)
         let currentHW = this.props.selectedHW.id
         let currentUser = this.props.currentUser
         let body = JSON.stringify({comment: comment, housewife_id: currentHW, user_id: currentUser.id})
         fetch(`https://realhousewives-backend.herokuapp.com/comments`, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
           },
             body: body
           })
         .then((response) => {return response.json()})
         .then((rating) => {
           console.log("add comment", comment)
           // this.setState({currentRatingId: rating.id, liked: true, heartImg: "https://i.imgur.com/AoMrC43.png"})
           // this.postClick()})
         }
         )
         }

       whichIcon = () => {
        if (this.props.selectedHW.city === "New York") {
           return "https://i.imgur.com/Fe6oDit.png"}
        else if (this.props.selectedHW.city === "Washington, D.C.") {
          return "https://i.imgur.com/t47rPp4.png"}
        else if (this.props.selectedHW.city === "Potomac") {
         return "https://i.imgur.com/NyxfHUl.png"}
        else if (this.props.selectedHW.city === "Dallas") {
          return "https://i.imgur.com/k93uudK.png"}
        else if (this.props.selectedHW.city === "Beverly Hills") {
          return "https://i.imgur.com/Sg3vdJF.png"}
        else if (this.props.selectedHW.city === "Miami") {
          return "https://i.imgur.com/AAn5O8B.png"}
        else if (this.props.selectedHW.city === "New Jersey") {
          return "https://i.imgur.com/mSOugIu.png"}
        else if (this.props.selectedHW.city === "Orange County") {
          return "https://i.imgur.com/3Xnqu2H.png"}
        else if (this.props.selectedHW.city === "Atlanta") {
          return "https://i.imgur.com/zs4c8AZ.png"}
       }

   startComments = () => {
     return this.state.totalComments.map(comment =>
     {return <><div id="commentdiv"><div class="imgDes"><img src={comment.user.image} id="commentthumbnail"></img></div><div><h10>{comment.comment}</h10><p id="comments">{comment.user.username}</p></div></div></>})
   }

  render(){
    window.scrollTo(0,0);

    const {classes} = this.props;

  	return (
      this.state.loading ?

      <LinearProgress color="secondary" />
      :
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
            <Paper className={classes.paper} style={{textAlign: "left", paddingTop: "17vw"}}>
            <div id="housewifetitle">
              <img src={this.whichIcon()} id="hwicon"></img>
              <h2 id="title">{this.props.selectedHW.firstname}</h2>
            </div>

            <div id="housewifesubtitle">
              <h8><em>Real Housewives of {this.props.selectedHW.city}</em><br></br>
              {this.props.selectedHW.firstname} {this.props.selectedHW.lastname} is {this.props.selectedHW.current ? "a current housewife." : "not a current housewife."}<br></br>
              Seasons as an active housewife:            {this.props.selectedHW.seasons.map(function(item) {
                return <div className="item">{item}</div>;
              })}</h8>
              <p id="heart"><img class="heartimg" onClick={this.userLoggedIn}
              src={this.state.heartImg}></img><h8><em>{this.state.totalRatings} Likes</em></h8></p>
              <div id="showpagebuttons" onClick={this.userLoggedInFav}>{this.state.favoriteText}</div>

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
            <div id="housewifeinfo">
              <div id="housewifeinfotitle"><span>Taglines</span></div>

              {this.props.selectedHW.taglines.map(tagline =>
              {return <div><h8>Season {tagline.season}</h8> <p id="taglines">{tagline.tagline}</p></div>})}



            <div id="housewifeinfotitle"><span>GIFs</span></div>
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

            <div id="housewifeinfotitle"><span>Comments</span></div>
            <p id="taglines">{this.state.commentText}</p>

            {this.state.totalComments ?
              this.startComments()
              :
              null
            }




            <div class="block">
              <input type="text" class="comment" placeholder="leave a comment" id="input" maxlength="55"></input>
            </div>
            <button type="button" class="btn-sample" id="commentsubmit"
            onClick={this.userLoggedInComments}>Submit</button>
            </div>
            </div>
          </Paper>
        </Grid>

        <Grid item xs>
        </Grid>
      </Grid>

      </div>


  	);
  }

};

ShowPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowPage);
