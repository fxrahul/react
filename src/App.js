import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {subscribers} from './subscribers.json';
import { Button,Container,Row,Col,Table,Form } from 'react-bootstrap';


class App extends Component {



writeFile(){
  console.log(subscribers);
}

  render() {
    // window.setInterval(()=>{
    //   this.writeFile();
    // },1000);
    return (
      <div>
        <br></br>
<Container>
  
  <Row>
    <Col><Button id="add"  bsstyyle="primary">Add Subscriber</Button></Col>
    <Col><Button id="list" bsstyyle="success">List All Subscriber</Button></Col>
  </Row>
</Container>
<br></br>
<input type="hidden" value={JSON.stringify(subscribers)} id="subscribers"/>
<Table striped bordered hover variant="dark" id="tableId">
  
</Table>

<Form id="formId">
<Form.Group controlId="formGridName">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Enter Name" />
  </Form.Group>

  <Form.Group controlId="formGridContact">
    <Form.Label>Contact</Form.Label>
    <Form.Control placeholder="Enter Contact" />
  </Form.Group>

  <Form.Group controlId="formGridEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>;


      


      </div>


      
      
     
    );
  }
  
}

export default App;
