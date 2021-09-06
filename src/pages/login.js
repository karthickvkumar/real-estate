import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="login-background">
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
                    <li><NavLink to="/about" activeClassName="active-tab">About</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active-tab">Contact</NavLink></li>
                    <li><NavLink to="/login" activeClassName="active-tab">Login</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section site-section-sm pb-0">
          <div className="container align-form">
            <div className="row form-width">
              <form className="form-search col-md-12">
                <div className="align-items-end">

                  <div className="col-md-12">
                    <label htmlFor="offer-types">Enter Email ID :</label>
                    <div className="select-wrap">
                      <input className="form-control d-block rounded-0" placeholder="Enter your email ID"/>

                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="select-city">Enter Password :</label>
                    <div className="select-wrap">
                      <input className="form-control d-block rounded-0" placeholder="Enter your password"/>
                    </div>
                  </div>
                  <div className="col-md-12 m-top-forget">
                    <NavLink to="/reset" className="forget-link">Forget Password ?</NavLink>
                  </div>
                  <div className="col-md-12">
                    <input type="submit" className="btn btn-success text-white btn-block rounded-0" value="Login" />
                  </div>
                  <div className="col-md-12 m-top-5">
                    <NavLink to="/register" className="btn btn-register text-white btn-block rounded-0">Create a Account</NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;