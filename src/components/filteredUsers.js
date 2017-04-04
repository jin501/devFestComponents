import React from 'react'
import User from './user'

export default function FilteredUsers(props){

  let lookingFor = props.filter
  let usersGoing = props.going

  //Currently hardCoded, but filter users based on props here beofre returning a list
  let meh = [{name: "Slim Shady", imageUrl: "http://i.giphy.com/d2Z7Er7VSQPiPgiY.gif", description: "I an anon user and I am interested in this Event!!! woo!"},
   {name: "Slim Sunny", imageUrl: "http://i.imgur.com/WHnuA2O.gif", description: "I am another user and I am interested in the sameEvent!!! woo!"}]


  return (
    <div id="filteredUsers">
      <User users={meh} />
    </div>
  )
}
