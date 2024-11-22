import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";

const icons = [
  {icon:<TbTruckDelivery/>, title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140"},
  {icon:<RiCustomerServiceLine/>, title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support"},
  {icon:<GoShieldCheck/>, title: "MONEY BACK GUARANTEE", text: "We reurn money within 30 days"}
]
function Services() {
  return (
    <section className="my-32">
      <div className="flex flex-wrap justify-center gap-[88px]">
        {icons.map((item)=>(
          <div key={item.title}>
              <div className="text-white bg-gray-300 w-[80px] h-[80px] mx-auto flex justify-center items-center rounded-full mb-4">
                <span className="text-3xl bg-black p-4 rounded-full">{item.icon}</span>
              </div>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services