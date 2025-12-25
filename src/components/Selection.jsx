import React from 'react'
import { countryData } from './data'
import Cname from './Cname'
const Selection = ({setlong,setlati,country}) => {
  return (
    <div className='w-full h-full absolute z-11 bg-black/50 backdrop-blur-sm sele flex flex-col items-center px-30'>
        <div className='w-full text-7xl text-white font-[Inter] font-light flex justify-center py-20'><h1>Select Country</h1></div>
        <div className='w-full h-full overflow-y-auto no-scrollbar'>
          {
            countryData.map((elem)=>{
              return <Cname setlong={setlong} setlati={setlati} country={country} name={elem.name} long={elem.lng} lati={elem.lat}/>
            })
          }

        </div>
    </div>
  )
}

export default Selection