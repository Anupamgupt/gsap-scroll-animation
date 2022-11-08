import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './styles/blockchain.css'
import {BsArrowRight} from 'react-icons/bs'
import blockimg from '../assets/blockimg.png'
import pics from '../assets/pics.png'
function Blockchain() {

  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".blockimg"),
      {
        // visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.5,
        y:-200,
        scrollTrigger: {
          trigger: element.querySelector(".bright"),
          start: "top 0%",
          end: "bottom center",
          
          // toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".pic"),
      {
        visibility:'hidden',
        // y:80,
       
        
      },
      {
        visibility:'visible',
        duration: 1,
        y:250,
        scrollTrigger: {
          trigger: element.querySelector(".bright"),
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
      element.querySelector(".dwnloads2"),
      {
        visibility:'hidden',
        // y:80,
        
      },
      {
        visibility:'visible',
        duration: 0.3,
        y:270,
        scrollTrigger: {
          trigger: element.querySelector(".bright"),
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
        duration: 0.7,
        y:-250,
        scrollTrigger: {
          trigger: element.querySelector(".bright"),
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
      element.querySelector(".bright"),
      {
        opacity:0,
        // y:80,
        
      },
      {
        opacity:1,
        duration: 0.5,
        // y:-250,
        scrollTrigger: {
          trigger: element.querySelector(".bright"),
          start: "top 0%",
          end: "bottom center",
          
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
 
  return (
    <div className='block' ref={ref}>
      <div className='bleft'>
        <div className='dwnloads2'>
            <p className="down2 dow">The next big thing</p>
            <h1 className='downtext2'>Blockchain</h1>
            <p className='down2'>Revolution</p>
        </div>
        
        <div className="entertext2">
          {/* <img src={enter2} className='enter'/> */}
          <h1 className='abc2'>ABC 123</h1>
          <p className='para2'>we are the best web development campany in the world</p>
          <p className='foot2'>view case study <span className='arrow'><BsArrowRight/></span></p>
        </div>
      </div>
      <div className='bright'>
          <img src={blockimg} className='blockimg'></img>
          <img src={pics} className='pic'/>
        
      </div>
    </div>
  )
}

export default Blockchain
