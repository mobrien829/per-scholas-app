import { GoogleComponent } from 'react-google-location' 

import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";


import Autocomplete from 'react-google-autocomplete';

const API_KEY =  'AIzaSyCSk5gi7uFpihE_5vsGLV_kFPgxgwJZ_Fk'

Geocode.setApiKey("AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0");
Geocode.enableDebug();

class Map extends React.PureComponent {
  /**
   * When the user types an address in the search box
   * @param place
   */
  onPlaceSelected = (place) => {
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    // Set these values in the state.
    this.setState({
      address: (address) ? address : '',
      area: (area) ? area : '',
      city: (city) ? city : '',
      state: (state) ? state : '',
      markerPosition: {
        lat: latValue,
        lng: lngValue
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue
      },
    })
  };


  render() {
    return (
      <div>
      <Autocomplete
        style={{ width: '90%' }}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        types={['(regions)']}
        componentRestrictions={{ country: "ru" }}
      />
      </div>
    )
  }
}

export default Map    