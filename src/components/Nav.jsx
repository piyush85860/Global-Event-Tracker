import React from 'react'

const Nav = () => {
  return (
    <nav className='w-full  flex justify-center fixed z-10'>
        <div className='flex justify-center items-center py-5 px-20 bg-white/10 rounded-full gap-15 mt-8 text-white backdrop-blur-sm font-[Inter] font-extralight'>
            <a href="">Overview</a>
            <a href="">Search</a>
            <a href="">Events</a>
            <a href="">Analytics</a>
            <a href="">Traffic</a>
        </div>
    </nav>
  )
}

export default Nav