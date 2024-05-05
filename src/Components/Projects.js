import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import '../App.css';
import proj from '../assests/img/proj.jpg'
import pizza from '../assests/img/pizza.png';
import todo from '../assests/img/todo.png';
import weather from '../assests/img/weather.png';
import register from '../assests/img/register.png';
import tictactoe from '../assests/img/tictactoe.png';
import timer from '../assests/img/timer.png';
import unit from '../assests/img/unit.png';
import calc from '../assests/img/calc.png';

export const Projects = () => {
    const [activeKey, setActiveKey] = useState('first'); // Initialize activeKey state

    // Function to handle pill selection
    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey); // Update activeKey state when a pill is selected
    };
    const projects1 = [
        {
            title: 'Pizza 4 U',
            description: 'Streamline pizza orders with a user-friendly interface for customers, while empowering admins with comprehensive management tools.Seamlessly process transactions using Razorpay, ensuring safe and reliable payment processing for users. Utilize the power of the MERN stack and Redux to deliver a robust and scalable pizza delivery application, catering to both user and admin needs effectively',
            imgUrl: pizza,
        },
        {
            title: 'Spam Email Classifier',
            description: 'Seamlessly distinguish spam from legitimate emails using our full-stack application. Enhance productivity with our spam email classifier, combining a user-friendly React frontend with a robust Flask backend. Seamlessly integrated machine learning algorithms help accurately filter out spam, keeping inboxes clutter-free.',
            imgUrl: proj,
        },
    ];

    const projects2 = [
        {
            title: 'Authentication Page',
            description: 'An authentication system integrating React for the frontend, Flask for the backend, and MongoDB for the database, featuring login and registration functionalities.',
            imgUrl: register,
        },
        {
            title: 'Todo List',
            description: 'The todo list application developed using React allows users to manage tasks with features for deleting and editing items.',
            imgUrl: todo,
        },
        {
            title: 'Weather Application',
            description: 'A weather application built with React that fetches data from an API and includes a search feature for location-based weather information.',
            imgUrl: weather,
        }
    ];

    const projects3 = [
        {
            title: 'TicTacToe',
            description: 'The JavaScript Tic Tac Toe game allows players to compete in a classic grid-based game where they take turns marking X or O in a 3x3 grid, aiming to get three marks in a row horizontally, vertically, or diagonally before their opponent.',
            imgUrl: tictactoe,
        },
        {
            title: 'Timer & Stopwatch',
            description: 'The project is a JavaScript-based timer and stopwatch application featuring start, pause, and resume functionality.',
            imgUrl: timer,
        },
        {
            title: 'Unit Convertor',
            description: 'A JavaScript-based unit converter for converting various measurements between different units of measurement.',
            imgUrl: unit,
        },
        {
            title: 'Calculator',
            description: 'A web-based calculator application built using JavaScript, HTML, and CSS for performing basic arithmetic operations',
            imgUrl: calc,
        }
    ];

    
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These are some of my creations</p>
                        <Tab.Container id='projects-tab' defaultActiveKey='first'>
                            <Nav variant='pills' activeKey={activeKey} onSelect={handleSelect} className='nav-pills mb5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first' className='tab-first'>Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second' className='tab-second'>Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third' className='tab-third'>Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                {
                                    activeKey === 'first' && 
                                    <Row>
                                        {
                                            projects1.map((project,index)=>{
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>  
                                }
                                {
                                    activeKey === 'second' && 
                                    <Row>
                                        {
                                            projects2.map((project,index)=>{
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>  
                                }
                                {
                                    activeKey === 'third' && 
                                    <Row>
                                        {
                                            projects3.map((project,index)=>{
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>  
                                }
                                
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};


