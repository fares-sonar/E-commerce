import { IoIosArrowForward } from "react-icons/io";

function Aside() {
  return (
    <>
      <aside className="lg:w-[20%] md:w-[30%] w-full ">
        <ul className="md:block hidden flex-wrap items-center lg:gap-0 gap-2 lg:space-y-4 md:space-y-2 space-y-0 pt-4 pr-4 lg:border-r md:border-r-none lg:text-start text-center">
          <li className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0 p-2 lg:w-fit w-[180px]">
            Woman’s Fashion{" "}
            <span>
              <IoIosArrowForward className="lg:inline hidden ml-2" />
            </span>
          </li>
          <li className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0 p-2 lg:w-fit w-[180px]">
            Men’s Fashion{" "}
            <span>
              <IoIosArrowForward className="lg:inline hidden ml-2" />
            </span>
          </li>
          <li className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0  p-2 lg:w-fit w-[180px]">
            Electronics
          </li>
          <li className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0  p-2 lg:w-fit w-[180px]">
            Home & Lifestyle
          </li>
          <li className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0  p-2 lg:w-fit w-[180px]">
            Medicine
          </li>
          <li className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0  p-2 lg:w-fit w-[180px]">
            Sports & Outdoor
          </li>
          <li className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0  p-2 lg:w-fit w-[180px]">
            Baby’s & Toys
          </li>
          <li className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0  p-2 lg:w-fit w-[180px]">
            Groceries & Pets
          </li>
          <li className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0  p-2 lg:w-fit w-[180px]">
            Health & Beauty
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Aside;
