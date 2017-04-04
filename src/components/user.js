import React from 'react'

// User should have following data:
// user: {
//    eventsToGoTo: [],
//    name:
//    imageUrl:
//    description:
//    searchingFor:
//  }

export default function User(props){
  return (
    <div id="foundUsers">
      {props.users.map((user,i) =>
        <div key={i} className = "user">
          <div className = "profilePhoto">
            <img src = {user.imageUrl} />
          </div>
          <div className = "name">
            Name: {user.name}
          </div>
          <div className = "desc">
            <p> {user.description} </p>
          </div>
        </div>
      )}
    </div>
  )
}
