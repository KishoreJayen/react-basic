import React from 'react'

const courses=[
    "Node",
    "Java",
    "Python",
    "CSS",
];


const Mapping = () => {
 const arrayItems = courses.map((element)=> <li>{element}</li>)



  return (
    <div>Mapping
        <ul>{arrayItems}</ul>
        <hr></hr>
    </div>
  )
}

export default Mapping