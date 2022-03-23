import React, { Component } from "react";
import {
  BrowserRouter as Router, Switch,
  Route,
} from "react-router-dom";
import AddBox from './components/addbox/addbox'
import ListBoxes from './components/list/listboxes'
import Navbar from './components/navbar/navbar'
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <AddBox />
            </Route>
            <Route exact path="/addbox">
              <AddBox />
            </Route>
            <Route exact path="/listboxes">
              <ListBoxes />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
