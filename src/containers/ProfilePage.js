import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { spacing } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FavoriteCard from "../components/ProfilePage/FavoriteCard.js"


const styles = theme => ({
  root: {
    flexGrow: 0,
    border: 0,
    boxShadow: 'none'
  },
  paper: {
    textAlign: 'center',
    border: 0,
    boxShadow: 'none',
    maxWidth: 'fixed',
    alignItems: "flex-start",
    justifyItems: 'flex-end'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)'
  }
});






class ProfilePage extends React.Component {



  constructor(){
    super()
      this.state={
        favsByUser: []
      }
  }

  dateSince = () => {
    var a = new Date(this.props.currentUser.created_at);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = month + ' ' + date + ',' + ' ' + year;
    return time;
  }

  pullingFavs = () => {
    let HWFAVS_URL = `https://realhousewives-backend.herokuapp.com/users/${this.props.currentUser.id}/favorites`
    fetch(HWFAVS_URL)
    .then(res => res.json())
    .then(data => {
      this.setState({favsByUser: data})
  })}

  // settingFavs = (data) => {
  //   if(data.length > 0) {
  //   return "You have some favorites!"
  //   }
  //   else{
  //
  //   }
  // }

  componentDidMount(){
    this.pullingFavs();
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
            <h1 id="title">My Profile</h1>
          </div>
          <hr></hr>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={9}>
        <Paper className={classes.paper} style={{textAlign: "right"}}>
              <div id="profilepic">
                <img src={this.props.currentUser.image} id="headshot"></img>
              </div>
              <div>
              <h8>{this.props.currentUser.username}</h8>
              <p id="bio">Member since: {this.dateSince()}
              <br></br>
              Favorite city: {this.props.currentUser.favcity}</p>
              </div>

        </Paper>
        </Grid>
      </Grid>

      <div style={{ width: '71%', alignItems:"center"}} class="filterwrapper">
        <Box display="flex" p={1} style={{margin: '-1.3vw'}}>
        <Grid container spacing={3}>
          {this.state.favsByUser.map(housewife => <FavoriteCard
            housewife={housewife.housewife}
            openMenu={this.props.openMenu}
            menu_on={this.props.menu_on}/>)}
        </Grid>
        </Box>
      </div>










      </div>


  	);
  }

};

export default withStyles(styles)(ProfilePage);
