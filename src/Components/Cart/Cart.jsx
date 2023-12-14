import { DeleteOutline } from '@material-ui/icons';
import React from 'react';

const Cart = () => {
  const data = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long sleeve graphics T-shirt",
      desc: "long sleeve graphics T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2, // Changed the id to 2
      img1: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "long sleeve graphics T-shirt",
      desc: "another T-shirt description",
      isNew: true,
      oldPrice: 25,
      price: 18,
    },
  ];

  return (
    <div className='absolute top-[80px] right-[20px] z-50 p-[20px] bg-white  style{ -webkit-box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);} '  >
      <h1 className='mb-[30px] text-gray-500 font-[400] text-[24px] '>PRODUCTS IN YOUR CART</h1>
      {data?.map((item) => (
        <div className="item flex items-center gap-[20px] " key={item.id}>
          <img className=' w-[80px] h-[100px] object-cover ' src={item.img1} alt="" />
          <div className="details">
            <h1 className='mb-[30px] text-gray-500 font-[400] text-[24px] ' >{item.title}</h1>
            <p className=' mb-[10px] text-[14px]  ' >{item.desc?.substring(0, 100)}</p>
            <div  className="price text-[#2879fe] ">1 x {item.price}</div>
          </div>
          <DeleteOutline className=' text-red-500 cursor-pointer ' />
        </div>
      ))}
      <div className="total flex justify-between font-[500] text-[18px] mb-[20px] ">
        <span>SUBTOTAL</span>
        {/* You may want to calculate the total dynamically based on the items in the cart */}
        <span>$123</span>
      </div>
      <button className=' w-[250px] p-[10px] flex items-center justify-center gap-[20px] cursor-pointer border-none bg-[#2879fe] text-white font-[500] mb-[20px] ' >PROCEED TO CHECKOUT</button>
      <span className='text-[12px] text-red-500 cursor-pointer   ' >reset cart</span>
    </div>
  );
};

export default Cart;
