import React from 'react';
import {Button} from './Button';
import './MainSection.css';
import '../App.css';
import Video from '../videos/video-1.mp4'

function MainSection() {
  return (
    <div className='main-container'>
      <video src={Video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='main-btns'>
        <Button className='btns'
         buttonStyle='btn--outline'
         buttonSize='btn--large'>GET STARTED 
        </Button>
        <Button className='btns'
         buttonStyle='btn--primary'
         buttonSize='btn--large'>WATCH TRAILER 
        <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default MainSection
