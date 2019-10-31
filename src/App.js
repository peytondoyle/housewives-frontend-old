import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./containers/Homepage.js"
import IndexPage from "./containers/IndexPage.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/housewives">
            <IndexPage />
          </Route>
        </div>
      </Router>
  );
}

export default App;
