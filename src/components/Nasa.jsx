import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './styles/nasa.css'
import { BsArrowRight } from 'react-icons/bs'
import nasa from '../assets/nasa.png'
import nasa1 from '../assets/nasa1.png'
import nasa2 from '../assets/nasa2.png'
function Nasa() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".dwnloads8"),
      {
        opacity:0,
        // y:80,
        
      },
      {
        opacity:1,
        duration: 0.7 ,
        ease:'ease',
        y:'30rem',
        scrollTrigger: {
          trigger: element.querySelector(".nright"),
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
      element.querySelector(".entertext8"),
      {
        opacity:0,
        // y:80,
        
      },
      {
        opacity:1,
        duration: 0.7 ,
        ease:'ease',
        x:'5rem',
        scrollTrigger: {
          trigger: element.querySelector(".nright"),
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
      element.querySelector(".nas1"),
      {
        opacity:0,
        // y:80,
        
      },
      {
        opacity:1,
        duration: 0.7 ,
        ease:'ease',
        x:'-5rem',
        scrollTrigger: {
          trigger: element.querySelector(".nright"),
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
      element.querySelector(".nas2"),
      {
        opacity:0,
        // y:80,
        
      },
      {
        opacity:1,
        duration: 0.7 ,
        ease:'ease',
        y:'10rem',
        scrollTrigger: {
          trigger: element.querySelector(".nright"),
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
      element.querySelector(".nright"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration:0.5,
        ease:'ease',
        
        scrollTrigger: {
          trigger: element.querySelector(".nright"),
          start: "top 0%",
          end: "bottom center",
          
          toggleActions:"restart complete reverse reset"
      }
      }
      
    );
  }, []);

  return (
    <div className='nasa' ref={ref}>
      <div className='nleft'>
      <div className='dwnloads8'>
                <p className="down2 dow">Biggest Classifieds</p>
                <img src ={nasa} className='nasa1'/>
                <p className='down2'>countries </p>
        </div>
        <div className="entertext8">
            {/* <img src={enter2} className='enter'/> */}
            <h1 className='abc2'>ABC 123</h1>
            <p className='para2'>we are the best web development campany in the world</p>
            <p className='foot2'>view case study <span className='arrow'><BsArrowRight/></span></p>
        </div>
      </div>
      <div className='nright'>
          <img src={nasa1} className='nas1'/>
          <img src={nasa2} className='nas2'/>
      </div>
 </div>
  )
}

export default Nasa
