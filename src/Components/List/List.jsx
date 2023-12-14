import React from 'react'


import Card  from '../Card/Card';

const List = () => {

   

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
    ];

  return (
    <div className='flex justify-between flex-wrap mb-[15px] '>
      {data?.map(item => (<Card item={item} key={item.id}/>))}
    </div>
  )
}

export default List
