import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assests/img/logo.png';
import instagram from '../assests/img/instagram.svg';
import whatsapp from '../assests/img/whatsapp.svg';
import linkedin from '../assests/img/linkedin.svg';
import '../App.css'


export const NavBar = () => {
    const [activeLink,setActiveLink]=useState("");
    const [scrolled,setScrolled]=useState(false);
    const onUpdateActiveLink=(value)=>{
      setActiveLink(value);
    }
    useEffect(()=>{
      const onScroll=()=>{
        if(window.scrollY>50){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
      window.addEventListener("scroll",onScroll);
      return ()=> window.removeEventListener("scroll",onScroll);
    },[]);

    const scrollToInfoForm = () => {
      const infoFormSection = document.getElementById('infoForm');
      if (infoFormSection) {
        infoFormSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className='navCont'>
        <Navbar.Brand href="#home">
            <img src={logo} alt=''/>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==="home"? "active-navbar-link":"navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==="skills"? "active-navbar-link":"navbar-link"} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==="projects"? "active-navbar-link":"navbar-link"} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>         
          </Nav>
        </Navbar.Collapse>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/harshit-goel-6030a3165/"><img src={linkedin} alt=''/></a>
                <a href="https://wa.me/7456957448"><img src={whatsapp} alt=''/></a>
                <a href="https://www.instagram.com/harshitgoel38/"><img src={instagram} alt=''/></a>
            </div>
            <Button className='vvd'  onClick={() => scrollToInfoForm()}><span>Let's Connect</span></Button>
        </span>
      </Container>
    </Navbar>
  );
}