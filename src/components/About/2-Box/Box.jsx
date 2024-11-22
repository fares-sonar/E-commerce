import { CiShop } from "react-icons/ci";
import { PiCurrencyCircleDollarThin } from "react-icons/pi";
import { CiGift } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";

function Box() {
  const icons = [
    {icon:<CiShop/>, title: "10.5k ", text: "Sallers active our site"},
    {icon:<PiCurrencyCircleDollarThin/>, title: "33k", text: "Mopnthly Produduct Sale"},
    {icon:<CiGift/>, title: "45.5k", text: "Customer active in our site"},
    {icon:<FaSackDollar/>, title: "25k", text: "Anual gross sale in our site"}
  ]
  return (
    
    <section className="my-32">
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-8">
      {icons.map((item)=>(
        <div key={item.title} className="group border rounded-md text-center p-8 hover:bg-lightRed transition-all">
            <div className="text-white group-hover:text-black bg-gray-300 w-[80px] h-[80px] mx-auto flex justify-center items-center rounded-full mb-4">
              <span className="text-3xl bg-black group-hover:bg-white p-4 rounded-full">{item.icon}</span>
            </div>
          <h2 className="text-xl font-semibold group-hover:text-white">{item.title}</h2>
          <p className="text-sm mt-2 group-hover:text-white">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Box