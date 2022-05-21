// import Form from 'react-bootstrap/Form'
// import React from "react";
// import "./style.css";
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'

// const LogIn = () => {
//     return (
//         <Card className="mx-5">
//         <Card.Header>Create Account</Card.Header>
//   <Card.Body>
//     <Card.Text>
// <Form>
//   <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//   </Form.Group>

//   <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Button className="mb-3 mx-3" variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
// </Card.Text>
//       </Card.Body>
//     </Card>
//     )
// }

// export default LogIn
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      {/* <Link to="/signup">← Go to Signup</Link> */}

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

