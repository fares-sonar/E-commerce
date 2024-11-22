import Hero from "../components/2-Hero/Hero";
import Products from "../components/3-Products/Products";
import Category from "../components/4-Category/Category";
import Selling from "../components/5-Selling/Selling";
import Music from "../components/6-Music/Music";
import Explore from "../components/7-explore/Explore";
import Arrival from "../components/8-Arrival/Arrival";
import Services from "../components/9-Services/Services";

function Home() {
  return (
    <>
      <div className="container px-4">
        <Hero />
        <Products  />
        <Category />
        <Selling  />
        <Music />
        <Explore  />
        <Arrival />
        <Services />
      </div>
    </>
  );
}

export default Home;
