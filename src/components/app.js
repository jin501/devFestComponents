import FilteredUsers from './filteredUsers';
import React, { Component } from 'react';
import SearchBar from './search_bar.js';
import EventList from './event_list.js';
import EventDetail from './event_detail.js';
import axios from 'axios';
import _ from 'lodash';

import Login from './user/login'
import Logout from './user/logout'
import { currentUser } from './firebase/firebase';

export default class App extends React.Component{
  constructor(props){
    super(props);
    let choice = this.props.index
    this.state = {
      index: choice,
      events: [],
      interestedUsers: [],
      filterBy: null,
      selectedEvent: null
    }
    this.eventSearch('karaoke')
  }

  componentWillMount() {
    const that = this;
    this.props.firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        that.setState({currentUser: user})
      } else {
        // No user is signed in.
        that.setState({currentUser: null})
      }
    });
  }


  eventSearch(term, location) {
    const OAuth_token = 'FEELRVTAKH4YPZX4BKQT';
    var url = `https://www.eventbriteapi.com/v3/events/search/?q=${term}&token=${OAuth_token}&location.address=${location}&location.within=50mi`
    axios.get(url)
      .then((response) => {
        this.setState({
          events: response.data.events,
          selectedEvent: response.data.events[0]
        });
      })
      .catch(function (error) {
        console.log(error);
    });
  }

  render(){
    const eventSearch = _.debounce((term, location) => {this.eventSearch(term, location)}, 300);

    if (this.state.currentUser === null) {
      return (
        <div> 
          <div className="background-image" style={{top: '0'}}></div>
          <div className="inner"><Login /></div>
        </div>
      )
    } else {
      if (this.state.index){
        return (
          <div id="eventContainer">
            {this.state.selectedEvent ? <div className="background-2" style={{backgroundImage:`url(${this.state.selectedEvent.logo ? this.state.selectedEvent.logo.url : 'http://www.arabamerica.com/wp-content/themes/arabamerica/assets/img/thumbnail-default.jpg' })`, backgroundSize:'cover'}}></div> : <div className="background-2" style={{backgroundImage:`url('http://www.arabamerica.com/wp-content/themes/arabamerica/assets/img/thumbnail-default.jpg')`, backgroundSize:'cover'}}></div> }  
            <Logout />
            <div className="row">
              <SearchBar onSearchTermChange={eventSearch} />
            </div>
            <div id="content" className="container">
              <div className="row row-eq-height">
                <div className="col-md-8">
                  <EventDetail userId={this.state.currentUser} event={this.state.selectedEvent}/>
                </div>
                <div className="col-md-4">
                  <EventList onEventSelect={selectedEvent => this.setState({selectedEvent})} events={this.state.events} />
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div id="userMenu">
            <Logout />
            <FilteredUsers going={this.state.interestedUsers} filter={this.state.filterBy}/>
          </div>
        )
      }
    }
  }
}
