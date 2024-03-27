import React from 'react'
import Table from "react-bootstrap/Table";

function RenderingArray() {
  const data= [
    {
        name:"Krish",
        marks:'98',
        phone:'3215',
    },
    {
        name:"Thala",
        marks:'78',
        phone:'3215',
    },
    {
        name:"Thalapathy",
        marks:'58',
        phone:'3215',
    },
    {
        name:"Str",
        marks:'81',
        phone:'3215',
    },
    {
        name:"John Cena",
        marks:'95',
        phone:'3215',
    },
  ];

  const tableRows = data.map((element)=>{
    return(
        <tr>
            <td>{element.name}</td>
            <td>{element.marks}</td>
            <td>{element.phone}</td>
        </tr>
    )
  })


  return (
    <div className='container-fluid'>
        <Table hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </Table>
    </div>
  )
}

function Mapping3(){
    return(
        <>
       <h1>Rendering the Array of objects</h1>
     <RenderingArray/>
     <hr></hr>
       </>
    )
}

export default Mapping3