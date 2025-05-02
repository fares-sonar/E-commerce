import { IoIosArrowForward } from "react-icons/io";
import { categories } from "../../constants";
const Aside = () => {
  return (
    <>
      <aside className="lg:w-[20%] md:w-[30%] w-full ">
        <ul className="md:block hidden flex-wrap items-center lg:gap-0 gap-2 lg:space-y-4 md:space-y-2 space-y-0 pt-4 pr-4 lg:border-r md:border-r-none lg:text-start text-center">
          {categories.map((category) => {
            if (category.id === 1 || category.id === 2) {
              return (
                <li
                  key={category.id}
                  className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0 p-2 lg:w-fit w-[180px]"
                >
                  {category.text}
                  <span>
                    <IoIosArrowForward className="lg:inline hidden ml-2" />
                  </span>
                </li>
              );
            } else {
              return (
                <li
                  key={category.id}
                  className="lg:text-base text-sm lg:border-none border lg:m-0 lg:p-0 p-2 lg:w-fit w-[180px]"
                >
                  {category.text}
                </li>
              );
            }
          })}
        </ul>
      </aside>
    </>
  );
};

export default Aside;
