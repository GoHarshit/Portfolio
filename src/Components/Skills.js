import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Container,Col,Row} from 'react-bootstrap'
import '../App.css'
import m1 from '../assests/img/m1.png'
import m2 from '../assests/img/m2.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skillCont' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>lorem ipsum</p>
                        <Carousel 
                                responsive={responsive} 
                                infinite={true} 
                                className='skill-slider' 
                                autoPlay={true} // Add autoPlay property
                                autoPlaySpeed={3000} // Set auto play speed in milliseconds
                                keyBoardControl={true} // Enable keyboard control
                            >
                            <div className='item'>
                                <img src={m1} alt='meter1'></img>
                                <h5>Web development</h5>
                            </div>
                            <div className='item'>
                                <img src={m2} alt='meter2'></img>
                                <h5>Machine learning</h5>
                            </div>
                            <div className='item'>
                                <img src={m1} alt='meter3'></img>
                                <h5>SQL</h5>
                            </div>
                            <div className='item'>
                                <img src={m2} alt='meter4'></img>
                                <h5>Python</h5>
                            </div>
                            <div className='item'>
                                <img src={m2} alt='meter3'></img>
                                <h5>React.js</h5>
                            </div>
                            <div className='item'>
                                <img src={m1} alt='meter3'></img>
                                <h5>Flask</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
