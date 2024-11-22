/* eslint-disable react/prop-types */

function Button({ text }) {
  return (
    <button className="bg-lightRed text-white py-4 px-8  rounded-[4px]">
      {text}
    </button>
  );
}

export default Button;
