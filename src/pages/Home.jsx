import { lazy } from "react";
import FetchDataContext from "../Context/FetchDataContext";
const lazyLoad = (path) => lazy(() => import(`../components/${path}`));
const Hero = lazyLoad("2-Hero/Hero");
const Products = lazyLoad("3-Products/Products");
const Category = lazyLoad("4-Category/Category");
const Selling = lazyLoad("5-Selling/Selling");
const Music = lazyLoad("6-Music/Music");
const Explore = lazyLoad("7-Explore/Explore");
const Arrival = lazyLoad("8-Arrival/Arrival");
const Services = lazyLoad("9-Services/Services");

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
