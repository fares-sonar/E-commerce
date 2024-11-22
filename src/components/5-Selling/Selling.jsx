import Title from "../Title/Title";
import Button from "../Button/Button";
import BestProducts from "./BestProducts";
function Selling() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <Title title={"Best Selling Products"} text={"This Month"} />
        <Button text={"View All"} />
      </div>
      <BestProducts />
    </section>
    
  );
}

export default Selling;
