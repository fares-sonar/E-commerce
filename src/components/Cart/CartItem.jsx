import { useContext } from "react";
import  FormatCurrency  from "../Format/FormatCurrency";
import { StoreCard } from "../../Context/Store";
import { MdArrowDropUp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

export const CartItem = () => {
  const { cart, dispatch } = useContext(StoreCard);

  const increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "increase", id });
    }
  };
  const decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "decrease", id });
    }
  };
  return (
    <>
      <table className="w-full mt-24">
        <tbody>
          <tr className="flex justify-between items-center shadow-sm p-4">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>

          {cart.map((product) => (
            
              <tr
                key={product.id}
                className="flex relative justify-between items-center mt-8 shadow-sm p-4"
              >
                <td>
                  <img
                    className="w-16 object-contain"
                    src={product.image}
                    alt=""
                  />
                </td>
                <td>{FormatCurrency(product.price)}</td>

                <td className="flex items-center gap-3">
                  
                    {product.quantity}
                    <div className="flex flex-col">
                      <button onClick={() => increase(product.id)}>
                        <MdArrowDropUp />
                      </button>
                      <button onClick={() => decrease(product.id)}>
                        <IoMdArrowDropdown />
                      </button>
                    </div>
                  
                </td>
                <td>{FormatCurrency(product.price * product.quantity)}</td>
                <button
                  onClick={() => dispatch({ type: "remove", id: product.id })}
                  className="absolute flex justify-center items-center cursor-pointer top-0 bg-lightRed rounded-full w-4 h-4 p-1"
                >
                  <span className="text-white text-sm">x</span>
                </button>
              </tr>
            
          ))}
        </tbody>
      </table>
    </>
  );
};
