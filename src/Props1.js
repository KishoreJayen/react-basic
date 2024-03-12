import React,{createContext, useState} from 'react'
import Props2 from './Props2'




function Props1(props) {
  let [names, setName]= useState("Thala Ajith Kumar")
  
  return (
    <div>
    <i>{props.details}</i>
    <h1>{names}</h1>
    <Props2 name="Randy Orton" bank="HSBC BANK" role="Branch Manager"    />
    </div>

  )
}

export default Props1