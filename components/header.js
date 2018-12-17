import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

class Header extends Component {
  render(){
    return(
      <header>
<div class="head-info">
<div class="container header1">
	<div class="row header2">
		<div class="col-lg-4 col-md-5 col-sm-6 col-xs-7">
			<ul class="list-inline list-unstyled info header3">
				<li className="header4"><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:info@equipshare.in">info@equipshare.in</a></li>
				<li className="header4"><i class="fa fa-phone" aria-hidden="true"></i><a className="header6" href="tel:+91 9767460825">+91 9767460825</a></li>
			</ul>
		</div>
		<div class="col-lg-offset-5 col-lg-3 col-md-offset-3 col-md-4 col-sm-offset-0 col-sm-6 col-xs-offset-0 col-xs-5 social-icon-col header5">
			<ul class="list-inline list-unstyled social-icon">
				<li className="header4"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
				<li className="header4"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li className="header4"><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
				<li className="header4"><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
			</ul>
			<div class="logon-btns">
				<a href="#">Login</a> | <a href="#">Signup</a>
</div>
</div>
</div>
</div>
</div>
</header>
    );
  }
}

export default Header;
