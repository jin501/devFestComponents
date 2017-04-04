import React, { Component } from 'react';
import { signupUser, loginUser, logoutUser, currentUser } from '../firebase/firebase';
import logo from '../../../assets/img/logo.png';

export default class Login extends React.Component{
	constructor() {
		super();
    this.state = {
      email: '',
      password: ''
    };
  }

  // This will be called when the user clicks on the login button
  signup(e) {
    e.preventDefault();
    signupUser(this.state.email, this.state.password);
  }

  login(e) {
    e.preventDefault();
    loginUser(this.state.email, this.state.password);
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
    	<div id="login" className="container" style={{marginTop: '100px', width: '70%'}}>
        <div className="row">
          <div className="col-md-4 col-md-offset-5"><img src={logo} alt=""/></div>
        </div>

        <div className="row">
          <form style={{margin: '10px 200px 100px', backgroundColor: 'white', color: 'white'}}>
            <div className="form-group label-static is-empty">
              <label className="control-label" htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your email"
                      onChange={this.handleInputChange.bind(this, 'email')}
                      value={this.state.email}
              />
            </div>
            <div className="form-group label-static">
              <label className="control-label" htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password"
                      onChange={this.handleInputChange.bind(this, 'password')}
                      value={this.state.password}
              />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-offset-4">
                  <button type="submit" className="btn btn-raised btn-primary" onClick={this.login.bind(this)}>Login</button>        
                  <button type="submit" className="btn btn-raised btn-info" onClick={this.signup.bind(this)}>Sign up</button>
                </div>
              </div>
            </div>
          </form>
        </div>
    	</div>
    );
  }
}