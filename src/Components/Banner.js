import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import image from '../assests/img/image.png';
import '../App.css'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Software Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    const scrollToInfoForm = () => {
        const infoFormSection = document.getElementById('infoForm');
        if (infoFormSection) {
          infoFormSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hey there! I'm Harshit `}</h1>
                        <h1><span className='wrap'> {text}</span></h1>
                        <p> A skilled MERN stack developer with a passion for machine learning. With a strong foundation in web development and a deep understanding of machine learning fundamentals. Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.</p>
                        <button onClick={() => scrollToInfoForm()}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col md={4}>
                        <img src={image} alt='Header' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
