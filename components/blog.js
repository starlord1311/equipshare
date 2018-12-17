import React, { Component } from 'react';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import blogdemo1 from '../images/blog-demo-1.jpg';
import blogdemo2 from '../images/blog-demo-2.jpg';
import blogdemo3 from '../images/blog-demo-3.jpg';
import eye from '../images/eye.png';
import homeblog1 from '../images/home-blog-1.jpg';
import homeblog3 from '../images/home-blog-3.jpg';
import footer from '../images/footer-logo.png';
import sitelogo from '../images/site-logo.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Nav from './nav.js';


class Blog extends Component {
  render(){
    return(


<div className="blog0">
        {/*-------------Header---------------*/}
        <header>
          {/*-------Navigation-Bar----------*/}
          <div className="site-navigation blog1">
            <div className="container blog2">
              <div className="row blog3">
                <div className="col-lg-4 col-md-4 col-sm-8 col-xs-10">
                  {/*<nav class="navbar" role="navigation">
</nav> */}
                  <a className href="#"><img src={sitelogo} className="img-responsive logo" /></a>
                </div>
                <div className="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-0 col-sm-4 col-xs-offset-0 col-xs-2 blog4">
                  <Link to="/Home" className="btoh-btn blog5" >Back To Home</Link>
                </div>
              </div>
            </div>
          </div>
          {/*-------Navigation-Bar----------*/}
        </header>
        {/*-------------Header---------------*/}
        {/*-------------Featured-Image---------------*/}
        {/*-------------Featured-Image---------------*/}
        {/*-------------Content---------------*/}
        <div className="content blog6">
          <div className="container blog7">
            <div className="row blog8">
              <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 blog9">
                <main>
                  <div className="bolg-slide blog22">
                    <div className="single-item blog23">
                    <Carousel showArrows={true} infiniteLoop={true} showIndicators={false} showThumbs={false} dynamicHeight={true}>
                      <div>
                        <img src={blogdemo1} />
                      </div>
                      <div>
                        <img src={blogdemo2} />
                      </div>
                      <div>
                        <img src={blogdemo3} />
                      </div>
                      </Carousel>
                    </div>
                    <div className="blog-post blog24">
                      <h4 className="blog25"><a className="blog26" href="#">Sport Stadium Birdview</a></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias.</p>
                      <div className="post-detail blog27">
                        <span className="date blog28">
                          <i className="fa fa-clock-o" aria-hidden="true" /> 1 june 2015
                        </span>
                        <span className="view blog29">
                          <img src={eye} className="view-icon blog30" />343
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-tags blog31">
                    <a href="#" className="blog32">Construction &amp; Management</a><a className="blog32" href="#">Civil Engineers, Architects &amp; Infrastructure</a><a className="blog32" href="#">Operations &amp; Finance</a><a className="blog32" href="#">Construction Equipments</a><a className="blog32" href="#">Technology</a><a className="blog32" href="#">Sustainability</a>
                  </div>
                  <div className="blog-stories blog33">
                    <h3 className="title-heading blog34">Top Stories</h3>
                    <ul className="list-inline list-unstyled blog35">
                      <li className="blog36">
                        <div className="post-img blog37">
                          <img src={homeblog1} className="img-responsive blog38" />
                        </div>
                        <div className="post-content blog39">
                          <h4 className="blog40"><a href="#" className="blog41">The number of protons</a></h4>
                          <div className="post-detail blog27">
                            <span className="date blog28">
                              <i className="fa fa-clock-o" aria-hidden="true" /> 1 june 2015
                            </span>
                            <span className="view blog29">
                              <img src={eye} className="view-icon blog30" />343
                            </span>
                          </div>
                          <p className="blog42">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.</p>
                        </div>
                      </li>
                      <li className="blog36">
                        <div className="post-img blog37">
                          <img src={homeblog1} className="img-responsive blog38" />
                        </div>
                        <div className="post-content blog39">
                          <h4 className="blog40"><a href="#" className="blog41">The number of protons</a></h4>
                          <div className="post-detail blog27">
                            <span className="date blog28">
                              <i className="fa fa-clock-o" aria-hidden="true" /> 1 june 2015
                            </span>
                            <span className="view blog29">
                              <img src={eye} className="view-icon blog30" />343
                            </span>
                          </div>
                          <p className="blog42">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.</p>
                        </div>
                      </li>
                      <li className="blog36">
                        <div className="post-img blog37">
                          <img src={homeblog1} className="img-responsive blog38" />
                        </div>
                        <div className="post-content blog39">
                          <h4 className="blog40"><a href="#" className="blog41">The number of protons</a></h4>
                          <div className="post-detail blog27">
                            <span className="date blog28">
                              <i className="fa fa-clock-o" aria-hidden="true" /> 1 june 2015
                            </span>
                            <span className="view blog29">
                              <img src={eye} className="view-icon blog30" />343
                            </span>
                          </div>
                          <p className="blog42">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-stories blog33">
                    <h3 className="title-heading blog34">Top Stories</h3>
                    <ul className="list-inline list-unstyled blog35">
                      <li className="blog36">
                        <div className="post-img blog37">
                          <img src={homeblog1} className="img-responsive blog38" />
                        </div>
                        <div className="post-content blog39">
                          <h4 className="blog40"><a href="#" className="blog41">The number of protons</a></h4>
                          <div className="post-detail blog27">
                            <span className="date blog28">
                              <i className="fa fa-clock-o" aria-hidden="true" /> 1 june 2015
                            </span>
                            <span className="view blog29">
                              <img src={eye} className="view-icon blog30" />343
                            </span>
                          </div>
                          <p className="blog42">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.</p>
                        </div>
                      </li>
                      <li className="blog36">
                        <div className="post-img blog37">
                          <img src={homeblog1} className="img-responsive blog38" />
                        </div>
                        <div className="post-content blog39">
                          <h4 className="blog40"><a href="#" className="blog41">The number of protons</a></h4>
                          <div className="post-detail blog27">
                            <span className="date blog28">
                              <i className="fa fa-clock-o" aria-hidden="true" /> 1 june 2015
                            </span>
                            <span className="view blog29">
                              <img src={eye} className="view-icon blog30" />343
                            </span>
                          </div>
                          <p className="blog42">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.</p>
                        </div>
                      </li>
                      <li className="blog36">
                        <div className="post-img blog37">
                          <img src={homeblog1} className="img-responsive blog38" />
                        </div>
                        <div className="post-content blog39">
                          <h4 className="blog40"><a href="#" className="blog41">The number of protons</a></h4>
                          <div className="post-detail blog27">
                            <span className="date blog28">
                              <i className="fa fa-clock-o" aria-hidden="true" /> 1 june 2015
                            </span>
                            <span className="view blog29">
                              <img src={eye} className="view-icon blog30" />343
                            </span>
                          </div>
                          <p className="blog42">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.Impedit temporibus nisi accusamus.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </main>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog10">
                <aside className="blog12">
                  <div className="sidebar blog13">
                    <h3 className="title-heading blog14">Top Stories</h3>
                    <ul className="list-inline list-unstyled blog15">
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar blog13">
                    <h3 className="title-heading blog14">Top Stories</h3>
                    <ul className="list-inline list-unstyled blog15">
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar blog13">
                    <h3 className="title-heading blog14">Top Stories</h3>
                    <ul className="list-inline list-unstyled blog15">
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar blog13">
                    <h3 className="title-heading blog14">Top Stories</h3>
                    <ul className="list-inline list-unstyled blog15">
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                      <li className="blog16">
                        <div className="post-img blog17">
                          <img src={homeblog3} className="img-responsive blog18" />
                        </div>
                        <div className="post-content blog19">
                          <h4 className="blog20"><a href="#" className="blog21">The number of protons</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla.</p>
                        </div>
                      </li>
                    </ul>
                  </div>                </aside>
              </div>
            </div>
          </div>
        </div>
        {/*-------------Content---------------*/}
        <footer className="blog11">
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

export default Blog;
