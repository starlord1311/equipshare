import React, { Component } from 'react';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import homepro3 from '../images/home-pro-3.jpg';
import homepro4 from '../images/home-pro-4.jpg';
import homepro2 from '../images/home-pro-2.jpg';
import footer from '../images/footer-logo.png';
import featured from '../images/featured-img.jpg';
import homeicon from '../images/home-icon.png';
import Nav from './nav.js';


class Rental extends Component {
  render(){
    return(
      <div>
             <div className="Featured-image">
             <Nav />
               <div className="caption">
                 <h2>Equipments</h2>
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
                   <div className="row search-form rental10">
                     <h3 className="abc">Equipments</h3>
                     <div className="col-left">
                       <form method="get" action>
                         <div className="col">
                           <label className="label1">Category</label>
                           <select className="rental rental1">
                             <option>Select Category</option>
                             <option>Select Category</option>
                             <option>Select Category</option>
                             <option>Select Category</option>
                           </select>
                         </div>
                         <div className="col">
                           <label className="label2">Sort by</label>
                           <select className="rental rental2">
                             <option>Price - Low to High</option>
                             <option>Price - Low to High</option>
                             <option>Price - Low to High</option>
                             <option>Price - Low to High</option>
                           </select>
                         </div>
                       </form>
                     </div>
                     <div className="col-right">
                       <div className="input-group">
                         <input type="text" className="form-control" placeholder="Search Machine" />
                         <span className="input-group-btn">
                           <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="true" />
                           </button>
                         </span>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="container">
                   <div className="row">
                     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       <div className="featured-mach">
                         <ul className="list-unstyled list-inline">
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro3} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro2} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro3} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro4} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                         </ul>
                         <ul className="list-unstyled list-inline">
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro3} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro2} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro3} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro4} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                         </ul>
                         <ul className="list-unstyled list-inline">
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro3} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro2} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro3} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro4} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                         </ul>
                         <ul className="list-unstyled list-inline">
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro3} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro2} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro3} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                           <li>
                             <div className="mach-img" />
                             <div className="desc">
                               <img src={homepro4} className="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
                               <h4>Concrete Mixer</h4>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               <span className="price"><i className="fa fa-inr" aria-hidden="true" />52304.00</span>
                               <a href="#" className="more">More Info</a>
                             </div></li>
                         </ul>
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
           </div>

         );
       }
     }

export default Rental;
