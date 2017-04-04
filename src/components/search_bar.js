import React, { Component } from 'react'
import $ from 'jquery'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { term: 'karaoke', location: 'New York' };
  }

  onInputChange(term, location) {
    this.setState({term, location});
    this.props.onSearchTermChange(term, location);
  }

  componentDidMount() {
    $( "#bar1" ).focusin(function() {
      $('#event-detail').css( "opacity", "0.2" ).fadeOut( 500 );
      $('#event-list').css( "opacity", "0.2" ).fadeOut( 500 );
    });
    $( "#bar1" ).focusout(function() {
      $('#event-detail').css( "opacity", "1" ).fadeIn( 500 );
      $('#event-list').css( "opacity", "1" ).fadeIn( 500 );
    });
    $( "#bar2" ).focusin(function() {
      $('#event-detail').css( "opacity", "0.2" ).fadeOut( 500 );
      $('#event-list').css( "opacity", "0.2" ).fadeOut( 500 );
    });
    $( "#bar2" ).focusout(function() {
      $('#event-detail').css( "opacity", "1" ).fadeIn( 500 );
      $('#event-list').css( "opacity", "1" ).fadeIn( 500 );
    });
  }
  
  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="row">
            <div className="col-md-4 col-md-offset-3">
              <input type="text" id="bar1" className="search-bar" placeholder="What would you I like to do?" value={this.state.term} onChange={event => this.onInputChange(event.target.value, this.state.location)} />
            </div>
            <div className="col-md-2">
              <input type="text" id="bar2" className="search-bar" placeholder="Location" value={this.state.location} onChange={event => this.onInputChange(this.state.term, event.target.value)} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;



