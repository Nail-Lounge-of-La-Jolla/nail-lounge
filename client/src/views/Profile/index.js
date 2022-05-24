import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import Qrcode from "../../img/Qrcode.jpeg";


const Profile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    return (

          <div>
            <Card className="mx-5">
                <Card.Header>Account</Card.Header>
                <Card.Body>
                    <Card.Title>Hi! , User </Card.Title>
                    <Card.Text>
                        Welcome to your account.
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>Coupon</Button>
                </Card.Body>
            </Card>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>First Time Client</Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                 <Card.Img variant="center" id="Qr" src={Qrcode} />
                 <br></br>
                 <h4>Scan Me</h4>
                 <h4>OR</h4>
                 <br></br>
                 <a src="qrco.de/bd2rwM">CLICK HERE</a>
                </Modal.Body>
            </Modal>
        </div>)

    
}

export default Profile;