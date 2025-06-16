import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/payment", { state: { item } });
  };

  return (
    <div className="p-3">
      <div className="card h-[400px] w-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-[200px] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-base">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-sm">{item.title}</p>
          <div className="card-actions justify-between mt-auto">
            <div className="badge badge-outline">Rs {item.price}</div>
            <div
              onClick={handleBuyNow}
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
