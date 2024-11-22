import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { StoreCard } from "../../Context/Store";
import { useContext } from "react";

function BestProducts() {
  const { data } = useContext(StoreCard);
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-8">
      {data.slice(10, 14).map((products) => {
        return (
          <div className="" key={products.id}>
            <div className="group py-4 shadow relative p-4">
              <img
                className="w-[190px] h-[180px] mx-auto"
                src={products.image}
                alt="product"
              />
              <div className="absolute top-4 right-2">
                <span>
                  <CiHeart className="w-[24px] h-[24px]" />
                </span>
                <span>
                  <IoEyeOutline className="w-[24px] h-[24px]" />
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-base font-medium">
                {products.title.length > 20
                  ? products.title.slice(0, 20) + "..."
                  : products.title}
              </p>
              <h3 className="text-lightRed my-2">
                ${products.price}{" "}
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

export default BestProducts;
