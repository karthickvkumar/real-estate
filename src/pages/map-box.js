import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl'; 
import mapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FydGhpY2t2a3VtYXIiLCJhIjoiY2t0OHh2M2RmMTZ1bTJvbGFoYnJrZnMwNyJ9.aS-v0gNKcSZu3UePnkFp6w';

class MapBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      map : {},
      markers : []
    }
  }
  componentDidMount(){
    this.state.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [80.27030735800841,13.085358091531939], // starting position [lng, lat]
      zoom: 14, // starting zoom
      attributionControl: false
    });

    const seachLocation = new mapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      zoom : 14
    })
    this.state.map.addControl(seachLocation);

    const navigation = new mapboxgl.NavigationControl();
    this.state.map.addControl(navigation)

    const gpsLocation = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
    });
    this.state.map.addControl(gpsLocation);

    

    this.state.map.on('click', (e) => {
      const marker = new mapboxgl.Marker()
      .setLngLat([e.lngLat.lng, e.lngLat.lat])
      .addTo(this.state.map);  
      this.state.markers.push(marker);
    });
  }

  clearMarker(){
    if (this.state.markers!==null) {
      for (var i = this.state.markers.length - 1; i >= 0; i--) {
        this.state.markers[i].remove();
      }
    }
  }

  render() {
    
    return (
      <div>
          <div id="map" style={{height: '60vh'}}></div>
          <button onClick={() => this.clearMarker()}>Clear Marker</button>
      </div>
    );
  }
}

export default MapBox;