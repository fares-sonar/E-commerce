/* eslint-disable react/prop-types */
function Title({title,text}) {
  return (
    <div className="flex  flex-col space-y-6 ">
      <div className="flex items-center gap-4 ">
        <div className="w-5 h-10 rounded-[4px] bg-lightRed" />
        <h3 className="text-lightRed font-semibold">{text}</h3>
      </div>
      <h2 className="lg:text-5xl md:text-3xl text-xl font-semibold font-inter">
        {title}
      </h2>
    </div>
  );
}

export default Title;
