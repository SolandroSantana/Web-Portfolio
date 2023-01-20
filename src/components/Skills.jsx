import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Skills = () => {

  return (
    <div className='skills' id='skills'>
      <Container className='pt-5'>
        <h1 className='text-center text-white'>Skills</h1>
        <Row bsPrefix='disable' className='d-flex flex-md-row flex-column flex-wrap text-white gap-5 pt-2'>

          <Col className='pt-5 p-5 text-white border border-2 border-danger rounded-5 skill-card'>
            <h3 className='text-center'>Front-end</h3>
            <Col className='mt-5 mb-5 d-flex justify-content-around'>
              <Col className='ms-5'>
                <ul>
                  <li><span>HTML</span></li>
                  <p className='text-white-50'>Intermediate</p>
                  <li><span>JavaScript</span></li>
                  <p className='text-white-50'>Intermediate</p>
                  <li><span>React</span></li>
                  <p className='text-white-50'>Intermediate</p>
                </ul>
              </Col>

              <Col>
                <ul>
                  <li><span>CSS</span></li>
                  <p className='text-white-50'>Intermediate</p>
                  <li><span>Bootstrap</span></li>
                  <p className='text-white-50'>Intermediate</p>
                  <li><span>Tailwind</span></li>
                  <p className='text-white-50'>Intermediate</p>
                </ul>
              </Col>

            </Col>
          </Col>

          <Col className='pt-5 p-5 text-white border border-2 border-danger rounded-5 skill-card'>
            <h3 className='text-center'>Back-end</h3>
            <Col className='mt-5 mb-5 d-flex justify-content-around'>
              <Col className='ms-5'>
                <ul>
                  <li><span>Python</span></li>
                  <p className='text-white-50'>Intermediate</p>
                  <li><span>Django</span></li>
                  <p className='text-white-50'>Basic</p>
                  <li><span>Node.JS</span></li>
                  <p className='text-white-50'>Basic</p>
                </ul>
              </Col>

              <Col>
                <ul>
                  <li><span>SQL Server</span></li>
                  <p className='text-white-50'>Intermediate</p>
                  <li><span>MySQL</span></li>
                  <p className='text-white-50'>Intermediate</p>
                  <li><span>MongoDB</span></li>
                  <p className='text-white-50'>Basic</p>
                </ul>
              </Col>
            </Col>
          </Col>

        </Row>
      </Container>
    </div >
  )
}

export default Skills