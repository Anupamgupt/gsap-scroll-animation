import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './styles/textheadlinefooter.css'
import {BsArrowRight} from 'react-icons/bs'
import tf1 from '../assets/tf1.png'
import tf2 from '../assets/tf2.png'
import tf3 from '../assets/tf3.png'
import tf4 from '../assets/tf4.png'
import tf5 from '../assets/tf5.png'
function TextheadlineFooter() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".entertext3"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.7 ,
        ease:'ease',
        y:'-25rem',
        scrollTrigger: {
          start: "top 0%",
          end: "bottom center",
          
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".dwnloads4"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.7 ,
        ease:'ease',
        y:'-25rem',
        scrollTrigger: {
          trigger: element.querySelector(".tright"),
          start: "top 0%",
          end: "bottom center",
          
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  
  
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".tf1"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        // duration: 0.7 ,
        ease:'ease',
        // y:'-25rem',
        x:'-45',
        scrollTrigger: {
          trigger: element.querySelector(".tright"),
          start: "top 0%",
          end: "bottom center",
          
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".tright"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration:0.5,
        
        scrollTrigger: {
          trigger: element.querySelector(".tright"),
          start: "top 0%",
          end: "bottom center",
          
          toggleActions:"restart complete reverse reset"
      }
      }
      
    );
  }, []);
  return (
    <div className='text' ref={ref}>
       <div className='tleft'>
       <div className='dwnloads4'>
              <p className="down2 dow">Text Headline</p>
              <h1 className='downtext2'>Text Headline</h1>
              <p className='down2'>Footer Headline </p>
          </div>
        <div className="entertext3">
            {/* <img src={enter2} className='enter'/> */}
            <h1 className='abc2'>ABC 123</h1>
            <p className='para2'>we are the best web development campany in the world</p>
            <p className='foot2'>view case study <span className='arrow'><BsArrowRight/></span></p>
        </div>

      </div>
      <div className='tright'>
          <img src={tf1} className='tf1'/>
          <img src={tf2} className='tf2'/>
          <img src={tf3} className='tf3'/>
          <img src={tf4} className='tf4'/>
          <img src={tf5} className='tf5'/>
      </div>
    </div>
  )
}

export default TextheadlineFooter
