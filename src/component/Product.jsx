import React from "react";

const Product = (props) => {
  const {id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity,} = props?.product;
const handelAddToCart = props.addToCart
  return (
    <div>
      <div className="bg-gray-100 flex justify-center items-center">
        <div className="w- p-3 bg-white rounded-xl shadow-xl hover:shadow-2xl">
          <div class="relative">
            <img src={img} alt="" />
            <div class="absolute bottom-0 right-0 bg-white p-1 rounded-l-lg bg-opacity-75 ">
              <button className="block text-xl font-semibold text-gray-700 cursor-auto">
                ${price}
              </button>
            </div>
          </div>
          <div className="mt-2 h-[230px] justify-between flex flex-col  ">
            <h1 className="text-md font-bold text-gray-700">
              {name}
            </h1>
            <div className="flex gap-2">
              <p className="text-sm mt-2 text-gray-700">Stock: {stock}</p>
              <p className="text-sm mt-2 text-gray-700">Seller: {seller}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm mt-2 text-gray-700">Category: {category}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm mt-2 text-gray-700">
                Ratings: {ratingsCount}
              </p>
            </div>

            <div className="mt-4 mb-2 flex justify-between ">
              <button
              onClick={()=>handelAddToCart(props.product)}
               class="flex w-full items-center justify-center gap-2 px-4 py-2 text-black bg-[#FF9900] shadow hover:bg-[#995C00] rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
