import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="Categories flex  h-[80vh] gap-[10px]  m-[10px] overflow-hidden	 ">
      <div className="row flex flex-col flex-1 gap-[10px]    ">
        <div className="col relative ">
          <img
            className=" h-[100%] w-[100%] object-cover "
            src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute h-[50px] p-[10px] m-auto top-0 right-0 left-0 bottom-0 min-w-[100px]  bg-white w-fit capitalize border-none font-[500] ">
            <Link className="" to="/products/1">
              sale
            </Link>
          </button>
        </div>
        <div className="col relative">
        <div className="col relative ">
          <img
            className=" h-[100%] w-[100%] object-cover "
            src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute h-[50px] p-[10px] m-auto top-0 right-0 left-0 bottom-0 min-w-[100px]  bg-white w-fit capitalize border-none font-[500] ">
            <Link className="" to="/products/1">
              sale
            </Link>
          </button>
        </div>
        </div>
      </div>
      <div className="row flex-1 relative">
        <img
          className=" h-[100%] w-[100%] object-cover "
          src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <button className="absolute h-[50px] p-[10px] m-auto top-0 right-0 left-0 bottom-0 min-w-[100px]  bg-white w-fit capitalize border-none font-[500] ">
          <Link className="" to="/products/1">
            sale
          </Link>
        </button>{" "}
      </div>
      <div className="row flex flex-col flex-[2] gap-[10px]   ">
        <div className="flex gap-[10px] ">
          <div className="row relative">
            <img
              className=" h-[100%] w-[100%] object-cover "
              src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button className="absolute h-[50px] p-[10px] m-auto top-0 right-0 left-0 bottom-0 min-w-[100px]  bg-white w-fit capitalize border-none font-[500] ">
              <Link className="" to="/products/1">
                sale
              </Link>
            </button>
          </div>
          <div className="row relative">
            <img
              className=" h-[100%] w-[100%] object-cover "
              src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button className="absolute h-[50px] p-[10px] m-auto top-0 right-0 left-0 bottom-0 min-w-[100px]  bg-white w-fit capitalize border-none font-[500] ">
              <Link className="" to="/products/1">
                sale
              </Link>
            </button>
          </div>
        </div>
        <div className="shoes relative ">
          <img
            className=" h-[100%] w-[100%] object-cover  "
            src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute h-[50px] p-[10px] m-auto top-0 right-0 left-0 bottom-0 min-w-[100px]  bg-white w-fit capitalize border-none font-[500] ">
            <Link className="" to="/products/1">
              sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
