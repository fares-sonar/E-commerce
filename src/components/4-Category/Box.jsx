import { LuGamepad } from "react-icons/lu";
import {
  IoPhonePortraitOutline,
  IoWatchOutline,
  IoCameraOutline,
} from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { HiMiniComputerDesktop } from "react-icons/hi2";
function Box() {
  const category = [
    { icon: <IoPhonePortraitOutline />, name: "Phones" },
    { icon: <HiMiniComputerDesktop />, name: "Computers" },
    { icon: <IoWatchOutline />, name: "SmartWatch" },
    { icon: <IoCameraOutline />, name: "Camera" },
    { icon: <CiHeadphones />, name: "HeadPhones" },
    { icon: <LuGamepad />, name: "Gaming" },
  ];
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-8 mt-10">
      {category.map((category) => (
        <div
          key={category.name}
          className="border w-44 h-36 p-8 flex flex-col justify-center items-center gap-4 hover:bg-lightRed transition-all hover:text-white"
        >
          <span className="text-5xl">{category.icon}</span>
          <h3 className="text-base font-normal">{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Box;
