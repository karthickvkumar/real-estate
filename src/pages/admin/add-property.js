import React, { Component } from 'react';

class AddProperty extends Component {

  constructor(props) {
    super(props);
    this.state = {
      add_property: {
        property_name: '',
        property_price: '',
        property_image: [],
        property_address: '',
        property_city: '',
        property_state: '',
        property_country: '',
        property_pincode: '',
        property_location: '',
        property_gallary: [],
        property_type: '',
        year_build: '',
        price_per_sq_feet: '',
        bed: '',
        bath: '',
        total_square_feet: '',
        property_description: '',
        property_contact_agent: '',
        property_status: ['sale', 'rent', 'lease'],
      }
    }
  }

  onHandleInput = (event) => {
    // console.log(event.target.value);
    this.setState({
      add_property: { ...this.state.add_property, [event.target.name]: event.target.value }
    })
  }

  onClickToAddProperty() {
    console.log(this.state.add_property)
  }

  render() {
    return (
      <div id="add-property">
        <h4 className="add-property-title">Add Properties</h4>

        <div className="col-md-12">
          <div className="select-wrap">
            <label htmlFor="select-city">Enter Property Name :</label>
            <input className="form-control d-block rounded-0" placeholder="Enter property name" name="property_name" onChange={this.onHandleInput} />
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="select-city">Enter Property Price in $:</label>
          <div className="select-wrap">
            <input className="form-control d-block rounded-0" placeholder="Enter property price" name="property_price" onChange={this.onHandleInput} />
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
            <textarea className="form-control d-block rounded-0" placeholder="Enter property door number and street name" name="property_address" onChange={this.onHandleInput}></textarea>
          </div>
        </div>
        <div className="row col-md-12">
          <div className="col-md-6">
            <label htmlFor="select-city">Enter Property City :</label>
            <div className="select-wrap">
              <input className="form-control d-block rounded-0" placeholder="Enter property city" name="property_city" onChange={this.onHandleInput} />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="select-city">Enter Property State :</label>
            <div className="select-wrap">
              <input className="form-control d-block rounded-0" placeholder="Enter property state" name="property_state" onChange={this.onHandleInput} />
            </div>
          </div>
        </div>
        <div className="row col-md-12">
          <div className="col-md-6">
            <label htmlFor="select-city">Enter Property Country :</label>
            <div className="select-wrap">
              <input className="form-control d-block rounded-0" placeholder="Enter property country" name="property_country" onChange={this.onHandleInput} />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="select-city">Enter Property PinCode :</label>
            <div className="select-wrap">
              <input className="form-control d-block rounded-0" placeholder="Enter property pincode" name="property_pincode" onChange={this.onHandleInput} />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="select-city">Enter Property Location :</label>
          <div className="select-wrap">
            <input className="form-control d-block rounded-0" placeholder="Enter property location" name="property_location" onChange={this.onHandleInput} />
          </div>
        </div>

        <div className="row col-md-12">
          <div className="col-md-4">
            <label htmlFor="select-city">Select Property Type :</label>
            <div className="select-wrap">
              <span className="icon icon-arrow_drop_down"></span>
              <select className="form-control form-control-sm d-block rounded-0" name="property_type" onChange={this.onHandleInput}>
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
              <input type="date" className="form-control d-block rounded-0" placeholder="Enter property build year" name="year_build" onChange={this.onHandleInput} />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="select-city">Enter Property Price in Per Square Feet:</label>
            <div className="select-wrap">
              <input type="number" className="form-control d-block rounded-0" placeholder="Enter property price per square feet" name="price_per_sq_feet" onChange={this.onHandleInput} />
            </div>
          </div>
        </div>
        <div className="row col-md-12">

          <div className="col-md-4">
            <label htmlFor="select-city">Enter Property Bed Room Count :</label>
            <div className="select-wrap">
              <input type="number" className="form-control d-block rounded-0" placeholder="Enter property bed room count" name="bed" onChange={this.onHandleInput} />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="select-city">Enter Property Bath Room Count :</label>
            <div className="select-wrap">
              <input type="number" className="form-control d-block rounded-0" placeholder="Enter property bath room count" name="bath" onChange={this.onHandleInput} />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="select-city">Enter Property Contact Agent Email :</label>
            <div className="select-wrap">
              <input className="form-control d-block rounded-0" placeholder="Enter property contact agent email" name="total_square_feet" onChange={this.onHandleInput} />
            </div>
          </div>

        </div>
        <div className="col-md-12">
          <label htmlFor="select-city">Enter Property Description :</label>
          <div className="select-wrap">
            <textarea className="form-control d-block rounded-0" placeholder="Enter property description" name="total_square_feet" onChange={this.onHandleInput} ></textarea>
          </div>
        </div>
        <div className="col-md-12 m-top-5">
          <input type="button" className="btn btn-success text-white btn-block rounded-0" value="Submit" onClick={() => this.onClickToAddProperty()} />
        </div>


      </div>
    );
  }
}

export default AddProperty; 