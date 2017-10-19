import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import './App.css';
// import './App.scss';

import updateUserStateActions from '../actions/user/updateUserStateActions'

class App extends Component {
  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
  }

  updateName(e) {
    const name = e.target.value;
    this.props.actions.updateUserState(name)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Logis9, {this.props.name}!</h1>
        </header>
        <p className="App-intro">
          Type you name: <input type="text" onChange={this.updateName}/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
