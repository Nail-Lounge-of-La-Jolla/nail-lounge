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
                    <Card.Title>Hi, (user's Name)</Card.Title>
                    <Card.Text>
                        Text
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>Coupon</Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>First Time Client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

  );
}

export default Profile;