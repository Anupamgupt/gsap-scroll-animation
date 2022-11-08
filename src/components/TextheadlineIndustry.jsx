import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './styles/textheadlineindustry.css'
import {BsArrowRight} from 'react-icons/bs'
import th from '../assets/th.png'
import interior from '../assets/interior.jpg'
function TextheadlineIndustry() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".dwnloads5"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.7 ,
        ease:'ease',
        y:'27rem',
        scrollTrigger: {
          trigger: element.querySelector(".tright2"),
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
        y:'-25rem',
        scrollTrigger: {
          trigger: element.querySelector(".tright2"),
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
      element.querySelector(".th"),
      {
        opacity:0,
        // y:80,
        
      },
      {
        opacity:1,
        duration: 1 ,
        ease:'ease',
        // y:'-25rem',
        scrollTrigger: {
          trigger: element.querySelector(".tright2"),
          start: "top 0%",
          end: "bottom center",
          
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  

  return (
   
    <div className='text2' ref={ref}>
      <div className='tleft2'>
        <div className='dwnloads5'>
                <p className="down2 dow">Developing Erp solution for</p>
                <h1 className='downtext2'>Text Headline</h1>
                <p className='down2'>in future industry </p>
        </div>
        <div className="entertext2">
            {/* <img src={enter2} className='enter'/> */}
            <h1 className='abc2'>ABC 123</h1>
            <p className='para2'>we are the best web development campany in the world</p>
            <p className='foot2'>view case study <span className='arrow'><BsArrowRight/></span></p>
        </div>
    </div>
    <div className='tright2'>
        <img src={th} className='th'/>
        {/* <img src ={interior} className='inter' /> */}
    </div>
 </div>
  )
}

export default TextheadlineIndustry
