import Title from "../Title/Title";
import { feature } from "../../constants";

const Arrival = () => {
  const gridClasses = [
    "lg:row-span-2",
    "md:row-span-1",
    "lg:col-span-2",
    "md:col-span-1",
  ].join(" ");

  const getGridClass = (index) => {
    if (index === 0) return gridClasses;
    if (index === 1) return "lg:col-span-2";
    return "col-span-1";
  };
  return (
    <section className="my-16">
      <Title title={"New Arrival"} text={"Featured"} />
      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {feature.map((item, i) => (
          <figure
            key={item.id || i}
            className={`bg-black relative ${getGridClass(i)}`}
          >
            <img
              className="w-full h-full object-contain"
              src={item.imgUrl}
              alt={item.text}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 left-8 text-white">
              <h2 className="lg:text-2xl font-semibold">{item.text}</h2>
              <p className="text-sm my-2">{item.decs}</p>
              <a href="#">
                <u>{item.link}</u>
              </a>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Arrival;
