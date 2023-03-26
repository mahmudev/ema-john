import React from "react";

const Sidebar = () => {
  return (
    <div>
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
        <div className="bg-green-100  rounded-md">
          <h1 className="text-center text-xl my-4  bg-green-100 py-2 rounded-md  cursor-pointer  text-gray-600">
          Order Summary
          </h1>
          <div className=" bg-green-100  rounded-md list-none ">
            <li className="p-3 ">
              <p className="list-none">
              Selected Items: 
              </p>
            </li>
            <li className="p-3 ">
              <p className="list-none">
              Total Price: 
              </p>
            </li>
            <li className="p-3 ">
              <p className="list-none">
              Total Shipping Charge: 
              </p>
            </li>
            <li className="p-3 ">
              <p className="list-none">
              Tax: 
              </p>
            </li>
            <li className="p-3 ">
              <p className="text-md font-bold list-none">
              Grand Total:
              </p>
            </li>
            <button className="text-lg w-full block my-4 font-semibold py-2 px-6 text-green-100 hover:text-white bg-indigo-500 rounded-lg shadow hover:shadow-md transition duration-300">
            Proceed Checkout 
        </button>
        <button className="text-lg w-full block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-600 rounded-lg shadow hover:shadow-md transition duration-300">
        Clear Cart
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
