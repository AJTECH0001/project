import { FavoriteBorderOutlined, KeyboardArrowDown, PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { useState } from 'react'

const Navbar = () => {

    const  [open, setOpen] = useState(false)

  return (
    <div className="Navbar h-[80px] " >
      <div className="Wrapper  py-[10px] px-[30px] flex justify-between items-center	 " >


      <div className="left flex justify-center gap-[25px]">
        <div className="item flex justify-center " >
          <img src='/img/en.png' alt='' className='h-[20px]'/>
          <KeyboardArrowDown/>
        </div>

        <div className="item flex" >
          <span>USD</span>
          <KeyboardArrowDown/>
        </div>

        <div className="div">
          <Link to="Products/1">Women</Link>
        </div>

        <div className="div">
          <Link to="Products/2">Men</Link>
        </div>

        <div className="div">
          <Link to="Products/3">Children</Link>
        </div>

      </div>
      <div className="center">
      <div className="div ">
          <Link className='text-[30px] tracking-wide ' to="/">AJTECH </Link>
        </div>

      </div>
      <div className="right flex justify-center gap-[25px] items-center ">
      <div className="div">
          <Link to="Products/2">Homepage</Link>
        </div>

        <div className="div">
          <Link to="Products/2">About</Link>
        </div>

        <div className="div">
          <Link to="Products/2">Contact</Link>
        </div>

        <div className="div">
          <Link to="Products/2">Store</Link>
        </div>

        <div className="icons flex gap-[15px] text-[#777] ">
          <Search/>
          <PersonOutlineOutlined/>
          <FavoriteBorderOutlined/>
          <div className="div relative  " onClick={()=>setOpen(!open)} >
            <ShoppingCartOutlined/>
            <span className='text-[12px] absolute right-[-10px] top-[-10px] flex justify-center items-center w-[20px] h-[20px] bg-[#2879fe] rounded-full text-white '>0</span>
          </div>
        </div>
      </div>
      </div>
     {open && <Cart/>}
    </div>
  )
}

export default Navbar
