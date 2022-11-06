import React, { useRef, useEffect, useState } from "react";
import "./app.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Blockchain from "./components/Blockchain";
import Downloads from "./components/Downloads";
import Eastasia from "./components/Eastasia";
import Nasa from "./components/Nasa";
import TextheadlineFooter from "./components/TextheadlineFooter";
import TextheadlineIndustry from "./components/TextheadlineIndustry";
import UxStrategy from "./components/UxStrategy";
import Icon from "./components/pathSvg";
import Icon2 from "./components/pathsvg2";


function App() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    // setn(3);
    gsap.fromTo(
      element.querySelector(".one"),
      {
        duration: 0.5,
        strokeDasharray: "0,1000",
      },
      {
        duration: 1,
        
        strokeDasharray: "0,1000",
        scrollTrigger: {
          trigger: element.querySelector(".one"),
          start: "top 0%",
          end: "bottom center",
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
   
    gsap.fromTo(
      element.querySelector(".one"),
      {
        duration: 1,
      },
      {
        duration: 1,
        backgroundColor:'rgb(81, 87, 172)',
        strokeDasharray: "10,1000",
        scrollTrigger: {
          trigger: element.querySelector(".two"),
          start: "top 0%",
          end: "bottom center",
          // markers:true,
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
   
    gsap.fromTo(
      element.querySelector(".one"),
      {
        duration: 1,
        
      },
      {
        duration: 1,
        backgroundColor:'rgb(81, 87, 172)',
        strokeDasharray: "130,1000",
        scrollTrigger: {
          trigger: element.querySelector(".three"),
          start: "top 100%",
          end: "bottom center",
          // markers:true,
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    console.log("hello");
    gsap.fromTo(
      element.querySelector(".one"),
      {
        duration: 1,
       
      },
      {
        // duration:2,
        duration: 1,
        backgroundColor:'#243558',
        strokeDasharray: "290,1000",
        scrollTrigger: {
          trigger: element.querySelector(".four"),
          start: "0% 30%",
          end: "bottom center",
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    console.log("hello");
    gsap.fromTo(
      element.querySelector(".one"),
      {
        duration: 1,
      },
      {
        // duration:2,
        duration: 1,
        backgroundColor:'rgb(31, 44, 223)',
        strokeDasharray: "420,1000",
        scrollTrigger: {
          trigger: element.querySelector(".five"),
          start: "0% 30%",
          end: "bottom center",
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    console.log("hello");
    gsap.fromTo(
      element.querySelector(".one"),
      {
        duration: 1,
      },
      {
        // duration:2,
        backgroundColor:'rgb(43, 49, 138)',
        duration: 1,
        strokeDasharray: "550,1000",
        scrollTrigger: {
          trigger: element.querySelector(".six"),
          start: "0% 30%",
          end: "bottom center",
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    console.log("hello");
    gsap.fromTo(
      element.querySelector(".one"),
      {
        duration: 1,
      },
      {
        // duration:2,
       backgroundColor:'rgba(4, 129, 71, )',
        duration: 1,
        strokeDasharray: "690,1000",
        scrollTrigger: {
          trigger: element.querySelector(".seven"),
          start: "0% 30%",
          end: "bottom top",
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    
    gsap.fromTo(
      element.querySelector(".one"),
      {
        duration: 1,
      },
      {
        // duration:2,
        ease:'ease',
        backgroundColor:'#121c31',
        duration: 1,
        strokeDasharray: "1000,1000",
        scrollTrigger: {
          trigger: element.querySelector(".eight"),
          start: "top top",
          end: "bottom center",
          toggleActions:"restart complete reverse reset"
        },
      }
    );
  }, []);

  return (
    <>
      <div  ref={ref} >
        <div className="container">
          <div className="one" >
            <Icon   />
            
          </div>
          <div className="one2">
            <Icon2/>
          </div>
          
        </div>
        
        {/* <Icon2 width="20px"/> */}
        <div className="main">
              <section className="two">
                <Downloads id="h1" />
              </section>
              <section className="three">
                <Blockchain id="block" />
              </section>
              <section className="four">
                <UxStrategy id="h6" />  
                
              </section>
              
              <section className="five">
                <TextheadlineFooter id="h4" /> 
              </section>
              <section className="six">
                <TextheadlineIndustry id="h5" />
              </section>
              <section className="seven">
                <Eastasia id="h2" />  
              </section>

              <section className="eight">
                <Nasa className="h3" />
              </section>
          </div>
       
      </div>
    </>
  );
}

export default App;
