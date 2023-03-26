import React from 'react';

const Cart = (props) => {

    const { id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = props?.cart;

    return (
        <div>
 <div className="bg-gray-100 flex justify-center items-center">
  <div className="w- p-3 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img
      className="w-64 object-cover rounded-t-md"
      src= {img}
      alt=""
    />
    <div className="mt-4">
      <h1 className="text-md font-bold text-gray-700">{name.slice(0, 19)}</h1>
      <div className='flex gap-2'>
        <p className="text-sm mt-2 text-gray-700 font-bold">Stock: {stock}</p>
        <p className="text-sm mt-2 text-gray-700 font-bold">seller: {seller}</p>
      </div>
      <div className='flex gap-2'>
        <p className="text-sm mt-2 text-gray-700 font-bold">category: {category}</p>
      </div>
      <div className='flex gap-2'>
        <p className="text-sm mt-2 text-gray-700 font-bold">ratings: {ratingsCount}</p>
      </div>
      
      <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button className="block text-xl font-semibold text-gray-700 cursor-auto">
          ${price}
        </button>
        <button className="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">
          Buy
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;