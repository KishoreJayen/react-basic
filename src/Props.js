import React from 'react'
import Props1 from './Props1'


function Props(props) {

  return (
    <div>
        <h1>Hyyy there  {props.name}</h1>
        <h1>He is Just:{props.age} </h1>
        <h1>Now he Lives at {props.city}</h1>
        <Props1  details="He had an one yr experience at Focus Edumatics as a online Math Tutor" />
        <hr></hr>
    </div>
  )
}

export default Props


