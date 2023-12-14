
import { ArrowBack, ArrowForward, } from '@material-ui/icons';
import React, { useState } from 'react'

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () => {
        setCurrentSlide (currentSlide === 0 ? 2 : (prev) => prev - 1);
    }

    const nextSlide = () => {
        setCurrentSlide (currentSlide === 2 ? 0 : (prev) => prev + 1);
    }


  return (
    <div className="slider h-[calc(100vh - 80px)] w-[100%] relative overflow-hidden ">
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}}  className="container w-[300vw] flex h-[100%] object-cover translate-x-[-0vw] transition-all ease-in duration-300		 ">
            <img className='w-[100vw] h-[100%]' src={data[0]} alt="" />
            <img className='w-[100vw] h-[100%]' src={data[1]} alt="" />
            <img className='w-[100vw] h-[100%]' src={data[2]} alt="" />
            
           
        </div>
        <div className="icons absolute left-0 right-0 m-auto w-fit flex bottom-[100px] gap-[10px] cursor-pointer	 ">
                    <div onClick={prevSlide} className="icon w-[50px] h-[50px] border-[1px] flex items-center justify-center ">
                        <ArrowBack/>
                    </div>
                    <div onClick={nextSlide} className="icon w-[50px] h-[50px] border-[1px] flex items-center justify-center ">
                        <ArrowForward/>
                    </div>
            </div>
    </div>
  )
}

export default Slider
