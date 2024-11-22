import { Link } from "react-router-dom";
import { IoSearch, IoCartOutline, IoClose,IoStarOutline,IoCloseCircleOutline   } from "react-icons/io5";
import { FaRegHeart, FaBarsStaggered } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

import { useContext, useState } from "react";
import { StoreCard } from "../../Context/Store";

function Navbar() {
  const [show, setShow] = useState(false);
  const { cart, wishList } = useContext(StoreCard);
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className=" container  mt-10 mb-4 lg:px-0 px-4 z-10">
        <nav className="flex justify-between items-center">
          <Link to={"/"} className="font-bold text-2xl font-inter">
            Exclusive
          </Link>

          <ul className="md:flex hidden lg:gap-12 gap-8">
            <li>
              <Link className="text-base font-normal hover:underline" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal hover:underline"
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal hover:underline"
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal hover:underline"
                to={"/sign up"}
              >
                Sign Up
              </Link>
            </li>
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
            {localStorage.getItem("users") && (
              <div className="relative">
                <Link>
                  <LuUser2 className=" w-8 h-8 cursor-pointer font-medium" onClick={()=> setShowMenu(!showMenu)} />
                </Link>
                {showMenu && 
                  <div className="absolute z-10 right-2 w-56 p-5 bg-gradient-to-bl from-zinc-900 to-fuchsia-400 rounded-md backdrop-blur-md bg-white/30">
                  <ul className="text-white  space-y-4 ">
                    <li className="flex items-center gap-2 text-sm"><LuUser2 className="w-6 h-6"/><Link to={'/account'}>Manage My Account</Link></li>
                    <li className="flex items-center gap-2 text-sm"><FiShoppingBag className="w-6 h-6"/><Link to={'/cart'}> My Order</Link></li>
                    <li className="flex items-center gap-2 text-sm"><IoCloseCircleOutline className="w-6 h-6" /><Link>My Cancellations</Link></li>
                    <li className="flex items-center gap-2 text-sm"><IoStarOutline className="w-6 h-6"/><Link>My Reviews</Link></li>
                    <li className="flex items-center gap-2 text-sm"><CiLogout className="w-6 h-6"/><Link to={'/login'}>Logout</Link></li>
                  </ul>
                </div>
                }
              </div>
            )}
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
                <li className="my-8 border-b pb-4">
                  <Link className="text-base font-normal hover:underline ">
                    Home
                  </Link>
                </li>
                <li className="my-8 border-b pb-4">
                  <Link className="text-base font-normal hover:underline ">
                    Contact
                  </Link>
                </li>
                <li className="my-8 border-b pb-4">
                  <Link className="text-base font-normal hover:underline ">
                    About
                  </Link>
                </li>
                <li className="my-8 border-b pb-4">
                  <Link className="text-base font-normal hover:underline ">
                    Sign Up
                  </Link>
                </li>
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
