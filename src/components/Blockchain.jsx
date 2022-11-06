import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './styles/blockchain.css'
function Blockchain() {

  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".block"),
      {
        visibility:'hidden',
      },
      {
        visibility:'visible',
        duration: 1,
        scrollTrigger: {
          trigger: element.querySelector(".block"),
          start: "top 0%",
          end: "bottom center",
          
          // toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  return (
    <div className='block' ref={ref}>
      <div className='bleft'>

      </div>
      <div className='bright'>
        
      </div>
    </div>
  )
}

export default Blockchain
