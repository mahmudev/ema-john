import React from "react";

const Cart = ({ cart }) => {
  // console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
      // if(product.quantity === 0){
      //     product.quantity = 1;
      // }
      // product.quantity = product.quantity || 1;

      totalPrice = totalPrice + product.price * product.quantity;
      totalShipping = totalShipping + product.shipping;
      quantity = quantity + product.quantity;
  }
  const tax = totalPrice * 7 / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="sticky top-0">
      <div className="h-96 col-span-1 ">
        <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
          <input
            id="search-field"
            type="text"
            placeholder="seach"
            className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2"
          />
          <span id="btn-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        <div className="bg-[#FFE0B3] rounded-md">
          <h1 className="text-center text-xl my-4  bg-[#FFE0B3] font-bold py-2 rounded-md  cursor-pointer  text-black">
            Order Summary
          </h1>
          <div className=" bg-[#FFE0B3]  rounded-md list-none ">
            <li className="p-3 ">
              <p className="list-none">Selected Items: {cart.length}</p>
            </li>
            <li className="p-3 ">
              <p className="list-none">Total Price: {totalPrice}</p>
            </li>
            <li className="p-3 ">
              <p className="list-none">
                Total Shipping Charge: {totalShipping}
              </p>
            </li>
            <li className="p-3 ">
              <p className="list-none">Tax: {tax.toFixed(2)}</p>
            </li>
            <li className="p-3 ">
              <p className="text-md font-bold list-none">
                Grand Total: {grandTotal.toFixed(2)}
              </p>
            </li>
            <button class="flex w-full items-center justify-center gap-2 px-4 py-2 text-black bg-[#FF9900] shadow hover:bg-[#995C00] rounded-lg">
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
              <span> Proceed Checkout </span>
            </button>
            <button className="text-lg w-full block my-2 font-semibold py-2 px-6 text-white  bg-[#1C2B35] rounded-lg shadow hover:shadow-md transition duration-300">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
