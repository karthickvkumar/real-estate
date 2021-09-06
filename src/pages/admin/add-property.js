import React, { Component } from 'react';

class AddProperty extends Component {
  render() {
    return (
      <div id="add-property">
        <h4 className="add-property-title">Add Properties</h4>

        <div className="col-md-12">
          <div className="select-wrap">
            <label htmlFor="select-city">Enter Property Name :</label>
            <input className="form-control d-block rounded-0" placeholder="Enter property name" />
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="select-city">Enter Property Price in $:</label>
          <div className="select-wrap">
            <input className="form-control d-block rounded-0" placeholder="Enter property price" />
          </div>
        </div>
        <div className="row col-md-12">
          <div className="col-md-6">
            <label htmlFor="select-city">Choose Property Display Image :</label>
            <div className="select-wrap">
              <input type="file" className="form-control d-block rounded-0" />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="select-city">Upload Property Gallery Images :</label>
            <div className="select-wrap">
              <input type="file" className="form-control d-block rounded-0" />
            </div>
          </div>

        </div>
        <div className="col-md-12">
          <label htmlFor="select-city">Enter Property Address :</label>
          <div className="select-wrap">
            <textarea className="form-control d-block rounded-0" placeholder="Enter property door number and street name"></textarea>
          </div>
        </div>
        <div className="row col-md-12">
          <div className="col-md-6">
            <label htmlFor="select-city">Enter Property City :</label>
            <div className="select-wrap">
              <input className="form-control d-block rounded-0" placeholder="Enter property city" />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="select-city">Enter Property State :</label>
            <div className="select-wrap">
              <input className="form-control d-block rounded-0" placeholder="Enter property state" />
            </div>
          </div>
        </div>
        <div className="row col-md-12">
          <div className="col-md-6">
            <label htmlFor="select-city">Enter Property Country :</label>
            <div className="select-wrap">
              <input className="form-control d-block rounded-0" placeholder="Enter property country" />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="select-city">Enter Property PinCode :</label>
            <div className="select-wrap">
              <input className="form-control d-block rounded-0" placeholder="Enter property pincode" />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="select-city">Enter Property Location :</label>
          <div className="select-wrap">
            <input className="form-control d-block rounded-0" placeholder="Enter property location" />
          </div>
        </div>

        <div className="row col-md-12">
          <div className="col-md-4">
            <label htmlFor="select-city">Select Property Type :</label>
            <div className="select-wrap">
              <span className="icon icon-arrow_drop_down"></span>
              <select className="form-control form-control-sm d-block rounded-0">
                <option value="">Select Property Type</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
                <option value="lease">Lease</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="select-city">Enter Property Build Year :</label>
            <div className="select-wrap">
              <input type="date" className="form-control d-block rounded-0" placeholder="Enter property build year" />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="select-city">Enter Property Price in Per Square Feet:</label>
            <div className="select-wrap">
              <input type="number" className="form-control d-block rounded-0" placeholder="Enter property price per square feet" />
            </div>
          </div>
        </div>
        <div className="row col-md-12">

          <div className="col-md-4">
            <label htmlFor="select-city">Enter Property Bed Room Count :</label>
            <div className="select-wrap">
              <input type="number" className="form-control d-block rounded-0" placeholder="Enter property bed room count" />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="select-city">Enter Property Bath Room Count :</label>
            <div className="select-wrap">
              <input type="number" className="form-control d-block rounded-0" placeholder="Enter property bath room count" />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="select-city">Enter Property Contact Agent Email :</label>
            <div className="select-wrap">
              <input className="form-control d-block rounded-0" placeholder="Enter property contact agent email" />
            </div>
          </div>

        </div>
        <div className="col-md-12">
          <label htmlFor="select-city">Enter Property Description :</label>
          <div className="select-wrap">
            <textarea className="form-control d-block rounded-0" placeholder="Enter property description"></textarea>
          </div>
        </div>


      </div>
    );
  }
}

export default AddProperty; <h1>Add Properties</h1>