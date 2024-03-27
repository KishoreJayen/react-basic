import React from 'react'

const courses=[
    {
        id:0,
        name:'Television',
        brand:' LG',
       category:'Electronics',
    },
    {
        id:1,
        name:'Eyeliner',
        brand:'Laxme',
       category:'Cosmetics',
    },
    {
        id:2,
        name:'Washing Machine',
        brand:'Bosch',
       category:'Electronics',
    },
    {
        id:3,
        name:'White board',
        brand:'camelin',
       category:'Stationary',
    },
]

function Mapping2() {
        const products = courses.filter(course=>
        course.category ==='Electronics');

//Mapping the course into a new array of JSX nodes as arrayDataItems

const arrayItems = products.map(course=>
    <li key={course.id}>
<p>{course.name}</p>
<p>{course.brand}</p>
<p>{course.category}</p>
    </li>
    
    )

  return (
    <div>Mapping2
        <ul>{arrayItems}</ul>
      <hr></hr>
    </div>
  )
}

export default Mapping2