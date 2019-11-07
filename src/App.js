import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./containers/Homepage.js"
import IndexPage from "./containers/IndexPage.js"
import ShowPage from "./containers/ShowPage.js"
import Menu from "./containers/Menu.js"
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
        allHousewives: []
      }
  }

  componentDidMount(){
  fetch(HOUSEWIVES_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let sorted = data.sort(this.dynamicSort("firstname"))
    this.setState({allHousewives: sorted})
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
    let allHousewives = this.state.allHousewives
    let sorted = allHousewives.sort(this.dynamicSort("firstname"));
    console.log(sorted)
    this.setState({allHousewives: sorted})
  }

  filterCity = (e) => {
    let allHousewives = this.state.allHousewives
    let sorted = allHousewives.sort(this.dynamicSort("city"));
    console.log(sorted)
    this.setState({allHousewives: sorted})
  }

  filterTenure= (e) => {
    let allHousewives = this.state.allHousewives
    let sorted = allHousewives.sort(this.dynamicSort("seasons"));
    console.log(sorted)
    this.setState({allHousewives: sorted})
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
      routerProps={routerProps}/> :
      <Menu
      openMenu={this.openMenu}
      menu_on={this.state.menu_on}/>)
  }

  findHW = (routerProps) => {
    let housewifeId = parseInt(routerProps.match.params.id)
    let selectedHousewife = this.state.allHousewives.find(hw => hw.id === housewifeId)
    return <ShowPage selectedHW={selectedHousewife}
    openMenu={this.openMenu}
    menu_on={this.state.menu_on}/>}

  render(){
  	return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />

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
              />
            }
          </Route>

          {
            this.state.menu_on === false ?
            <Route path={`/housewives/:id`}
            render={this.findHW}
            openMenu={this.openMenu}
            menu_on={this.state.menu_on}/>
            :
            <Menu
            openMenu={this.openMenu}
            menu_on={this.state.menu_on}
            />
          }

          {
            this.state.menu_on === false ?
            <Route path="/housewives" render={this.indexOrMenu}
            openMenu={this.openMenu}
            menu_on={this.state.menu_on}/>
            :
            <Menu
            openMenu={this.openMenu}
            menu_on={this.state.menu_on}
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




