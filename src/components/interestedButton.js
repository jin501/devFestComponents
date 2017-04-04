import React from 'react'
import { pushData } from './firebase/firebase';

export default function InterestedButton(props){
  let thisUserWantsToGo = props.assignEmail;
  let thisEvent = props.assignEvent;
  function sendStuffToDB(){
    console.log(thisUserWantsToGo + " going to event # " + thisEvent)

    let filters = ["friends", "date", "group"]
    let rndPurpose = filters[Math.floor(Math.random()*3)];

    let input = pushData.ref('goingTo');
    let trial = input.push()
    trial.set({
      email: thisUserWantsToGo,
      eventId: thisEvent,
      lookingFor: rndPurpose
    });
    var something = trial.toString()
    console.log("Consoling something " + something);
  }
  return (
    <div>
    <button className="btn btn-danger btn-fab-mini" onClick={sendStuffToDB}>
      <span className="fa-stack fa-lg" onClick={sendStuffToDB}>
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
      </span>
    </button>

    </div>
  )
}
