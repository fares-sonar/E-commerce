import { useContext } from "react";
import Wish from "../components/WishList/Wish";
import See from "../components/WishList/See";
import { StoreCard } from "../Context/Store";

export const WishList = () => {
  const { wishList } = useContext(StoreCard);
  return (
    <section className="container lg:px-0 px-4 my-16">

      <div className="flex justify-between mb-8">
        <h2>
          Wishlist <span>({wishList.length})</span>
        </h2>
        <button className="border-2 py-2 px-6">Move All To Bag</button>
      </div>

      <Wish />

      <div className="flex justify-between my-16">
        <div className="flex items-center gap-4 ">
          <div className="w-5 h-10 rounded-[4px] bg-lightRed" />
          <h3 className=" text-xl font-normal">Just For You</h3>
        </div>
        <button className="border-2 py-2 px-6">See All</button>
      </div>
      
      <See/>
    </section>
  );
};
