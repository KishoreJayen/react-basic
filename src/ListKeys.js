import React from 'react'


const ListKeys = (props) => {
    // const items= ["Apple", "Orange", "Mango", "Strawberry"];

  return (

    <>
    {/* <ul>
       {items.map((item,index)=>(
        <li key={index}>{item}</li>
       ))}
    </ul> */}
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>Sector</th>
                <td>{props.sector}</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default ListKeys