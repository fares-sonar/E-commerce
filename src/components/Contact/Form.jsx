import Page_Title from "../About/Page-Title/Page_Title";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../Button/Button"

export const Form = () => {
  return (
    <section className="my-40">
      <Page_Title text={"About"} />
      <div className="flex lg:flex-row flex-col  gap-8 mt-10 ">

        <div className="bg-white shadow-lg p-10">
          <div className="space-y-4"> 
            <div className="flex items-center gap-4">
              <span className=" flex justify-center items-center w-10 h-10 rounded-full text-white bg-lightRed"><LuPhone/></span>
              <h3 className="font-medium">Call To Us</h3>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
          </div>

          <hr className="my-8"/>

          <div className="space-y-4"> 
            <div className="flex items-center gap-4">
              <span className=" flex justify-center items-center w-10 h-10 rounded-full text-white bg-lightRed"><MdOutlineEmail/></span>
              <h3 className="font-medium">Write To US</h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>

        </div>

        <div className="flex-1 bg-white shadow-lg p-10">
          <form action="">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <input className="bg-gray-100 p-3 outline-none" type="text" placeholder="Your Name"/>
            <input className="bg-gray-100 p-3 outline-none" type="email" placeholder="Your Email"/>
            <input className="bg-gray-100 p-3 outline-none" type="phone" placeholder="Your Phone"/>
          </div>
          <textarea className="mt-4 bg-gray-100 p-3 w-full outline-none" rows={8} placeholder="Your Massage"></textarea>
          <Button text={"Send Massage"}/>
          </form>

        </div>

      </div>
    </section>
  );
};
