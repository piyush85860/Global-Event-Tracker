import React from 'react'
import gsap from 'gsap'
const Cname = ({setlati,setlong,country,name,long,lati}) => {
  return (
    <div
    onClick={()=>{
      country(prev=>prev+1)
      setlati(lati)
      setlong(long)
    }}
    onMouseEnter={(e)=>{
      gsap.to(e.currentTarget,{
        color:"white",
        borderColor:"white",
        opacity:1,
        ease:"power1.inOut"
      })
    }}

    onMouseLeave={(e)=>{
      gsap.to(e.currentTarget,{
        color:"white",
        borderColor:"rgba(255, 255, 255, 0.5)",
        opacity:0.5,
        ease:"power1.inOut"
      })
    }}
     className='w-full text-5xl text-white/50 font-[Inter] font-extralight py-8 border-b-2 border-white/50 flex justify-center cursor-pointer'>
        <h1>{name}</h1>
    </div>
  )
}

export default Cname