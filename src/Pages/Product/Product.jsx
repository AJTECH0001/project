import { AccountBalance, AddShoppingCart, FavoriteBorderOutlined } from '@material-ui/icons';
import React, { useState } from 'react';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ];

  return (
    <div className="product py-[20px] px-[50px] flex gap-[50px]">
      <div className="imageGallery flex-1 flex gap-[20px]">
        <div className='flex-1 gap-[20px]'>
          <img className='w-[100%] object-cover mb-[10px] h-[150px]' src={images[0]} alt="" onClick={() => setSelectedImage(0)} />
          <img className='w-[100%] object-cover mb-[10px] h-[150px]' src={images[1]} alt="" onClick={() => setSelectedImage(1)} />
        </div>
        <div className="mainImg flex-[5]">
          <img className='w-[100%] object-cover h-[500px]' src={images[selectedImage]} alt="" />
        </div>
      </div>

      <div className="productInfo flex-1 flex flex-col gap-[30px] ">
        <div className="title">TITLE</div>
        <span className='text-[30px] font-[500] text-blue-500  ' >$199</span>
        <p className=' text-[18px] font-[300] align-text ' >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi hic mollitia unde impedit vitae nobis
          corporis quasi ex sed reprehenderit recusandae consectetur, sunt, eos excepturi distinctio autem non
          consequuntur nulla.
        </p>
        <div className="quantity  flex font-[500] items-center gap-[10px] ">
          <button className=' w-[50px] h-[50px] flex items-center justify-center border-none bg-gray-200 '
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            aria-label="Decrease Quantity"
            disabled={quantity === 1}
          >
            -
          </button>
          {quantity}
          <button className=' w-[50px] h-[50px] flex items-center justify-center border-none bg-gray-200 '  onClick={() => setQuantity((prev) => prev + 1)} aria-label="Increase Quantity">
            +
          </button>
 
      </div>

      <button className='add  w-[250px] p-[10px] bg-[#2879fe] text-white '>
            <AddShoppingCart /> ADD TO CART

          
          </button>
          <div className='link flex gap-[20px] '>
              <div className='flex items-center justify-center gap-[10px] text-[#2879fe] text-[14px] '>
                < FavoriteBorderOutlined /> ADD TO WISH LIST 
              </div>
              <div className='flex items-center justify-center gap-[10px] text-[#2879fe] text-[14px]' >
                < AccountBalance />   ADD TO COMPARE
              </div>
            </div>

            <div className="info flex flex-col gap-[10px] text-gray-500 mt-[30px] text-[14px] ">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr className='  border-[1px] ' />
            <div className="info flex flex-col gap-[10px] text-gray-500 mt-[30px] text-[14px] ">
              <span>DESCRIPTION</span>
              <hr className=' w-[200px] border-[1px] ' />
              <span>ADDITIONAL INFORMATION</span>
              <hr className=' w-[200px] border-[1px] ' />
              <span>FAQ</span>
            </div>
        </div>

    </div>
  );
}

export default Product;
