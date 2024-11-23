import Aside from "./Aside";
import Main from "./Main";

function Hero() {
  return (
    <section className="flex md:flex-row flex-col justify-center  gap-4 lg:px-0 px-4">
      <Aside />
      <Main />
    </section>
  );
}

export default Hero;
