import React, { Component } from 'react';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import Nav from './nav.js';
import featured from '../images/featured-img.jpg';
import homeicon from '../images/home-icon.png';
import team from '../images/team.png';
import footer from '../images/footer-logo.png';

class Career extends Component {
  render(){
    return(
      <div>
      <Nav />
        <div className="Featured-image">
          <div className="caption">
            <h2>Career</h2>
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
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h3>Working at EQUIPSHARE</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p>
                </div>
              </div>
              <div className="row">
                <img className="img-responsive" src={team} />
              </div>
            </div>
          </div>
          <div className="tabs-group">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h3 className="career1">Open Positions</h3>
                  <div className="tabbable-panel">
                    <div className="tabbable-line">
                      <ul className="nav nav-tabs ">
                        <li className="active career2">
                          <a className="positions career1" href="#tab_default_1" data-toggle="tab">
                            Business Operations </a>
                        </li>
                        <li className="active career2">
                          <a className="positions career1" href="#tab_default_2" data-toggle="tab">
                            Technical</a>
                        </li>
                        <li className="active career2">
                          <a className="positions career1" href="#tab_default_3" data-toggle="tab">
                            Marketing</a>
                        </li>
                        <li className="active career2">
                          <a className="positions career1" href="#tab_default_4" data-toggle="tab">
                            Construction</a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane active" id="tab_default_1">
                          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingOne">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Indore, Full-Time</span>
                                    Frontend Developer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingTwo">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Mumbai, Full-Time</span>
                                    Back-End Developer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingThree">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Indore, Part-Time</span>
                                    Senior Platform Engineer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="tab_default_2">
                          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingTwo">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Mumbai, Full-Time</span>
                                    Back-End Developer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false">
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingThree">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Indore, Part-Time</span>
                                    Senior Platform Engineer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingOne">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseOne" className="collapsed">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Indore, Full-Time</span>
                                    Frontend Developer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div></div>
                        </div>
                        <div className="tab-pane" id="tab_default_3">
                          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingThree">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Indore, Part-Time</span>
                                    Senior Platform Engineer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div><div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingTwo">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseTwo">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Mumbai, Full-Time</span>
                                    Back-End Developer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false">
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingOne">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseOne" className="collapsed">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Indore, Full-Time</span>
                                    Frontend Developer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseNine" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div></div>
                        </div>
                        <div className="tab-pane" id="tab_default_4">
                          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingThree">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseThree">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Indore, Part-Time</span>
                                    Senior Platform Engineer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseTen" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingTwo">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven" aria-expanded="false" aria-controls="collapseTwo">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Mumbai, Full-Time</span>
                                    Back-End Developer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseEleven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false">
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingOne">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwelve" aria-expanded="false" aria-controls="collapseOne" className="collapsed">
                                  <h4 className="panel-title career3">
                                    <i className="more-less glyphicon glyphicon-chevron-right career5" />
                                    <span className="career4">Indore, Full-Time</span>
                                    Frontend Developer
                                  </h4>
                                </a>
                              </div>
                              <div id="collapseTwelve" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style={{height: '0px'}}>
                                <div className="panel-body">
                                  <h3>Job Description</h3>
                                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                  <h3>What we are looking for</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                    <li>Anim pariatur cliche reprehenderit, eni</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim cupidatat skateboard dolor brunch.</li>
                                  </ul>
                                  <h3>What we would love to see</h3>
                                  <ul>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
                                    <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat</li>
                                  </ul>
                                  <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
        </div></div>
    );
  }
}

export default Career;
