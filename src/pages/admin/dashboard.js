import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import AddProperty from './add-property';
import AddAgent from './add-agent';
import Report from './report';
import AllProperty from './all-property';
import AllAgent from './all-agent';

class Dashboard extends Component {
  render() {
    return (
      <div className="container-admin">
        <div className="header-admin">
          <div className="site-navbar">
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
                      <li><NavLink to="/admin" activeClassName="active-tab">Admin</NavLink></li>
                      <li><NavLink to="/login" activeClassName="active-tab">Login</NavLink></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-admin">
          <div className="sidebar-admin">
            <div className="col-md-12 m-top-5">
              <NavLink to="/admin" exact={true} activeClassName="admin-tab-active" className="btn btn-register text-white btn-block rounded-0">Report</NavLink>
            </div>
            <div className="col-md-12 m-top-5">
              <NavLink to="/admin/add-property" activeClassName="admin-tab-active" className="btn btn-register text-white btn-block rounded-0">Add Property</NavLink>
            </div>
            <div className="col-md-12 m-top-5">
              <NavLink to="/admin/all-property" activeClassName="admin-tab-active" className="btn btn-register text-white btn-block rounded-0">List Property</NavLink>
            </div>
            <div className="col-md-12 m-top-5">
              <NavLink to="/admin/add-agent" activeClassName="admin-tab-active" className="btn btn-register text-white btn-block rounded-0">Add Agent</NavLink>
            </div>
            <div className="col-md-12 m-top-5">
              <NavLink to="/admin/all-agent" activeClassName="admin-tab-active" className="btn btn-register text-white btn-block rounded-0">List Agent</NavLink>
            </div>
          </div>
          <div className="content-admin">
            <Route path="/admin" exact component={Report}></Route>
            <Route path="/admin/add-property" component={AddProperty}></Route>
            <Route path="/admin/all-property" component={AllProperty}></Route>
            <Route path="/admin/add-agent" component={AddAgent}></Route>
            <Route path="/admin/all-agent" component={AllAgent}></Route>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;