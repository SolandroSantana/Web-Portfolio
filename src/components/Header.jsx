import { React, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BiArrowToBottom } from 'react-icons/bi'

import HeaderImg from '../assets/img/react.svg'

const Header = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Python Developer Junior', 'Backend Developer Junior', 'Software Engineer Junior'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <div className='header' id='header'>
      <Container className='content'>
        <Row className='text-white flex'>
          <Col>
            <h1 className='fst-italic'>Hi! I'm Solandro,</h1>
            <h2>{text}</h2>
            <Button className='mt-3'>Download my CV <BiArrowToBottom size={24} /></Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header