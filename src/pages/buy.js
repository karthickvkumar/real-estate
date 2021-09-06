import React, { Component } from 'react';
import Header from '../components/header';
import Filter from '../components/filter';
import Property from '../components/property';
import Pagination from '../components/pagination';
import CompanyInfo from '../components/company-info';

class Buy extends Component {
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
      </div>
    );
  }
}

export default Buy;