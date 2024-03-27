import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [input, setInput]= useState('');
    const count = useRef(0)
 
     useEffect(()=>{
        count.current = count.current+1;
     })

  return (
    <div>UseRef
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <h1>Render count: {count.current}</h1>
        <hr></hr>
        <br></br>
    </div>
  )
}

export default UseRef