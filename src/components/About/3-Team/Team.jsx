/* eslint-disable react/jsx-key */
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
const team = [
  {
    img: "images/person-1.webp",
    name: "Tom Cruise",
    position: "Founder & Chairman",
    media: [<FaFacebookF />, <CiTwitter />, <IoLogoInstagram />],
  },
  {
    img: "images/person-2.webp",
    name: "Emma Watson",
    position: "Managing Director",
    media: [<FaFacebookF />, <CiTwitter />, <IoLogoInstagram />],
  },
  {
    img: "images/person-3.webp",
    name: "Will Smith",
    position: "Product Designer",
    media: [<FaFacebookF />, <CiTwitter />, <IoLogoInstagram />],
  },
];
const Team = () => {
  return (
    <section className="my-32">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {team.map((team, i) => (
          <div key={i}>
            <figure className="bg-gray-100 max-h-[430px] pt-8 flex justify-center">
              <img
                className=" h-[392px] object-contain"
                src={team.img}
                alt="person"
                loading="lazy"
              />
            </figure>
            <div className="mt-4">
              <h2 className="text-3xl font-medium">{team.name}</h2>
              <p className="my-2">{team.position}</p>
              <div className="flex gap-4">
                {team.media.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
