import React from 'react'
import Props1 from './Props1'


function Props(props) {

  // const infoData ={
  //   work:"Sales Marketing",
  //   experience:"2yr experience at Abu dhabi",
  //   location:"Maldives",
  // }

  return (
    <div>
        <h1>Hyyy there  {props.name}</h1>
        <h1>He is Just:{props.age} </h1>
        <h1>Now he Lives at {props.city}</h1>
        <Props1  details="He had an one yr experience at Focus Edumatics as a online Math Tutor" />
    </div>
  )
}

export default Props