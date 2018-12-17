import React, { Component } from 'react';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import featured from '../images/featured-img.jpg';
import homeicon from '../images/home-icon.png';
import demo1 from '../images/demo-1.jpg';
import demo2 from '../images/demo-2.jpg';
import banner from '../images/banner-bg-blue.jpg';
import detailpage from '../images/detail-page-img.jpg';
import demo3 from '../images/demo-3.jpg';
import about from '../images/about-img.png';
import footer from '../images/footer-logo.png';
import Nav from './nav.js';

class Solution extends Component {
  render(){
    return(
      <div>
      <Nav />
  <div className="Featured-image">
    <div className="caption">
      <h2>Solutions</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <img src={featured} className="img-responsive" />
    <a href="#" className="back-top-home"><img src={homeicon} className="img-responsive" /></a>
  </div>
  {/*-------------Featured-Image---------------*/}
  {/*-------------Content---------------*/}
  <div className="content">
    <div className="content-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <a href="#" data-toggle="modal" data-target="#model-1">
              <img src={demo1} className="img-responsive" />
              <h3>Equip Share (P2P)</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
            </a>
          </div>
          {/*---------------*/}
          <div className="modal fade" id="model-1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src={banner} className="img-responsive banner" />
                </div>
              </div>
            </div>
          </div>
          {/*---------------*/}
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <a href="#" data-toggle="modal" data-target="#model-2">
              <img src={demo2} className="img-responsive" />
              <h3>Equip Track</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
            </a>
          </div>
          {/*---------------*/}
          <div className="modal fade " id="model-2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src={detailpage} className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
          {/*---------------*/}
          <div className="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-0 col-xs-12">
            <a href="/" data-toggle="modal" data-target="#model-3">
              <img src={demo3} className="img-responsive" />
              <h3>Equip Maintain</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
            </a>
          </div>
          {/*---------------*/}
          <div className="modal fade" id="model-3" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src={about} className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
          {/*---------------*/}
        </div>
      </div>
    </div>
    <div className="blue-graphics">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <img src={banner} className="img-responsive banner2" />
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

export default Solution;
