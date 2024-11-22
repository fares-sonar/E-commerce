import { useEffect, useState } from "react";
import Aside from "./Aside";
import Main from "./Main";

function Hero() {
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
    <section className="flex md:flex-row flex-col justify-center  gap-4 lg:px-0 px-4">
      <Aside />
      <Main />
      {show && (
        <div
          onClick={() => scrollUp()}
          className="bg-lightRed fixed bottom-2 right-4 p-2 rounded-full cursor-pointer"
        >
          <span className="text-white">up</span>
        </div>
      )}
    </section>
  );
}

export default Hero;
