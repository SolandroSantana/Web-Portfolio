import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import ProfileImage from '../assets/img/profile.jpg'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaUserGraduate, FaMedal } from 'react-icons/fa'

const About = () => {
  return (
    <div className='about' id='about'>
      
      <Container fluid>
        <Row bsPrefix='disable' className='d-flex flex-md-row flex-column text-white'>
          <Col className='pt-5 text-center text-white img-about'>
          <Image className='d-sm-flex  rounded-circle border border-danger' fluid src={ProfileImage} />
          </Col>
          <Col className='p-5'>
            <h1 className='text-center border border-3 border-danger text-danger'>About Me</h1>
            <Row className='pt-3'>
              <Col className='col-4'>
                <Card className='p-5 align-items-center text-danger about-card' border='danger' bg='transparent'>
                  <FaUserGraduate size={32}/>
                  <Card.Title className='pt-2 text-white'>Education</Card.Title>
                  <Card.Text className='text-white-50'>Computer Engineering</Card.Text>
                </Card>
              </Col>
              <Col className='col-4'>
                <Card className='p-5 align-items-center text-danger h-100 about-card' border='danger' bg='transparent'>
                  <FaMedal size={32}/>
                  <Card.Title className='pt-2 text-white '>Experience</Card.Title>
                  <Card.Text className='text-white-50'>Begginner</Card.Text>
                </Card>
              </Col>
              <Col className='col-4'>
                <Card className='p-5 align-items-center text-danger about-card' border='danger' bg='transparent'>
                  <FaUserGraduate size={32}/>
                  <Card.Title className='pt-2 text-white'>Education</Card.Title>
                  <Card.Text className='text-white-50'>Computer Engineering</Card.Text>
                </Card>
              </Col>
            </Row>

            <p className='pt-3'>This is my personal portfolio website,
              developed using React.
              I'm looking for my first job as a backend developer or software engineering.
              Below you can see some of my skills and projects.
            </p>
            <br /><br />
            <div className='d-flex justify-content-around'>
              <a href='#skills'><Button variant='outline-danger'>See my Skills <AiOutlineArrowDown /></Button></a>
              <a href='#contact'><Button variant='outline-danger'>Get in Touch <AiOutlineArrowDown /></Button></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About