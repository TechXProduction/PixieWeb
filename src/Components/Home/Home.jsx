import React, {useRef, useEffect, useState} from 'react'

import { NavBar } from '../NavBar'
import { Elevate } from './Elevate'
import { Guia } from "./Guia"
import { Pilares  } from './Pilares'
import  {InfoGrid} from './InfoGrid'
import { Footer } from '../Footer'

import useMediaQuery from '@mui/material/useMediaQuery';

import "aos/dist/aos.css";
import AOS from "aos";



export const Home = ()=>{

    const is600 = useMediaQuery('(max-width:600px)');

    const [timeEffects, setTimeEffects] = useState(is600?"500":"1200")

    useEffect(() => {
        AOS.init();
      }, []);

    const letsChatRef = useRef(null);
    const letsPrincingRef = useRef(null)
    const letsWorkRef = useRef(null)
    const letsLogoRef = useRef(null)

    const handleLetsChatClick = () => {
      if (letsChatRef.current) {
        const scrollToOptions = {
          top: letsChatRef.current.offsetTop - 180,
          behavior: "smooth",
        };
        window.scrollTo(scrollToOptions);
      }
    };
      const handleLetsPricingClick = () => { 
        if (letsPrincingRef.current) {
          const scrollToOptions = {
            top:is600? letsPrincingRef.current.offsetTop - 180 : letsPrincingRef.current.offsetTop - 100,
            behavior: "smooth",
          };
          window.scrollTo(scrollToOptions);
        }
      }

      const handleLetsWorkClick = () => { 
        if (letsWorkRef.current) {
          const scrollToOptions = {
            top: letsWorkRef.current.offsetTop - 160,
            behavior: "smooth",
          };
          window.scrollTo(scrollToOptions);
        }
      }

      const handleLetsLogoClick = () => { 
        if (letsLogoRef.current) {
          const scrollToOptions = {
            top: letsLogoRef.current.offsetTop - 160,
            behavior: "smooth",
          };
          window.scrollTo(scrollToOptions);
        }
      }
      

    return(
        <>
        <NavBar handleLetsChatClick={handleLetsChatClick} handleLetsPricingClick={handleLetsPricingClick} handleLetsWorkClick={handleLetsWorkClick} handleLetsLogoClick={handleLetsLogoClick} />

        <div id='lets-chat'  >
        <Elevate handleLetsChatClick={handleLetsChatClick}/>
        
        </div>

        <Guia/>
        
        <div position={"relative"} style={{background:"#F6F7F9",paddingTop:"100px", paddingBottom:"100px"}}>
<Pilares/>
        </div>

        <InfoGrid/>
        <Footer/>
        {/* <div id='lets-header'ref={letsLogoRef} style={{paddingBottom:is600?"46px":"82px"}}></div>


        <div id='lets-chat'  >
        <Elevate handleLetsChatClick={handleLetsChatClick}/>
        </div>

        <div id='lets-chat'  data-aos-anchor-placement="top-center">
        <Talent/>
        </div>

        <div id='lets-chat' >
        <Business/>
        </div>
        <div id='lets-work' ref={letsWorkRef}  >
        <Work />
        </div>

        <div id='lets-pricing' ref={letsPrincingRef} >
        <Pricing/>
        </div>

        <div id='lets-chat'  ref={letsChatRef} >
        <FormContact/>
        </div>

        
        <Footer/> */}

        
        </>
    )
}