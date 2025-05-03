import { lazy } from "react";
import FetchDataContext from "../Context/FetchDataContext";
const lazyLoad = (path) => lazy(() => import(`../components/${path}`));
const Hero = lazyLoad("2-Hero/Hero.jsx");
const Products = lazyLoad("3-Products/Products.jsx");
const Category = lazyLoad("4-Category/Category.jsx");
const Selling = lazyLoad("5-Selling/Selling.jsx");
const Music = lazyLoad("6-Music/Music.jsx");
const Explore = lazyLoad("7-Explore/Explore.jsx");
const Arrival = lazyLoad("8-Arrival/Arrival.jsx");
const Services = lazyLoad("9-Services/Services.jsx");

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
