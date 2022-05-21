import React from "react";
import "./style.css";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CreateAccount = () => {
    return (
        <div>
            <Card className="mx-5">
            <Card.Header>Create Account</Card.Header>
      <Card.Body>
        <Card.Text>
        <Form>
        <Row>
          <Col className="mb-3">
            <Form.Label>First name</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col className="mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
         <Form.Group className="mb-3 mx-3" controlId="formGroupEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" />
           <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
         </Form.Group>
         
         <Form.Group className="mb-3 mx-3" controlId="formGroupPassword">
         <>
  <Form.Label htmlFor="inputPassword5">Password</Form.Label>
  <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text>
</>
         </Form.Group>
         <Button className="mx-3 mr-4" variant="primary" type="submit">
    Submit
  </Button>
    </Form>
        </Card.Text>
      </Card.Body>
    </Card>
    
    </div>
    )
}

export default CreateAccount;