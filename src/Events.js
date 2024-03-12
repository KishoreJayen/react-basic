import React, { useState } from 'react'


function Events() {

  const[name, setName] = useState("Krish")

  const nameChange =() => {
     setName("Harishhh")
  }


  function onClick(){
    console.log("Heyy Krishh, Have a great day")
  }

  const offClick=()=>{
    console.log("Happy to work with you today!!")
  }


  function Count() {

    const [count, setCount] = useState(0);
  
  return (

    <div>
        <p style={{color:'blue', fontSize:'2rem'}}>Click me-->{count}</p>
        <button onClick={()=>{
          setCount(count+1)
        }}> ADD</button>

        <h1>Hello {name}</h1>
        <button onClick={nameChange}>Change Name</button>

    </div>
  )
}

  return (
    <div style={{"backgroundColor":'pink'}}>
        Events
        <hr></hr>
        <div style={{paddingLeft:'50px'}}>
        <button onClick={onClick}>Self</button>
        <button onClick={offClick}>Today</button>
        </div>
        <Count/>
   
        </div>
  )
}

export default Events