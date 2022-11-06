import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pizza_box from '../assets/pizza_box.png'
import domi from '../assets/domi.png'
import domi2 from '../assets/domi2.png'
import dominos from '../assets/dominos.png'
import dominos2 from '../assets/dominos2.png'
import './styles/uxstrategy.css'
import {BsArrowRight} from 'react-icons/bs'
function UxStrategy() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".dwnloads3"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.5,
        y:250,
        scrollTrigger: {
          trigger: element.querySelector(".uright"),
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
      element.querySelector(".pizza"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.6,
        x:100,
        scrollTrigger: {
          trigger: element.querySelector(".uright"),
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
      element.querySelector(".domi"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.9 ,
        y:-100,
        scrollTrigger: {
          trigger: element.querySelector(".uright"),
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
        y:'-25rem',
        scrollTrigger: {
          trigger: element.querySelector(".uright"),
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
      element.querySelector(".domi2"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 1 ,
        y:150,
        scrollTrigger: {
          trigger: element.querySelector(".uright"),
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
      element.querySelector(".dominos"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.6,
        x:-100,
        scrollTrigger: {
          trigger: element.querySelector(".uright"),
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
      element.querySelector(".dominos2"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.6,
        x:-100,
        scrollTrigger: {
          trigger: element.querySelector(".uright"),
          start: "top 0%",
          end: "bottom center",
          
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  return (
    <div className='ux' ref={ref}>
       <div className='uleft'>
        <div className='dwnloads3'>
              <p className="down2 dow">redifining</p>
              <h1 className='downtext2'>UX Strategy</h1>
              <p className='down2'>and UI design</p>
          </div>
          <div className="entertext2">
            {/* <img src={enter2} className='enter'/> */}
            <h1 className='abc2'>ABC 123</h1>
            <p className='para2'>we are the best web development campany in the world</p>
            <p className='foot2'>view case study <span className='arrow'><BsArrowRight/></span></p>
          </div>
        </div>
        <div className='uright'>
          <img src ={pizza_box} className='pizza'/>
          <img src={domi} className='domi'/>
          <img src ={domi2} className='domi2'/>
          <img src={dominos} className='dominos'/>
          <img src={dominos2} className='dominos2'/>
        </div>
    </div>
  )
}

export default UxStrategy
