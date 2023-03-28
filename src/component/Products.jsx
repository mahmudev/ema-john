import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { addToDb } from "./fakeDb";
import Product from "./Product";

const Products = () => {
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);
  const [visibleCarts, setVisibleCarts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 20;

  useEffect(() => {
    setIsLoading(true);
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    setVisibleCarts(products.slice(0, itemsPerPage));
    setCurrentIndex(itemsPerPage);
  }, [products, itemsPerPage]);

  const handleSeeMoreClick = () => {
    const nextIndex = currentIndex + itemsPerPage;
    setVisibleCarts(products.slice(0, nextIndex));
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <div className=" bg-gray-100 sm:grid grid-cols-5 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
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
              <div className="grid grid-flow-row gap-5 text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {visibleCarts.map((product) => (
                  <Product
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            </>
          )}
          <div class="flex items-center justify-center py-10 bg-gray-100">
            {currentIndex < products.length && (
              <button
                onClick={handleSeeMoreClick}
                className="text-lg block font-semibold py-2 px-6 text-black bg-[#95A0A7] rounded-lg shadow hover:shadow-md transition duration-300 "
              >
                See More
              </button>
            )}
          </div>
        </div>

        <div className="col-span-1">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Products;
