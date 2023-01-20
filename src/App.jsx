import { React, useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {

  return (
    <div className='main'>
      <div className='position-relative'>
        <Header />
        <div className='position-absolute fixed-top'>
          <NavBar />
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
 
      
    </div>
  )
}

export default App
