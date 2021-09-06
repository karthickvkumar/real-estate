import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const API = "AIzaSyBu-Nh7UubEBP9z3XAL_AAvjv_W2Qyz53I";

class Maps extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPlace : ''
    }
  }

  onMouseoverMarker = (props, marker, e) => {
    console.log(props, marker)
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
      <Marker onMouseover={this.onMouseoverMarker}
          name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (API)
})(Maps);