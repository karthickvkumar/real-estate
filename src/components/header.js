import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileHeader: false
    }
  }

  mobileView() {
    this.setState({
      mobileHeader: !this.state.mobileHeader
    })
  }

  render() {
    const background = require('../images/hero_bg_1.jpg').default;
    const translate = {
      transform: 'translateX(110%)'
    }
    const noTranslate = {
      transform: 'translateX(0%)'
    }
    return (
      <div>
        <div className="site-mobile-menu" style={this.state.mobileHeader ? noTranslate : translate}>
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" onClick={() => this.mobileView()} ></span>
            </div>
          </div>
          <div className="site-mobile-menu-body">
            <ul className="site-nav-wrap">
              <li>
                <NavLink to="/" exact={true} activeClassName="active-mobile-tab">Home</NavLink>
              </li>
              <li><NavLink to="/buy" activeClassName="active-mobile-tab">Buy</NavLink></li>
              <li><NavLink to="/rent" activeClassName="active-mobile-tab">Rent</NavLink></li>
              <li>
                <NavLink to="/property" activeClassName="active-mobile-tab">Properties</NavLink>
              </li>
              <li><NavLink to="/about" activeClassName="active-mobile-tab">About</NavLink></li>
              <li><NavLink to="/contact" activeClassName="active-mobile-tab">Contact</NavLink></li>
              <li><NavLink to="/login" activeClassName="active-mobile-tab">Login</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="site-background overlay">
          <div className="site-navbar mt-4">
            <div className="container py-1">
              <div className="row align-items-center">
                <div className="col-8 col-md-8 col-lg-4">
                  <h1 className="mb-0"><NavLink to="/" className="text-white h2 mb-0"><strong>Homeland<span className="text-danger">.</span></strong></NavLink></h1>
                </div>
                <div className="col-4 col-md-4 col-lg-8">
                  <nav className="site-navigation text-right text-md-right" role="navigation">

                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a onClick={() => this.mobileView()} className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li>
                        <NavLink to="/" exact={true} activeClassName="active-tab">Home</NavLink>
                      </li>
                      <li><NavLink to="/buy" activeClassName="active-tab">Buy</NavLink></li>
                      <li><NavLink to="/rent" activeClassName="active-tab">Rent</NavLink></li>
                      <li className="has-children">
                        <NavLink to="/property" activeClassName="active-tab">Properties</NavLink>
                        <ul className="dropdown arrow-top">
                          <li><a href="#">Condo</a></li>
                          <li><a href="#">Property Land</a></li>
                          <li><a href="#">Commercial Building</a></li>
                          <li className="has-children">
                            <a href="#">Sub Menu</a>
                            <ul className="dropdown">
                              <li><a href="#">Menu One</a></li>
                              <li><a href="#">Menu Two</a></li>
                              <li><a href="#">Menu Three</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><NavLink to="/about" activeClassName="active-tab">About</NavLink></li>
                      <li><NavLink to="/contact" activeClassName="active-tab">Contact</NavLink></li>
                      <li><NavLink to="/admin" activeClassName="active-tab">Admin</NavLink></li>
                      <li><NavLink to="/login" activeClassName="active-tab">Login</NavLink></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;