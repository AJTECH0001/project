import React from 'react'



const Footer = () => {
  return (
    <div className='footer mt-[100px] mr-[200px] mb-[20px] ml-[200px] gap-[50px] text-justify	 	 '>
      <div className="top flex flex-1	 gap-[50px] text-[12px]  ">
        <div className="item flex-col flex gap-[10px] flex-auto text-gray-500">
        <h1 className='text-[18px] font-bold	text-[#555] '>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item flex-col flex-1 gap-[10px] flex text-gray-500">
        <h1 className='text-[18px] font-bold	text-[#555] ' >Links</h1>
        
          <span >FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>

        </div>
        <div className="item   gap-[10px] flex-1 flex flex-col ">
        <h1 className='text-[18px] font-bold	text-[#555] ' >About</h1>
          <span className='text-gray-500'>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item flex-1 flex-col gap-[10px] flex">
        <h1 className='text-[18px] font-bold	text-[#555] ' >Contact</h1>
          <span className='text-gray-500'>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom flex justify-between mt-[50px] ">
      <div className="left flex items-center">
          <span className="logo text-[#2879fe] text-[24px] font-bold ">AJTECH</span>
          <span className="copyright ml-[20px] text-[12px] text-gray-500">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>

        <div className="right">
          <img src='/img/payment.png' alt="" className='h-[50px]' />
        </div>
      </div>
    </div>
  )
}

export default Footer
