import React, { Component } from "react";
import {
  BrowserRouter as Router, Switch,
  Route, Routes
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
          <Routes>
            <Route exact path="/addbox" element={<AddBox />} />
            <Route path="/listboxes" element={<ListBoxes />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
