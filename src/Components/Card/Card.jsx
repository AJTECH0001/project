import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss"

const Card = ({ item }) => {
  return (
    <Link to={`/products/${item.id}`}>
      <div className="Card group w-[280px] flex flex-col gap-[10px]">
        <div className="image w-[100%] h-[400px] overflow-hidden relative ">
        {item.isNew && <span className='absolute top-[20px] left-[5px] z-20 bg-white text-teal-500 py-[3px] px-[5px] font-[100px] text-[12px] '>New Season</span>}
          <img src={item.img1} alt="" className='mainImg h-[100%] w-[100%] object-cover absolute z-10 ' />
          <img src={item.img2} alt="" className='secondimg h-[100%] w-[100%] object-cover absolute ' />
        </div>
        <h2 className=' font-[100px] text-[16px] '>{item.title}</h2>
        <div className="prices flex gap-[20px] font-[100px] ">
            
          <h3 className='text-gray-400 line-through    ' >${item.oldPrice}</h3>
          <h4>${item.price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
