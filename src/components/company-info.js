import React, { Component } from 'react';

class CompanyInfo extends Component {
  render() {
    return (
      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <div className="site-section-title">
                <h2>Why Choose Us?</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <a href="#" className="service text-center">
                <span className="icon flaticon-house"></span>
                <h2 className="service-heading">Research Subburbs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.</p>
                <p><span className="read-more">Read More</span></p>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#" className="service text-center">
                <span className="icon flaticon-sold"></span>
                <h2 className="service-heading">Sold Houses</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.</p>
                <p><span className="read-more">Read More</span></p>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#" className="service text-center">
                <span className="icon flaticon-camera"></span>
                <h2 className="service-heading">Security Priority</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.</p>
                <p><span className="read-more">Read More</span></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyInfo;