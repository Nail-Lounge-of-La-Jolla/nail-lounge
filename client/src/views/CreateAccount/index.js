// import React from "react";
// import "./style.css";
// import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

// const CreateAccount = () => {
//     return (
//         <div>
//             <Card className="mx-5">
//             <Card.Header>Create Account</Card.Header>
//       <Card.Body>
//         <Card.Text>
//         <Form>
//         <Row>
//           <Col className="mb-3">
//             <Form.Label>First name</Form.Label>
//             <Form.Control placeholder="First name" />
//           </Col>
//           <Col className="mb-3">
//             <Form.Label>Last name</Form.Label>
//             <Form.Control placeholder="Last name" />
//           </Col>
//         </Row>
//          <Form.Group className="mb-3 mx-3" controlId="formGroupEmail">
//            <Form.Label>Email address</Form.Label>
//            <Form.Control type="email" placeholder="Enter email" />
//            <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//          </Form.Group>
         
//          <Form.Group className="mb-3 mx-3" controlId="formGroupPassword">
//          <>
//   <Form.Label htmlFor="inputPassword5">Password</Form.Label>
//   <Form.Control
//     type="password"
//     id="inputPassword5"
//     aria-describedby="passwordHelpBlock"
//   />
//   <Form.Text id="passwordHelpBlock" muted>
//     Your password must be 8-20 characters long, contain letters and numbers, and
//     must not contain spaces, special characters, or emoji.
//   </Form.Text>
// </>
//          </Form.Group>
//          <Button className="mx-3 mr-4" variant="primary" type="submit">
//     Submit
//   </Button>
//     </Form>
//         </Card.Text>
//       </Card.Body>
//     </Card>
    
//     </div>
//     )
// }

// export default CreateAccount;
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      {/* <Link to="/login">← Go to Login</Link> */}

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
