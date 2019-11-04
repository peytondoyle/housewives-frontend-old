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

class App extends React.Component {

  constructor(){
    super()
      this.state={
        menu_on: false,
        index_on: false
      }
  }

  openMenu = () => {
    {this.state.menu_on === false ?
      this.setState({menu_on: true}) :
      this.setState({menu_on: false})
    }
  }

  openIndex = () => {
    {this.state.index_on === false ?
      this.setState({index_on: true}) :
      this.setState({index_on: false})
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
              openIndex={this.openIndex}
              index_on={this.state.index_on}/>
            }
          </Route>
          <Route path="/housewives">
            {
              this.state.menu_on === false ?
            <IndexPage
              openMenu={this.openMenu}
              menu_on={this.state.menu_on}/>
              :
              <Menu
              openMenu={this.openMenu}
              menu_on={this.state.menu_on}
              openIndex={this.openIndex}
              index_on={this.state.index_on}/>
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


