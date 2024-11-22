/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa6";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-14 rounded-full text-gray-500 bg-gray-300 bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute lg:-top-[35%] top-[35%] right-2"
      onClick={onClick}
    >
      <span>
        <FaArrowRight />
      </span>
    </div>
  );
};

export default NextArrow;
