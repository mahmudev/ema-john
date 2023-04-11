import React, { useState } from "react";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
      <div className="flex items-center border-gray-100">
        <span
          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
          onClick={handleDecrement}
        >
          {" "}
          -{" "}
        </span>
        <input
          className="h-8 w-8 border bg-white text-center text-xs outline-none"
          type="number"
          value={quantity}
          min={1}
          onChange={handleQuantityChange}
        />
        <span
          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
          onClick={handleIncrement}
        >
          {" "}
          +{" "}
        </span>
      </div>
    </div>
  );
};

export default QuantityInput;
