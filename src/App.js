import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./containers/Homepage.js"
import IndexPage from "./containers/IndexPage.js"
import ShowPage from "./containers/ShowPage.js"
import Menu from "./containers/Menu.js"
import LoginPage from "./components/LoginPage.js"
import ProfilePage from "./containers/ProfilePage.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

let HOUSEWIVES_URL = "https://realhousewives-backend.herokuapp.com/housewives"

class App extends React.Component {

  constructor(){
    super()
      this.state={
        menu_on: false,
        allHousewives: [],
        reverse: false,
        cityButton: "▲ City",
        tenureButton: "▲ Tenure",
        ratingButton: "▲ Rating",
        nameButton: "▲ Name",
        hwRatings: [],
      }
  }

  componentDidMount(){
  fetch(HOUSEWIVES_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let sorted = data.sort(this.dynamicSort("firstname"))
    this.setState({allHousewives: sorted, allHousewivesProtected: sorted})
    })
  }

  dynamicSort = (property) => {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }
    }
}

  filterName = (e) => {
    if (this.state.reverse) {
      let allHousewives = this.state.allHousewives
      let sorted = allHousewives.sort(this.dynamicSort("firstname"));
      console.log(sorted)
      this.setState({allHousewives: sorted, reverse: false, nameButton: "▲ Name"})
    } else {
      let allHousewives = this.state.allHousewives
      let sorted = allHousewives.sort(this.dynamicSort("-firstname"));
      console.log(sorted)
      this.setState({allHousewives: sorted, reverse: true, nameButton: "▼ Name"})
    }
  }

  filterCity = (e) => {
    if (this.state.reverse) {
      let allHousewives = this.state.allHousewives
      let sorted = allHousewives.sort(this.dynamicSort("-city"));
      console.log(sorted)
      this.setState({allHousewives: sorted, reverse: false, cityButton: "▼ City"})
    } else {
      let allHousewives = this.state.allHousewives
      let sorted = allHousewives.sort(this.dynamicSort("city"));
      console.log(sorted)
      this.setState({allHousewives: sorted, reverse: true, cityButton: "▲ City"})
    }
  }

  filterTenure = (e) => {
    if (this.state.reverse) {
      let allHousewives = this.state.allHousewives
      let sorted = allHousewives.sort(function(a, b) {
        return b.totalseasons - a.totalseasons;
      });
      console.log(sorted)
      this.setState({allHousewives: sorted, reverse: false, tenureButton: "▼ Tenure"});
    } else {
      let allHousewives = this.state.allHousewives
      let sorted = allHousewives.sort(function(a, b) {
        return a.totalseasons - b.totalseasons;
      });
      console.log(sorted)
      this.setState({allHousewives: sorted, reverse: true, tenureButton: "▲ Tenure"})
    }
  }

  resetIndex = (e) => {
    let allHousewives = this.state.allHousewives
    let sorted = allHousewives.sort(this.dynamicSort("firstname"));
    console.log(sorted)
    this.setState({allHousewives: sorted, reverse: false, nameButton: "▲ Name", tenureButton: "▲ Tenure", cityButton: "▲ City"})
  }

  // citySort = (hw) => {
  //   if (hw.city === "Atlanta") {
  //     return hw.city === "Atlanta";
  //   }
    // else if (hw.city === "Beverly Hills") {
    //   return hw.city === "Beverly Hills";
    // }
    // else if (hw.city === "Orange County") {
    //   return hw.city === "Orange County";
    // }
  // }

  // settingCityHW = () => {
  //   let allHousewives = this.state.allHousewives
  //   this.setState(this.initialState)
  //   let cityHW = allHousewives.filter(this.citySort)
  //   console.log(cityHW)
  //   this.setState({allHousewives: cityHW, menu_on: false})
  // }

  settingCityATL = () => {
    let allHousewives = this.state.allHousewivesProtected
    let cityHW = allHousewives.filter(function(hw){
      return hw.city === "Atlanta"})
    this.setState({allHousewives: cityHW, menu_on: false})}

  settingCityBH = () => {
    let allHousewives = this.state.allHousewivesProtected
    let cityHW = allHousewives.filter(function(hw){
      return hw.city === "Beverly Hills"})
    this.setState({allHousewives: cityHW, menu_on: false})}

  settingCityD = () => {
    let allHousewives = this.state.allHousewivesProtected
    let cityHW = allHousewives.filter(function(hw){
      return hw.city === "Dallas"})
    this.setState({allHousewives: cityHW, menu_on: false})}

  settingCityDC = () => {
    let allHousewives = this.state.allHousewivesProtected
    let cityHW = allHousewives.filter(function(hw){
      return hw.city === "Washington, D.C."})
    this.setState({allHousewives: cityHW, menu_on: false})}

  settingCityM = () => {
    let allHousewives = this.state.allHousewivesProtected
    let cityHW = allHousewives.filter(function(hw){
      return hw.city === "Miami"})
    this.setState({allHousewives: cityHW, menu_on: false})}

  settingCityNJ = () => {
    let allHousewives = this.state.allHousewivesProtected
    let cityHW = allHousewives.filter(function(hw){
      return hw.city === "New Jersey"})
    this.setState({allHousewives: cityHW, menu_on: false})}

  settingCityNY = () => {
    let allHousewives = this.state.allHousewivesProtected
    let cityHW = allHousewives.filter(function(hw){
      return hw.city === "New York"})
    this.setState({allHousewives: cityHW, menu_on: false})}

  settingCityOC = () => {
    let allHousewives = this.state.allHousewivesProtected
    let cityHW = allHousewives.filter(function(hw){
      return hw.city === "Orange County"})
    this.setState({allHousewives: cityHW, menu_on: false})}

  settingCityP = () => {
    let allHousewives = this.state.allHousewivesProtected
    let cityHW = allHousewives.filter(function(hw){
      return hw.city === "Potomac"})
    this.setState({allHousewives: cityHW, menu_on: false})}

    setRatings = (data) => {
      this.setState({hwRatings: data})
    }

  openMenu = () => {
    {this.state.menu_on === false ?
      this.setState({menu_on: true}) :
      this.setState({menu_on: false})
    }
  }

  indexOrMenu = (routerProps) => {
    return (this.state.menu_on === false ?
      <IndexPage
      openMenu={this.openMenu}
      menu_on={this.state.menu_on}
      allHousewives={this.state.allHousewives}
      filterName={this.filterName}
      filterCity={this.filterCity}
      filterTenure={this.filterTenure}
      routerProps={routerProps}
      cityButton={this.state.cityButton}
      nameButton={this.state.nameButton}
      ratingButton={this.state.ratingButton}
      tenureButton={this.state.tenureButton}
      resetIndex={this.resetIndex}/> :
      <Menu
      openMenu={this.openMenu}
      menu_on={this.state.menu_on}
      settingCityATL={this.settingCityATL}
      settingCityBH={this.settingCityBH}
      settingCityD={this.settingCityD}
      settingCityDC={this.settingCityDC}
      settingCityM={this.settingCityM}
      settingCityNJ={this.settingCityNJ}
      settingCityNY={this.settingCityNY}
      settingCityOC={this.settingCityOC}
      settingCityP={this.settingCityP}
      />)
  }

  findHW = (routerProps) => {
    let housewifeId = parseInt(routerProps.match.params.id)
    let selectedHousewife = this.state.allHousewives.find(hw => hw.id === housewifeId)
    return <ShowPage selectedHW={selectedHousewife}
    openMenu={this.openMenu}
    menu_on={this.state.menu_on}
    />}



  render(){



  	return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />

          <Route exact path="/login">
            {
              this.state.menu_on === false ?
              <LoginPage
              openMenu={this.openMenu}
              menu_on={this.state.menu_on}/>
              :
              <Menu
              openMenu={this.openMenu}
              menu_on={this.state.menu_on}
              settingCityATL={this.settingCityATL}
              settingCityBH={this.settingCityBH}
              settingCityD={this.settingCityD}
              settingCityDC={this.settingCityDC}
              settingCityM={this.settingCityM}
              settingCityNJ={this.settingCityNJ}
              settingCityNY={this.settingCityNY}
              settingCityOC={this.settingCityOC}
              settingCityP={this.settingCityP}
              routerProps
              />
            }
          </Route>

          <Route exact path="/profile">
            {
              this.state.menu_on === false ?
              <ProfilePage
              openMenu={this.openMenu}
              menu_on={this.state.menu_on}/>
              :
              <Menu
              openMenu={this.openMenu}
              menu_on={this.state.menu_on}
              settingCityATL={this.settingCityATL}
              settingCityBH={this.settingCityBH}
              settingCityD={this.settingCityD}
              settingCityDC={this.settingCityDC}
              settingCityM={this.settingCityM}
              settingCityNJ={this.settingCityNJ}
              settingCityNY={this.settingCityNY}
              settingCityOC={this.settingCityOC}
              settingCityP={this.settingCityP}
              routerProps
              />
            }
          </Route>

          <Route path="/home">
            {
              this.state.menu_on === false ?
              <Homepage
              openMenu={this.openMenu}
              menu_on={this.state.menu_on}/>
              :
              <Menu
              openMenu={this.openMenu}
              menu_on={this.state.menu_on}
              settingCityATL={this.settingCityATL}
              settingCityBH={this.settingCityBH}
              settingCityD={this.settingCityD}
              settingCityDC={this.settingCityDC}
              settingCityM={this.settingCityM}
              settingCityNJ={this.settingCityNJ}
              settingCityNY={this.settingCityNY}
              settingCityOC={this.settingCityOC}
              settingCityP={this.settingCityP}
              routerProps
              />
            }
          </Route>

          {
            this.state.menu_on === false ?
            <Route path={`/housewives/:id`}
            render={this.findHW}
            openMenu={this.openMenu}
            />
            :
            <Menu
            openMenu={this.openMenu}
            menu_on={this.state.menu_on}
            settingCityATL={this.settingCityATL}
            settingCityBH={this.settingCityBH}
            settingCityD={this.settingCityD}
            settingCityDC={this.settingCityDC}
            settingCityM={this.settingCityM}
            settingCityNJ={this.settingCityNJ}
            settingCityNY={this.settingCityNY}
            settingCityOC={this.settingCityOC}
            settingCityP={this.settingCityP}
            />
          }

          {
            this.state.menu_on === false ?
            <Route path="/housewives" render={this.indexOrMenu}
            openMenu={this.openMenu}
            menu_on={this.state.menu_on}
            />
            :
            <Menu
            openMenu={this.openMenu}
            menu_on={this.state.menu_on}
            settingCityATL={this.settingCityATL}
            settingCityBH={this.settingCityBH}
            settingCityD={this.settingCityD}
            settingCityDC={this.settingCityDC}
            settingCityM={this.settingCityM}
            settingCityNJ={this.settingCityNJ}
            settingCityNY={this.settingCityNY}
            settingCityOC={this.settingCityOC}
            settingCityP={this.settingCityP}
            />
          }
        </Switch>
        </div>
      </Router>
  	);
  }

};

export default App;


// <Router>
//   <div>
//     <Route exact path="/" render={() => <Redirect to="/home" />} />
//     <Route path="/home">
      // {
      //   this.state.menu_on === false ?
      //   <Homepage
      //   openMenu={this.openMenu}
      //   menu_on={this.state.menu_on}/>
      //   :
      //   <Menu
      //   openMenu={this.openMenu}
      //   menu_on={this.state.menu_on}
      //   />
      // }
//     </Route>
//     <Switch>
//     <Route path={`/housewives/:id`}
//     render={this.findHW}
//     openMenu={this.openMenu}
//     menu_on={this.state.menu_on}/>
//
//     <Route path="/housewives" render={this.indexOrMenu}
//     openMenu={this.openMenu}
//     menu_on={this.state.menu_on}/>
//     </Switch>
//   </div>
// </Router>



