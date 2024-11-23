import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import PreArrow from "./PrevArrow";
import NextArrow from "./Nextarrow";
import { FaStar } from "react-icons/fa";
import FormatCurrency from "../Format/FormatCurrency";
import { useContext } from "react";
import { StoreCard } from "../../Context/Store";
import { useNavigate } from "react-router-dom";
function SliderProducts() {
  const navigate = useNavigate();
  const { data, dispatch, dispatchWishList, dispatchSeeList } =
    useContext(StoreCard);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <>
      <div className="my-9">
        <Slider {...settings}>
          {data.map((products) => {
            return (
              <div className="" key={products.id}>
                <div className="group shadow relative mx-4 p-4">
                  <img
                    width={"190"}
                    height={"180"}
                    className=" w-[190px] h-[180px] mx-auto"
                    src={products.image}
                    alt="product"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <span>
                      <CiHeart
                        className="w-[24px] h-[24px]"
                        onClick={() => {
                          if (localStorage.getItem("users")) {
                            dispatchWishList({
                              products: products,
                              type: "add",
                            });
                          } else {
                            navigate("/login", { replace: true });
                          }
                        }}
                      />
                    </span>
                    <span>
                      <IoEyeOutline
                        className="w-[24px] h-[24px]"
                        onClick={() => {
                          if (localStorage.getItem("users")) {
                            dispatchSeeList({
                              products: products,
                              type: "add",
                            });
                          } else {
                            navigate("/login", { replace: true });
                          }
                        }}
                      />
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      if(localStorage.getItem("users")){
                        dispatch({ products: products, type: "add" });
                      }else{
                        navigate("/login", { replace: true });

                      }
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
                    {[...Array(Math.ceil(products.rating.rate))].map(
                      (_, index) => (
                        <FaStar key={index} className="text-orange-400" />
                      )
                    )}
                    <span className="ml-3">({products.rating.count})</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default SliderProducts;
