/* eslint-disable react/prop-types */

const Button = ({ text }) => {
  return (
    <button className="bg-red-500 text-white py-4 px-8  rounded-[4px]">
      {text}
    </button>
  );
};

export default Button;
