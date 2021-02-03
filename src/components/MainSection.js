import React from 'react';
import {Button} from './Button';
import './MainSection.css';
import '../App.css'

function MainSection() {
  return (
    <div className='main-container'>
      <video src='./videos/video-2.mp-4' autoPlay loop muted/>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='main-btns'>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>GET STARTED 
        <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default MainSection
