import { useContext, useState } from "react";
import { StoreCard } from "../../Context/Store";
import formatCurrency from "../../utils/formatCurrency";
import { totalPrice } from "../../Context/CartReducer";
import Button from "../Button/Button";
import { images } from "../../constants";
const OrderSummary = () => {
  const [couponCode, setCouponCode] = useState("");
  const { cart } = useContext(StoreCard);
  const subtotal = formatCurrency(totalPrice(cart));
  const shipping = 0;
  const total = subtotal + shipping;
  const infoPayment = [
    { text: "Subtotal:", price: `$${subtotal}` },
    { text: "Shipping:", price: "Free" },
    { text: "Total:", price: `$${total}` },
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
      <div className="space-y-4">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt="image"
                loading="lazy"
                className="w-8 h-8 text-gray-600"
              />
              <h3 className="font-medium">{item.title}</h3>
            </div>
            <span className="font-semibold">
              {formatCurrency(item.price * item.quantity)}
            </span>
          </div>
        ))}

        <div>
          {infoPayment.map((info, i) => (
            <div
              key={i}
              className={`flex justify-between py-2 ${
                i === 2 ? "border-t border-b" : ""
              }`}
            >
              <span className={`text-gray-600 font-medium`}>{info.text}</span>
              <span
                className={`${
                  i === 1 ? "text-green-600" : "text-gray-600"
                } font-bold`}
              >
                {info.price}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between space-x-4">
            <div className="flex items-center gap-4">
              <input
                type="radio"
                id="bank"
                name="paymentMethod"
                value="bank"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="font-medium">Bank</span>
            </div>
            <label htmlFor="bank" className="flex">
              <figure className="flex space-x-2 mt-2">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img.url}
                    loading="lazy"
                    alt={img.desc}
                    className="h-7 w-12 object-contain"
                  />
                ))}
              </figure>
            </label>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="cash" className="font-medium">
              Cash on delivery
            </label>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:space-x-2 space-x-0 sm:space-y-2">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="md:flex-1 flex-shrink-0 rounded-md bg-gray-100 py-4 px-8 shadow-sm outline-none"
          />

          <Button text={"Apply Coupon"} />
        </div>
        <Button text={"Place Order"} />
      </div>
    </div>
  );
};
export default OrderSummary;
