import FetchDataContext from "../Context/FetchDataContext";
import {
  Hero,
  Products,
  Category,
  Selling,
  Music,
  Explore,
  Arrival,
  Services,
} from "../components";

function Home() {
  return (
    <>
      <div className="container px-4">
        <Hero />
        <FetchDataContext>
          <Products />
          <Category />
          <Selling />
          <Music />
          <Explore />
        </FetchDataContext>
        <Arrival />
        <Services />
      </div>
    </>
  );
}

export default Home;
