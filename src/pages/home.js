import React, { Component } from 'react';

import Header from '../components/header';
import Filter from '../components/filter';
import Property from '../components/property';
import Pagination from '../components/pagination';
import CompanyInfo from '../components/company-info';
import Agent from '../components/agent';
import Footer from '../components/footer';

class Home extends Component {

  render() {

    return (
      <div className="site-wrap">
        {/* Header Start */}
        <Header></Header>
        {/* Header End */}

        {/* Filter Start */}
        <Filter></Filter>
        {/* Search End */}

        <div className="site-section site-section-sm bg-light">
          <div className="container">
            <div className="row mb-5">
              {/* Property Start */}
              <Property></Property>
              <Property></Property>
              <Property></Property>
              <Property></Property>
              <Property></Property>
              <Property></Property>
              {/* Property End */}
            </div>
            {/* Pagination Start */}
            <Pagination></Pagination>
            {/* Pagination End */}

          </div>
        </div>
        {/* Property List End*/}

        {/* Why Choose us Start */}
        <CompanyInfo></CompanyInfo>
        {/* Why Choose us End */}

        <div className="site-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-7">
                <div className="site-section-title text-center">
                  <h2>Our Agents</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero magnam officiis ipsa eum pariatur labore
                    fugit amet eaque iure vitae, repellendus laborum in modi reiciendis quis! Optio minima quibusdam,
                    laboriosam.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Agent Profile Start */}
              <Agent></Agent>
              <Agent></Agent>
              <Agent></Agent>
              {/* Agent Profile End */}
            </div>
          </div>
        </div>
        {/* Agent End */}
        {/* Footer */}
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;