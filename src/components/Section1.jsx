import React, { useRef, useState } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Model1 from './Model1'
import Selection from './Selection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { useGSAP } from '@gsap/react';
const Section1 = () => {
  const [countryselection, setcountryselection] = useState(0)
  const [ready, setready] = useState(false)
  const modelRef=useRef(null)
  const rotationRef=useRef(null)
  const [long, setlong] = useState(0)
  const [lati, setlati] = useState(0)
useGSAP(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".sec1",
      start: "top top",
      end: "+=2000",
      scrub: true,
      pin: true,
      pinSpacing: true,
      markers: true
    }
  })
  .from(".sele", {
    y: 1000,
    ease: "power1.inOut"
  });
}, []);
useGSAP(() => {
  if((!ready || !modelRef.current)) return
  rotationRef.current=gsap.to(modelRef.current.rotation, {
    y: "+=6.283185", // 2π → full rotation
    duration: 50,
    repeat: -1,
    ease: "none"
  });
},[ready]);
useGSAP(()=>{
  if(!countryselection)return
  gsap.to(".sele",{
    opacity:0,
    ease:"power1.inOut",
    duration:1
  })
  rotationRef.current.pause();
  gsap.to(".hero",{
    y:-350,
    x:-600,
    scale:0.2,
    duration:2,
    ease:"power1.inOut"
  })
  gsap.to(modelRef.current.position,{
    x:-0.3,
    y:0,
    z:0,
    duration:2,
    ease:"power1.inOut"
  })
  gsap.to(modelRef.current.rotation,{
    y:"+=12.283185",
    z:0,
    duration:5,
    ease:"power1.inOut"
  })
  gsap.to(".sele",{
    opacity:1,
    ease:"power1.inOut",
    duration:1,
    delay:5
  })
  gsap.to(".hero",{
    y:40,
    x:0,
    scale:1,
    duration:2,
    delay:6,
    ease:"power1.inOut"
  })
  gsap.to(modelRef.current.position,{
    x:2,
    y:0,
    z:0,
    duration:2,
    delay:6,
    ease:"power1.inOut"
  })
  gsap.to(modelRef.current.rotation,{
    y:"+=6.283185",
    z:0,
    duration:50,
    delay:6,
    ease:"power1.inOut"
  })
},[countryselection])


  return (
    <div className='relative w-full h-screen sec1'>
      <div className='absolute w-full h-full opacity-10'>
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
        <Nav/>
        <Model1 ref={modelRef} setready={setready}/>
        <Hero/>
        <Selection setlong={setlong} setlati={setlati} country={setcountryselection}/>
    </div>
  )
}

export default Section1