import { lazy } from "react";
import Button from "../Button/Button";

const Time = lazy(() => import("./Time"));
const SliderProducts = lazy(() => import("./SliderProducts.jsx"));

function Products() {
  return (
    <section className="lg:container mx-auto lg:mt-36 mt-20">
      <Time />
      <SliderProducts />
      <Button text={" View All Products"} />
      <hr className="my-16" />
    </section>
  );
}

export default Products;
