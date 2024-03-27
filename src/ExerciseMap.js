import React from 'react'
import Table from 'react-bootstrap/Table'

function TableFormat(){
    const data =[
        {
            no:1,
            name:'Anusha',
            course:'FSD',
            fees:'90,000',
            email:'anusha@gmail.com',
            contact:'985217521',
        },
        {
            no:2,
            name:'Baskar',
            course:'PGA',
            fees:'90,000',
            email:'anusha@gmail.com',
            contact:'985217521',
        },
        {
            no:3,
            name:'Rohit',
            course:'Cibop',
            fees:'90,000',
            email:'anusha@gmail.com',
            contact:'985217521',
        },
        {
            no:4,
            name:'Kavya',
            course:'FSD',
            fees:'90,000',
            email:'anusha@gmail.com',
            contact:'985217521',
        },
        {
            no:5,
            name:'Fathima',
            course:'PGA',
            fees:'90,000',
            email:'anusha@gmail.com',
            contact:'985217521',
        },
    ];


const tableRows= data.map((element)=>{
    return(
        <tr>
            <td>{element.no}</td>
            <td>{element.name}</td>
            <td>{element.course}</td>
            <td>{element.fees}</td>
            <td>{element.email}</td>
            <td>{element.contact}</td>
        </tr>
    )
});

return (
    <div className='container-fluid'>
        <Table striped bordered hover variant="dark" >
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Fees</th>
                    <th>E-mail</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </Table>
    </div>
  )
}

function ExerciseMap() {
  return (
    <> 
    <TableFormat/>
    </>
  )
};

export default ExerciseMap