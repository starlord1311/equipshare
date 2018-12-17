import React, { Component } from 'react';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import Header from './header.js';
import Home from './home.js';
import logo from '../images/site-logo.png';
import './nav.css';
import Blog from './blog.js';


class Nav extends Component {
  render(){
    return(
      <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light navbar-default custom-upper-navbar">
      <a class="navbar-brand" href="#"><img src={logo} class="img-responsive" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">☰</button>
    <div className="collapse navbar-collapse custom-below-navbar" id="navbar-collapse">
        <ul className="nav navbar-nav ml-auto">
            <li className="nav-item nav-link nav1"><Link to="/" className="nav2">Home</Link></li>
            <li className="nav-item nav-link nav1">
            <Link to="/Rental" className="nav2">Rental</Link>
            </li>
            {/* <li className="nav-item nav-link"> <Link to="/#portfolio">Portfolio</Link>
            </li> */}
           <li className="nav-item nav-link nav1">
           <Link to ="/Solution" className="nav2"> Solution</Link>
            </li>
            {/* <li className="nav-item"> <a className="nav-link" href="#price">Prices</a>
            </li> */}
            <li className="nav-item nav-link nav1"><Link to ="/Blog" className="nav2">Blog</Link>
            </li>
            <li className="nav-item nav-link nav1"> <Link to ="/About" className="nav2">About Us</Link>
            </li>
            <li className="nav-item nav-link nav1"> <Link to ="/Career" className="nav2">Career</Link>
            </li>
            <li className="nav-item nav-link nav1"> <Link to ="/Enquiry" className="nav2">Enquiry</Link>
            </li>
            </ul>
        </div>
        </nav>
      </div>


    );
  }
}


export default Nav;
