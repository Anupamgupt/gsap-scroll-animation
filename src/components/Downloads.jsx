import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/downloads.css";
import dil from "../assets/dil.png";
import tv from "../assets/tv.png";
import enter2 from "../assets/enter2.png";
import { BsArrowRight } from "react-icons/bs";
function Downloads() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".dwnloads"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        y: "20rem",        
      }
      
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".entertext"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.7,
        x: "6rem",        
      }
      
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".ldimg"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.7,
        y: "-12rem",        
      }
      
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".entertext"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.7,
        x: "6rem",        
      }
      
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".rdimg"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.7,
        y: "12rem",        
      }
      
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".dleft"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration:0.5,
            
      }
      
    );
  }, []);
 


  return (
    <div className="download" ref={ref}>
      <div className="dleft">
        <div className="dwnloads">
          <h1 className="downtext">25M+ Downloads</h1>
          <p className="down">on appstore & google store</p>
        </div>
        <div className="entertext">
          <img src={enter2} className="enter" />
          <h1 className="abc">ABC 123</h1>
          <p className="para">
            we are the best web development campany in the world
          </p>
          <p className="foot">
            view case study{" "}
            <span className="arrow">
              <BsArrowRight />
            </span>
          </p>
        </div>
      </div>

      <div className="dright">
        <div className="ldimg">
          <img src={dil} className="dil" />
        </div>
        <div className="rdimg">
          <img src={tv} className="tv" />
        </div>
      </div>
    </div>
  );
}

export default Downloads;
