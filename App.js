
import React, { Component } from 'react';
import './App.css';
import {Route, Navlink, HashRouter} from 'react-router-dom';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Home from './components/home.js';
import Rental from './components/rental.js';
import Solution from './components/solution.js';
import Blog from './components/blog.js';
import About from './components/about.js';
import Career from './components/career.js';
import Enquiry from './components/enquiry.js';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component = {Home}/>
      <Route path="/Home" component = {Home}/>
      <Route path="/Blog" component = {Blog}/>
      <Route path="/Rental" component = {Rental}/>
      <Route path="/Solution" component = {Solution}/>
      <Route path="/About" component = {About}/>
      <Route path="/Career" component = {Career}/>
      <Route path="/Enquiry" component = {Enquiry}/>
      </div>
    );
  }
}

export default App;
