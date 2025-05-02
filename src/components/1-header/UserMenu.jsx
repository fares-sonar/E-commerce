import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

import { IoStarOutline, IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const userMenuInfo = [
    {
      icon: <LuUser2 className="w-6 h-6" />,
      text: "Manage My Account",
      to: "/account",
    },
    {
      icon: <FiShoppingBag className="w-6 h-6" />,
      text: "My Order",
      to: "/cart",
    },
    {
      icon: <IoCloseCircleOutline className="w-6 h-6" />,
      text: "My Cancellations",
      to: "/",
    },
    {
      icon: <IoStarOutline className="w-6 h-6" />,
      text: "My Reviews",
      to: "/",
    },
    { icon: <CiLogout className="w-6 h-6" />, text: "Logout", to: "/login" },
  ];
  return (
    <div className="relative">
      <Link aria-label="The user menu">
        <LuUser2
          className=" w-8 h-8 cursor-pointer font-medium"
          onClick={() => setShowMenu(!showMenu)}
        />
      </Link>
      {showMenu && (
        <div className="absolute z-10 right-2 w-56 p-5 bg-gradient-to-bl from-zinc-900 to-fuchsia-400 rounded-md backdrop-blur-md bg-white/30">
          <ul className="text-white  space-y-4 ">
            {userMenuInfo.map((link, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                {link.icon}
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
