import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Table from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import  Card  from 'react-bootstrap/Card';

function Bootstrap() {
  return (
    <div>
    <Card style={{ width: '25rem',  height:'250px', backgroundColor:'tomato'}}>
      <Card.Body>
        <Card.Title>Kishore Jayen</Card.Title>
        <Card.Text>
         Completed B.com with the Stream of Information Technology, also mastered at Full Stack Development
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Button variant="primary">Primary</Button>{" "}
     <Button variant="secondary">Secondary</Button>{' '}
     <Button variant="success">Success</Button>{' '}
     <Button variant="warning">Warning</Button>{' '}
     <Button variant="danger">Danger</Button>{' '}
     <Button variant="info">Info</Button>{' '}
     <Button variant="light">Light</Button>{' '}
     <Button variant="dark">Dark</Button>
     <Button variant="link">Link</Button>
     </div>
  );
}

export default Bootstrap