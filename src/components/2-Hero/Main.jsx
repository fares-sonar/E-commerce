import { FaArrowRight } from "react-icons/fa6";
function Main() {
  return (
    <div className="flex relative justify-center bg-black md:w-[80%] w-full text-white lg:m-[2rem,0,2rem,2rem] md:m-4 lg:p-9 p-4 ">
      <div className="">
        <div className="flex items-center gap-6">
          <img src="images/apple.webp" alt="apple" width={48} height={12} />
          <h3>iPhone 14 Series</h3>
        </div>
        <h1 className="md:text-[48px] sm:text-[32px] text-[22px] font-semibold my-4 tracking-widest">
          Up to 10% <br /> off Voucher
        </h1>
        <div className="flex items-center gap-2 mb-8">
          <button className="border-b">Shop Now</button>
          <FaArrowRight />
        </div>
      </div>
      <figure className=" hidden lg:flex flex-1 lg:justify-center lg:items-center">
        <img className="object-contain" src="images/phone.webp" alt="phone" width={400} height={280} />
      </figure>
      <ul className="absolute flex left-[50%] -translate-x-[50%] bottom-2 space-x-2">
        {Array.from({ length: 5 }).map((__, i) =>
          i === 2 ? (
            <li
              key={i}
              className="w-3 h-3 rounded-[50%] bg-red-500 border border-white"
            />
          ) : (
            <li key={i} className="w-3 h-3 rounded-[50%] bg-gray-500 " />
          )
        )}
      </ul>
    </div>
  );
}

export default Main;
