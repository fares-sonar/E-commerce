import { times } from "../../constants";
const MusicTime = () => {
  return (
    <>
      {times.map((time) => (
        <div
          key={time.text}
          className="flex flex-col justify-center items-center  bg-white text-black w-[100px] h-[100px] rounded-full"
        >
          <h3 className="font-semibold text-2xl">{time.hours}</h3>
          <span className="text-xl font-normal">{time.text}</span>
        </div>
      ))}
    </>
  );
};

export default MusicTime;
