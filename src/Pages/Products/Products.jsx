import React, { useState } from "react";
import List from "../../Components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams(); 
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="all">
      <div className="py-[30px] px-[50px] flex  ">
        <div className="left flex-1 sticky h-[100%] top-[50px] ">
          <div className="filteritem mb-[30px]">
            <div className="product catgories">
              <h1 className="mb-[20px] font-[500] text-xl " >Product Categories</h1>
              <div className="inputitem mb-[10px]  ">
                <input type="checkbox" id="shoe" value={1} />
                <label className=" ml-[10px] " htmlFor="shoe">Shoe</label>
              </div>

              <div className="inputitem mb-[10px] ">
                <input type="checkbox" id="mouse" value={2} />
                <label className=" ml-[10px] " htmlFor="mouse">Mouse</label>
              </div>
            </div>
            <div className=" ">
            <h1 className="mb-[20px] font-[500] text-xl " >Filter by price</h1>
            <div>
            <span>0</span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
            <div> 
            <h1 className="mb-[20px] font-[500] text-xl " >sort by </h1>
              <div className="inputitem ">
            </div>
              
                <input
                  type="radio"
                  id="asc"
                  value="asc"
                  name="price"
                  onChange={() => setSort("asc")}
                />
                <label className=" ml-[10px] " htmlFor="asc">Price (Lowest first)</label>

                <div className="inputitem mb-[10px]">
                <input
                  type="radio" 
                  id="desc"
                  value="desc"
                  name="price"
                  onChange={() => setSort("desc")}
                />
                <label className=" ml-[10px] " htmlFor="desc">Price (Highest first)</label>
              </div>
              </div>

             
            </div>
          </div>
        </div>
        <div className="right flex-[3] ">
          <img
            className="catImg h-[300px] w-[100%] object-cover mb-[50px] "
            src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <div>
            <List catId={id} maxPrice={maxPrice} sort={sort} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
