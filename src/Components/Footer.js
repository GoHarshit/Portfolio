import React from 'react';
import logo from '../assests/img/logo.png';
import { Row, Col } from 'react-bootstrap';
import instagram from '../assests/img/instagram.svg';
import whatsapp from '../assests/img/whatsapp.svg';
import linkedin from '../assests/img/linkedin.svg';
import '../App.css';

export const Footer = () => {
  return (
    <footer className='footer'>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt='logo'></img>
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.instagram.com/harshitgoel38/'><img src={instagram} alt='s1'/></a>
              <a href='https://wa.me/7456957448'><img src={whatsapp} alt='s1'/></a>
              <a href='https://www.linkedin.com/in/harshit-goel-6030a3165/'><img src={linkedin} alt='s1'/></a>
            </div>
          </Col>
        </Row>
    </footer>
  );
};
