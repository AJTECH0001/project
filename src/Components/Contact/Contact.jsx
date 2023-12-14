import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'

const Contact = () => {
  return (
    <div className="contact bg-[#2879fe] text-white p-[15px] flex justify-center">
      <div className="wrapper flex items-center justify-around w-[80%] "> 
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail  ">
          <input className=' p-[10px] border-none rounded-l	 ' type="text" placeholder="Enter your e-mail..." />
          <button className='rounded-r bg-[#333] border-none  p-[10px] ' >JOIN US</button>
        </div>
        <div className="icons flex gap-5">
          <Facebook />
          <Instagram />
          <Twitter />
          <Pinterest />
        </div>
      </div>
    </div>
  )
}

export default Contact
