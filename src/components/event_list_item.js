import React from 'react';

const EventListItem = ({event, onEventSelect}) => {

  return (
    <li onClick={() => onEventSelect(event)} className="list-group-item">
      <div className="event-list media">
        <div className="media-left">
          <img className="media-object" src="" />
        </div>
        <div className="media-body">
          <div className="media-heading">{event.name.text}</div> 
        </div>
      </div>
    </li>
  )
}

export default EventListItem;




