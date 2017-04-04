import React, { Component } from 'react';
import { logoutUser, currentUser } from '../firebase/firebase';

export default class Logout extends React.Component{
	constructor() {
		super();
    this.state = {
      email: '',
      password: ''
    };
  }

  // This will be called when the user clicks on the login button
  logout(e) {
    e.preventDefault();
    logoutUser();
  }

  handleInputChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  resetState() {
  	this.setState({});
  }

  render() {
    return (
    	<div>
	        <button type="submit" className="btn btn-raised btn-danger" onClick={this.logout.bind(this)} style={{left: '90%'}}>Log out</button>
    	</div>
    );
  }
}