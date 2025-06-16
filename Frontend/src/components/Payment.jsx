import React from "react";
import { useLocation } from "react-router-dom";

function Payment() {
  const { state } = useLocation();
  const item = state?.item;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      {item ? (
        <div className="p-4 border rounded shadow-md max-w-md">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl">{item.name}</h2>
          <p className="mb-2">{item.title}</p>
          <p className="font-semibold">Price: Rs {item.price}</p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Proceed to Pay
          </button>
        </div>
      ) : (
        <p>No product selected.</p>
      )}
    </div>
  );
}

export default Payment;
