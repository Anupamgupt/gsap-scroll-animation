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
  const myarray=["10,1000","130,1000","290,1000","420,1000","550,1000","690,1000","1000,1000"]
  const back=['rgb(89, 31, 143)','rgb(81, 87, 172)','#243558','rgb(31, 44, 223)','rgb(43, 49, 138)','rgba(4, 129, 71)','#121c31']
  
  const ref = useRef(null);

  useEffect(() => { 
    const sections = gsap.utils.toArray("section")
    gsap.defaults({ overwrite: "auto", duration: 0.3 });
    gsap.set("body", { height: sections.length * 100 + "%" })
    myarray.forEach((myarr,i)=>{
        const element = ref.current;
        // setn(3);
        gsap.fromTo(
          element.querySelector(".one"),
          {
            duration: 0,
          },
          {
            duration: 1.2,
            backgroundColor:back[i],
            strokeDasharray: myarr,
            scrollTrigger: {
              trigger: sections[i],
              start: "10% 107%",
              end: "10% 10%",
              toggleActions:"restart complete reverse reset "
            },
          }
        );
    }, []);
    })
  useEffect(() => {
    const element = ref.current;
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
          toggleActions:"restart complete reverse reset "
        },
      }
    );
  }, []);
  
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".one"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.9,    
      } 
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".one2"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,      
      },
      
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
              <section className="two sect">
                <Downloads id="h1" />
              </section>
              <section className="three sect">
                <Blockchain id="h2" />
              </section>
              <section className="four sect">
                <UxStrategy id="h3" />  
                
              </section>
              
              <section className="five sect">
                <TextheadlineFooter id="h4" /> 
              </section>
              <section className="six sect">
                <TextheadlineIndustry id="h5" />
              </section>
              <section className="seven sect">
                <Eastasia id="h6" />  
              </section>

              <section className="eight sect">
                <Nasa className="h7" />
              </section>
            </div>
       
      </div>
    </>
  );
}

export default App;
