import React from 'react'

import Card  from '../Card/Card'

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img1:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",

            img2:"https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long sleeve  graphics T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,

        },

        {
            id: 1,
            img1:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",

            img2:"https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long sleeve  graphics T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,

        },

        {
            id: 1,
            img1:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",

            img2:"https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long sleeve  graphics T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,

        },

        {
            id: 1,
            img1:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",

            img2:"https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "long sleeve  graphics T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,

        }
    ]
  return (
    <div className="featuredProducts my-[100px] mx-[200px] ">
      <div className="top flex items-center justify-center ">
        <h1 className=' flex-[2]  capitalize '>{type}  products</h1>
        <p className=' capitalize text-gray-500 flex-[3] '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom flex justify-center gap-[50px] ">
        {data.map(item=>(
            <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
