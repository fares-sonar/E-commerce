import { useContext } from "react";
import { StoreCard } from "../../Context/Store";
import { IoEyeOutline } from "react-icons/io5";

import FormatCurrency from "../../components/Format/FormatCurrency";
import { FaStar } from "react-icons/fa";

function See() {
  const { seeList, dispatchSeeList, dispatch, truncateText } =
    useContext(StoreCard);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7 mt-8">
      {seeList.map((products) => {
        return (
          <div className="" key={products.id}>
            <div className="group shadow relative p-4">
              <img
                className="w-[190px] h-[180px] mx-auto"
                src={products.image}
                alt="product"
              />
              <div className="absolute top-4 right-4">
                <span>
                  <IoEyeOutline
                    className="w-[24px] h-[24px]"
                    onClick={() => {  
                      dispatchSeeList({
                        id: products.id,
                        type: "remove",
                      });
                    }}
                  />
                </span>
              </div>
              <button
                onClick={() => {
                  dispatch({ products: products, type: "add" });
                }}
                className="text-center border w-full bg-black text-white py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Add To Card
              </button>
            </div>
            <div className="mt-4">
              <p className="text-base font-medium">
                {truncateText(products.title, 20)}
              </p>
              <h3 className="text-lightRed my-2">
                {FormatCurrency(products.price)}{" "}
                <span className="line-through ml-4 text-base text-gray-300">
                  {Math.floor(products.price * 1.5)}
                </span>
              </h3>
              <div className="flex gap-1">
                {[...Array(Math.ceil(products.rating.rate))].map((_, index) => (
                  <FaStar key={index} className="text-orange-400" />
                ))}
                <span className="ml-3">({products.rating.count})</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default See;
