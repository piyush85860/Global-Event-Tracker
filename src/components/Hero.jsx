import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center px-30 absolute bg-black/1 hero'>
        <div className='text-[16rem] font-extralight font-[jaro] text-white'><h1>HORIZON</h1></div>
        <div className='text-2xl text-white/70 font-extralight font-[inter] translate-y-[-70px] [word-spacing:10px] tracking-[1.8px]'><p>Visualizing Global Events through Spatial Intelligence.</p></div>
    </div>
  )
}

export default Hero