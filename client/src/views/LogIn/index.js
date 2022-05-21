import Form from 'react-bootstrap/Form'
import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const LogIn = () => {
    return (
        <Card className="mx-5">
        <Card.Header>Create Account</Card.Header>
  <Card.Body>
    <Card.Text>
<Form>
  <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button className="mb-3 mx-3" variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card.Text>
      </Card.Body>
    </Card>
    )
}

export default LogIn