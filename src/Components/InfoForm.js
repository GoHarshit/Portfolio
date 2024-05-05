import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import axios  from 'axios';

export const InfoForm = () => {
  const [Name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [mobile,setMobile]=useState('');
  const [message,setMessage]=useState('');

  const send = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:5000/send',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            Name: Name,
            email: email,
            mobile:mobile,
            message: message
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error, 'error');
        alert("An error occurred while processing your request");
    });
};

  return (
    <section className='infoForm' id='infoForm'>
            <div className='form-container'>
                <h1 className='heading'>Send with ❤️</h1>
                <Form >
                    <Form.Group controlId="Name" className='form-item'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder='Name' name="Name" value={Name} onChange={(e)=>setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="email" className='form-item'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder='Email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="mobile" className='form-item'>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder='Number' name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                    </Form.Group>

            
                    <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} type="textarea" placeholder='Enter message' name="message" value={message} onChange={(e)=>setMessage(e.target.value)} />
                  </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit" onClick={send} >
                        Send
                    </Button>
                </Form>
            </div>
    </section>
  )
}
