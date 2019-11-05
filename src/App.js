import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./containers/Homepage.js"
import IndexPage from "./containers/IndexPage.js"
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
    this.setState({allHousewives: data})
    })
  }

  openMenu = () => {
    {this.state.menu_on === false ?
      this.setState({menu_on: true}) :
      this.setState({menu_on: false})
    }
  }

  render(){
  	return (
      <Router>
        <div>
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
          <Route path="/housewives">
            {
              this.state.menu_on === false ?
            <IndexPage
              openMenu={this.openMenu}
              menu_on={this.state.menu_on}
              allHousewives={this.state.allHousewives}/>
              :
              <Menu
              openMenu={this.openMenu}
              menu_on={this.state.menu_on}
              />
            }
          </Route>
        </div>
      </Router>
  	);
  }

};

export default App;

// function App() {
//   return (
    // <Router>
    //     <div>
    //       <Route exact path="/" render={() => <Redirect to="/home" />} />
    //       <Route path="/home">
    //         <Menu />
    //         <Homepage />
    //       </Route>
    //       <Route path="/housewives">
    //         <Menu />
    //         <IndexPage />
    //       </Route>
    //     </div>
    //   </Router>
//   );
// }

// export default App;


