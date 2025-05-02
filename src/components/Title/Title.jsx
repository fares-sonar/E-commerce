/* eslint-disable react/prop-types */
const Title=({ title, text })=> {
  return (
    <div className="flex  flex-col space-y-6 ">
      <div className="flex items-center gap-4 ">
        <div className="w-5 h-10 rounded-[4px] bg-lightRed" />
        <h2 className="text-lightRed text-3xl font-semibold">{text}</h2>
      </div>
      <h2 className="lg:text-5xl md:text-3xl font-semibold font-inter">
        {title}
      </h2>
    </div>
  );
}

export default Title;
