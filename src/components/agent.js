import React, { Component } from 'react';

class Agent extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
        <div className="team-member">

          <img src={require('../images/person_1.jpg').default} alt="Image" className="img-fluid rounded mb-4" />

          <div className="text">

            <h2 className="mb-2 font-weight-light text-black h4">Megan Smith</h2>
            <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Modi dolorem totam non quis facere blanditiis
              praesentium est.Totam atque corporis nisi, veniam non.Tempore cupiditate, vitae minus obcaecati
              provident beatae!</p>
            <p>
              <a href="#" className="text-black p-2"><span className="icon-facebook"></span></a>
              <a href="#" className="text-black p-2"><span className="icon-twitter"></span></a>
              <a href="#" className="text-black p-2"><span className="icon-linkedin"></span></a>
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default Agent;