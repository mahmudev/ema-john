import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="shadow bg-[#1C2B35] test-white">
        <div className="flex justify-between items-center py-4 px-10 container mx-auto">
          <div>
          <a href='#' target='_blank'><img src='https://i.postimg.cc/hhNtKjDg/Logo.png' border='0' alt='Logo'/></a>
          </div>
          <div>
            <div className="flex items-center">
              <ul className="sm:flex space-x-4 hidden items-center">
                <li>
                  <a
                    href="#"
                    className="text-white text-md "
                  >
                   Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-md "
                  >
                    Order Review
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-md "
                  >
                    Manage Inventory
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-md "
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-md "
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="md:flex items-center  hidden space-x-4 ml-8 lg:ml-12">
              <button className="text-lg w-full block font-semibold py-2 px-6 text-black  bg-[#FF9900] rounded-lg shadow hover:shadow-md transition duration-300">
              Login
              </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
