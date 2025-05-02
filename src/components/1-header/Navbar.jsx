import { Link } from "react-router-dom";
import { IoSearch, IoCartOutline, IoClose } from "react-icons/io5";
import { FaRegHeart, FaBarsStaggered } from "react-icons/fa6";

import { useContext, useState } from "react";
import { StoreCard } from "../../Context/Store";
import UserMenu from "./UserMenu";

function Navbar() {
  const [show, setShow] = useState(false);
  const { cart, wishList } = useContext(StoreCard);

  const links = [
    { text: "Home", to: "/" },
    { text: "contact", to: "/contact" },
    { text: "About", to: "/about" },
    { text: "Sign Up", to: "/sign up" },
  ];

  return (
    <>
      <div className=" container  mt-10 mb-4 lg:px-0 px-4 z-10">
        <nav className="flex justify-between items-center">
          <Link to={"/"} className="font-bold text-2xl font-inter">
            Exclusive
          </Link>

          <ul className="md:flex hidden lg:gap-12 gap-8">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  className="text-base font-normal hover:underline"
                  to={link.to}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:flex hidden items-center gap-4">
            <div className="flex items-center bg-gray-100 rounded-s p-3 gap-8">
              <input
                className="outline-none bg-transparent text-xs font-normal"
                type="text"
                placeholder="What are you looking for ?"
              />
              <IoSearch className="w-6 h-6" />
            </div>
            <div className="flex gap-4 items-center">
            <Link to={"/wish-list"} className="relative">
              <FaRegHeart className=" w-8 h-8" />
              <div className="absolute flex justify-center items-center w-5 h-5 -top-2 -right-2 bg-lightRed rounded-full  ">
                <span className="text-white text-sm">{wishList.length}</span>
              </div>
            </Link>
            <Link to={"/cart"} className="relative">
              <IoCartOutline className=" w-8 h-8 cursor-pointer" />
              <div className="absolute flex justify-center items-center w-5 h-5 -top-2 -right-2 bg-lightRed rounded-full  ">
                <span className="text-white text-sm">{cart.length}</span>
              </div>
            </Link>
            </div>
            {localStorage.getItem("users") && <UserMenu />}
          </div>

          <FaBarsStaggered
            className="md:hidden block cursor-pointer"
            onClick={() => {
              setShow(!show);
            }}
          />
        </nav>

        {show && (
          <nav className="fixed inset-0 bg-white z-20">
            <div className="w-full mx-auto">
              <IoClose
                className="absolute top-4 right-4 text-2xl"
                onClick={() => {
                  setShow(!show);
                }}
              />

              <ul className=" w-full text-center">
                {links.map((link, i) => (
                  <li key={i} className="my-8 border-b pb-4">
                    <Link className="text-base font-normal hover:underline ">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className=" flex items-center gap-4 mb-4">
                <div className="flex items-center max-w-60 bg-gray-100 rounded-s p-3 gap-8">
                  <input
                    className="outline-none bg-transparent text-xs font-normal"
                    type="text"
                    placeholder="What are you looking for?"
                  />
                  <IoSearch className="w-6 h-6" />
                </div>
                <FaRegHeart className=" w-8 h-8" />
                <IoCartOutline className=" w-8 h-8 cursor-pointer" />
              </div>
            </div>
          </nav>
        )}
      </div>
      <hr />
    </>
  );
}
export default Navbar;
