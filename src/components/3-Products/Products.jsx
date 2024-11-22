import Time from "./Time";
import SliderProducts from "./SliderProducts";
import Button from "../Button/Button";

function Products() {
  
  return (
    <section className="lg:container mx-auto lg:mt-36 mt-20">
      <Time />
      <SliderProducts />
      <Button text={" View All Products"}/>
      <hr className="my-16"/>
    </section>
  );
}
  
export default Products;
