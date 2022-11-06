import React from "react";

import './styles/downloads.css'
import dil from '../assets/dil.png'
import tv from '../assets/tv.png'
import enter2 from '../assets/enter2.png'
import {BsArrowRight} from 'react-icons/bs'
function Downloads() {
 

  return (
    <div className='download' >
      <div className='dleft'>
        <div className='dwnloads'>
          <h1 className='downtext'>25M+ Downloads</h1>
          <p className='down'>on appstore & google store</p>
        </div>
        <div className="entertext">
          <img src={enter2} className='enter'/>
          <h1 className='abc'>ABC 123</h1>
          <p className='para'>we are the best web development campany in the world</p>
          <p className='foot'>view case study <span className='arrow'><BsArrowRight/></span></p>
        </div>
        
        
      </div>
      
      <div className='dright'>
        <div className='ldimg'>
          <img src={dil} className='dil' />
        </div>
        <div className='rdimg'>
          <img src={tv} className='tv'/>

        </div>
      </div>
     
    </div>
  )
}

export default Downloads
