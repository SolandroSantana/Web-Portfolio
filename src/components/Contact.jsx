import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { AiOutlineMail } from 'react-icons/ai'
import { BsLinkedin, BsLightbulb, BsWhatsapp } from 'react-icons/bs'


const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <Container fluid className='text-white mt-5'>
        <Row className='col-12 p-5 flex-wrap'>
          <Col>
            <BsLightbulb className='w-100 img-fluid' /> 
          </Col>
          <Col>
            <h1 className='text-center border border-3 border-white mb-5'>Get in touch</h1>
            <Row className='gap-5 d-flex justify-content-between'>
              <Col>
                <Card bg='dark'>
                  <Card.Header>
                    <AiOutlineMail size={48} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title><p>E-mail</p></Card.Title>
                    <Card.Text><p><a href=''>solandro.contato@hotmail.com</a></p></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card bg='dark'>
                  <Card.Header>
                  <BsLinkedin size={48} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title><p>Linkedin</p></Card.Title>
                    <Card.Text><p><a href="https://www.linkedin.com/in/solandro-sousa-jr/" target='_blank'>https://www.linkedin.com/in/solandro-sousa-jr/</a></p></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
              <Card bg='dark'>
                  <Card.Header>
                  <BsWhatsapp size={48} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title><p>Whatsapp</p></Card.Title>
                    <Card.Text><p><a href="https://api.whatsapp.com/send?phone=5511946475690" target='_blank'>Send me a message</a></p></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Contact