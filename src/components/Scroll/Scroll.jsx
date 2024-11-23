import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
function Scroll() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {show && (
        <div
          onClick={() => scrollUp()}
          className="bg-lightRed fixed bottom-2 right-4 p-2 rounded-full cursor-pointer"
        >
          <span className="text-white">
            <FaArrowUp />
          </span>
        </div>
      )}
    </>
  );
}

export default Scroll;
