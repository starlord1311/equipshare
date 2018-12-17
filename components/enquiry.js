import React, { Component } from 'react';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import featured from '../images/featured-img.jpg';
import homeicon from '../images/home-icon.png';
import footer from '../images/footer-logo.png';
import Nav from './nav.js';


class Enquiry extends Component {
  render(){
    return(
      <div>
      <Nav />
        <div className="Featured-image">
          <div className="caption">
            <h2>Enquiry</h2>
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
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <h3>Vendors</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <h3>Customers</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-cta enquiry1">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                  <h2 className="enquiry2">Enquire Now</h2>
                </div>
                <div className="col-lg-offset-1 col-lg-8 col-md-offset-1 col-md-7 col-sm-offset-0 col-sm-12 col-xs-offset-0 col-xs-12">
                  <h4 className="enquiry3">Lorem ipsum dolor sit amet, cons</h4>
                  <p className="enquiry4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-enquiry-form enquiry5">
            <div className="container enquiry6">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <form className="overlay-form enquiry7">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 enquiry9">
                      <label className="label-container">Vender
                        <input type="radio" defaultChecked="checked" name="radio" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 enquiry9">
                      <label className="label-container">Customer
                        <input type="radio" defaultChecked="checked" name="radio" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 enquiry9">
                      <label className="label-container">Others
                        <input type="radio" defaultChecked="checked" name="radio" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 enquiry8">
                      <label className="enquiry10">Full name <span>*</span></label>
                      <input type="text" name placeholder="Enter your Full Name" className="enquiry11" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 enquiry8">
                      <label className="enquiry10">Email <span>*</span></label>
                      <input type="Email" name placeholder="Enter your Email Address" className="enquiry11" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 enquiry8">
                      <label className="enquiry10">Number <span>*</span></label>
                      <input type="text" name placeholder="Enter your Contact Number" className="enquiry11" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 enquiry8">
                      <label className="enquiry10">Company <span>*</span></label>
                      <input type="text" name placeholder="Enter your Company" className="enquiry11" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <label className="enquiry10">Enquiry <span>*</span></label>
                      <textarea className="enquiry12" placeholder="Your Enquiry" defaultValue={""} />
                    </div>
                    <button className="enquiry13" type="submit">Send</button>
                  </form>
                  <p>All Fields with <span>*</span> are mandatory</p>
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

export default Enquiry
