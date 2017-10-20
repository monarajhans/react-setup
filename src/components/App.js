import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import logo from '../assets/images/logo.svg';
import './App.scss';
import Autocomplete from 'react-google-autocomplete';

import updateUserStateActions from '../actions/user/updateUserStateActions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedFromCity : '', selectedToCity : '' };
    this.updateName = this.updateName.bind(this);
    this.onFromPlaceSelected = this.onFromPlaceSelected.bind(this);
    this.onToPlaceSelected = this.onToPlaceSelected.bind(this);
    this.onPickUpAddressSelected = this.onPickUpAddressSelected.bind(this);
  }

  updateName(e) {
    const name = e.target.value;
    this.props.actions.updateUserState(name)
  }

  onFromPlaceSelected(place) {
    this.setState({ selectedFromCity: place.formatted_address });
  }

  onToPlaceSelected(place) {
    this.setState({ selectedToCity: place.formatted_address });
  }

  onPickUpAddressSelected(address) {
    let street_number = '';
    let route = '';
    let city  = '';
    let county = '';
    let stateAbbreviated = '';
    let zip = '';

    // address.address_components.forEach(function(addressElement) {
    //   if (addressElement.types.include("street_number")) {
    //     street_number = addressElement.long_name;
    //   } else if (addressElement.types.includes("route")) {
    //     route = addressElement.long_name;
    //   } else if (addressElement.types.includes("locality")) {
    //     city = addressElement.long_name;
    //   } else if (addressElement.types.includes("administrative_area_level_2")) {
    //     county = addressElement.long_name;
    //   } else if (addressElement.types.includes("administrative_area_level_1")) {
    //     stateAbbreviated = addressElement.long_name;
    //   } else if (addressElement.types.includes("postal_code")) {
    //     zip = addressElement.long_name;
    //   }
    // });
    debugger;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="AppLogo" alt="logo" /> */}
          <h1 className="AppTitle">Welcome to Logis9, {this.props.name}!</h1>
        </header>

        <p className="App-intro">
          Type you name: <input type="text" onChange={this.updateName}/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="originPlace">
          <p>Origin:</p>
          <Autocomplete
            onPlaceSelected={this.onFromPlaceSelected}
            types={['geocode']}
            componentRestrictions={{country: "us"}}
          />
        </div>

        <div className="destinationPlace">
          <p>Destination:</p>
          <Autocomplete
            onPlaceSelected={this.onToPlaceSelected}
            types={['(cities)']}
            componentRestrictions={{country: "us"}}
          />
        </div>

        <div className="pickUpAddress">
          <p>Pickup Address:</p>
          <Autocomplete
            onPlaceSelected={this.onPickUpAddressSelected}
            types={['address']}
            componentRestrictions={{country: "us"}}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(updateUserStateActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
