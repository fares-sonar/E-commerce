/* eslint-disable react/jsx-key */
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { RiSendPlane2Line } from "react-icons/ri";

const data = [
  {
    head: "Exclusive",
    title: "Subscribe",
    paragraph: "Get 10% off your first order",
    icon: <RiSendPlane2Line/>,
  },
  {
    head: "Support",
    info:[`111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.`,"exclusive@gmail.com","+88015-88888-9999"],
  },
  {
    head: "Account",
    list: ["My Account", "Login / Register", "Cart", "Wishlist", "shop"],
  },
  {
    head: "Quick Link",
    list: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
  },
  {
    head: "Download App",
    paragraph: "Save $3 with App New User Only",
    icons: [
      <FaFacebookF />,
      <CiTwitter />,
      <IoLogoInstagram />,
      <FaLinkedinIn />,
    ],
  },
];
export default data;
