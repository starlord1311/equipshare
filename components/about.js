import React, { Component } from 'react';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import featured from '../images/featured-img.jpg';
import ctaicon1 from '../images/icons/cta-icon-1.png';
import ctaicon2 from '../images/icons/cta-icon-2.png';
import ctaicon3 from '../images/icons/cta-icon-3.png';
import ctaicon4 from '../images/icons/cta-icon-4.png';
import about from '../images/about-img.png';
import footer from '../images/footer-logo.png';
import Nav from './nav.js';
import home from '../images/home-icon.png';

class About extends Component {
  render(){
    return(
      <div>
      <Nav />
        <div className="Featured-image">
          <div className="caption">
            <h2>About EquipShare</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <img src={featured} className="img-responsive" />
          <a href="#" className="back-top-home"><img src={home} className="img-responsive" /></a>
        </div>
        {/*-------------Featured-Image---------------*/}
        {/*-------------Content---------------*/}
        <div className="content">
          <div className="content-area">
            <div className="container">
              <div className="row about">
                <h3 className="head1">Who we are</h3>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <p className="para1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <p className="para2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-blurb">
            <div className="container about1">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <ul className="list-unstyled list-inline">
                    <li><img src={ctaicon1} className="img-responsive" /><a href="#">Connect - Share - Grow</a></li>
                    <li><img src={ctaicon2} className="img-responsive" /><a href="#">Aggregation and allocation</a></li>
                    <li><img src={ctaicon3} className="img-responsive" /><a href="#">GPS Tracking and Utilization</a></li>
                    <li><img src={ctaicon4} className="img-responsive" /><a href="#">Safety and operations</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <h3 className="about2">Our Story</h3>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
            </div>
          </div>
          <div className="bottom-graphics">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <h3 className="about3">Why its a big deal</h3>
                  <p className="about4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                  <h3 className="about3">What we offer</h3>
                  <p className="about4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about5">
                  <img src={about} className="img-responsive about6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-------------Content---------------*/}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <img src={footer} className="img-responsive" alt title />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                <div className="footer-nav">
                  <div className="menu-area">
                    <h4>Equipments</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">Popular</a></li>
                      <li><a href="#">Trending</a></li>
                      <li><a href="#">Catalog</a></li>
                      <li><a href="#">Features</a></li>
                    </ul>
                  </div>
                  <div className="menu-area">
                    <h4>Company</h4>
                    <ul className="list-unstyled">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="listing.html">Rentals</a></li>
                      <li><a href="solution.html">Solutions</a></li>
                      <li><a href="blog.html">Blog</a></li>
                    </ul>
                  </div>
                  <div className="menu-area">
                    <h4>Info</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">Rental Terms</a></li>
                      <li><a href="#">Disclaimer</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Tearms of Service</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-offset-0 col-lg-2 col-md-offset-0 col-md-2 col-sm-offset-1 col-sm-3 col-xs-offset-2 col-xs-8 minus-margin">
                <h4>Follow Us</h4>
                <ul className="list-inline list-unstyled footer-social-icon">
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
                </ul>
                <a href="#" className="contact-btn">Contact Us</a>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 copy-right"><p>©2018 EquipShare. All rights reserved</p></div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default About;
