import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './styles/eastasia.css'
import {BsArrowRight} from 'react-icons/bs'
import enter2 from '../assets/enter2.png'
import eas1 from '../assets/eas1.png'
import eas2 from '../assets/eas2.png'
function Eastasia() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".dwnloads7"),
      {
        opacity:0,
        // y:80,
        
      },
      {
        opacity:1,
        duration: 0.7 ,
        ease:'ease',
        y:'20rem',
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
      element.querySelector(".entertext2"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.7 ,
        ease:'ease',
        y:'-36rem',
        scrollTrigger: {
          trigger: element.querySelector(".eright"),
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
      element.querySelector(".eas1"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.7 ,
        ease:'ease',
        y:'-12rem',
        scrollTrigger: {
          trigger: element.querySelector(".eright"),
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
      element.querySelector(".eas2"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.7 ,
        ease:'ease',
        y:'10rem',
        scrollTrigger: {
          trigger: element.querySelector(".eright"),
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
      element.querySelector(".eright"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration:0.5,
        ease:'ease',
        
        scrollTrigger: {
          trigger: element.querySelector(".eright"),
          start: "top 0%",
          end: "bottom center",
          
          toggleActions:"restart complete reverse reset"
      }
      }
      
    );
  }, []);
  return (
    <div className='east' ref={ref}>
       <div className='eleft'>  
        <div className='dwnloads7'>
                <p className="down2 dow">Biggest Classifieds</p>
                <h1 className='downtext3'>East Asia</h1>
                <p className='down2'>countries </p>
        </div>
        <div className="entertext2">
            <img src={enter2} className='enter'/>
            <h1 className='abc2'>ABC 123</h1>
            <p className='para2'>we are the best web development campany in the world</p>
            <p className='foot2'>view case study <span className='arrow'><BsArrowRight/></span></p>
        </div>
      </div>
      <div className='eright'>
          <div className='eastimg'>
            <img src ={eas1} className='eas1'/>
            <img src ={eas2} className='eas2'/>
          </div>
      </div>
    </div>
  )
}

export default Eastasia
