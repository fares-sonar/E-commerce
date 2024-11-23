
import { Link } from "react-router-dom";
import Page_Title from "../components/About/Page-Title/Page_Title";
import Button from "../components/Button/Button";
import { CartItem } from "../components/Cart/CartItem";
import { totalPrice } from "../Context/CartReducer";
import { StoreCard } from "../Context/Store";
import { useContext } from "react";
import  FormatCurrency  from "../components/Format/FormatCurrency";

export const Cart = () => {
  const { cart } = useContext(StoreCard);

  return (
    <>
      <section className="container lg:px-0 px-4">
        <div className="my-28">
          <Page_Title text={"Cart"} />

          <CartItem />

          <div className="flex justify-between items-center mt-8">
            <button className="border-black border-2 py-3 px-8">
              <Link to={'/'}>Return To Shop</Link>
            </button>
            <button className="border-black border-2 py-3 px-8">
              Update Cart
            </button>
          </div>
          <div className=" flex justify-between items-start mt-14">
            <div className=" space-y-8">
              <input
                type="text"
                placeholder="Coupon Code"
                className="py-4 px-8  rounded-[4px] outline-none border"
              />
              <Button text={"Apply Coupon"} />
            </div>
            <div className="p-4 border w-[500px]">
              <h2>Cart Total</h2>
              <h3 className="flex justify-between items-center border-b pb-2 mt-4">
                Subtotal: <span>{FormatCurrency(totalPrice(cart))}</span>
              </h3>
              <h3 className="flex justify-between items-center border-b pb-2 mt-4">
                Shopping: <span>Free</span>
              </h3>
              <h3 className="flex justify-between items-center  pb-2 mt-4">
                Total: <span>{FormatCurrency(totalPrice(cart))}</span>
              </h3>
              <div className="mt-4 text-center">
                <Link to={'/check-out'}>
                  <Button text={"Process to checkout"} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
