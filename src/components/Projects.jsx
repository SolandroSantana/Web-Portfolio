import React, { useState, useEffect } from 'react'
import 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { AiOutlineArrowDown } from 'react-icons/ai'

import api from '../services/api'


const Projects = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    api
    .get('/users/SolandroSantana/repos')
    .then((response) => setData(response.data))
    .catch((err) => {
      console.log("Ops! Ocorreu um erro" + err);
    });
  }, [])
  

  return (
    <div className='projects' id='projects'>
      <Container>
        <Row className='col-12 flex-wrap'>
          <Col className='p-5 col-12 text-white'>
            <h1 className='text-center'>Projects</h1>
          </Col>
          {data.map(result => (
            <Col key={result.id} className='ms-3 ms-sm-0 col-lg-4 col-md-6 col-sm-12 mb-3'>
            <Card border='danger' bg='transparent' className='project-card'>
              <Card.Header className='text-center bg-danger'>{result.name}</Card.Header>
              <Card.Body>
                <Card.Text>
                 {result.description}
                </Card.Text>
                <Button variant="dark" href={result.html_url}>Repositorio</Button>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Projects