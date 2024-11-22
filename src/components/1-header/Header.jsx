import { FaAngleDown } from "react-icons/fa6";
import Navbar from "./Navbar";
function Header() {
  return (
    <header>
      <div className="bg-black text-white h-12">
        <div className="container flex justify-between  md:gap-2 mx-auto py-3">
          <div className="flex gap-2">
            <p className="font-normal md:text-sm text-xs">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a href="#" className="md:text-sm text-xs"><u>ShopNow</u></a>
          </div>
          <h3 className="flex self-start items-center gap-2 md:text-sm text-xs font-semibold">English <span><FaAngleDown/></span></h3>
        </div>
      </div>
      <Navbar />
    </header>
  )
}

export default Header 