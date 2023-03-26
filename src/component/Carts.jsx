import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Sidebar from "./Sidebar";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  const [visibleCarts, setVisibleCarts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 18;

  useEffect(() => {
    setIsLoading(true);
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setVisibleCarts(carts.slice(0, itemsPerPage));
    setCurrentIndex(itemsPerPage);
  }, [carts, itemsPerPage]);

  const handleSeeMoreClick = () => {
    const nextIndex = currentIndex + itemsPerPage;
    setVisibleCarts(carts.slice(0, nextIndex));
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <div className="bg-gray-100 sm:grid grid-cols-5 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
        <div className="col-span-4 lg:px-10">
          {isLoading ? (
            <div className="flex items-center justify-center">
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
            />
            <p className="ml-2">Loading...</p>
          </div>
          
          ) : (
            <>
              <div className="grid grid-flow-row gap-5 text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {visibleCarts.map((cart) => (
                  <Cart cart={cart} key={cart.id} />
                ))}
              </div>
            </>
          )}
          <div class="flex items-center justify-center py-10 bg-gray-100">
            {currentIndex < carts.length && (
              <button
                onClick={handleSeeMoreClick}
                className="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300 "
              >
                See More
              </button>
            )}
          </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
};

export default Carts;
