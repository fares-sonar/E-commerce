import data from "./List";
function Footer() {
  return (
    <footer className="bg-black p-4">
      <div className="container text-white lg:py-20 py-10">
        <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-12 ">
          <div>
            {data.slice(0, 1).map((ele) => (
              <div key={ele.head} className="space-y-5">
                <h2 className="text-2xl font-inter font-bold">{ele.head}</h2>
                <h3>{ele.title}</h3>
                <p> {ele.paragraph} </p>
                <div className="flex items-center justify-between border p-3 lg:w-[217px] w-fit">
                  <input
                    className="bg-transparent outline-none w-[70%] "
                    type="email"
                    placeholder="Enter your email"
                  />
                  <span>{ele.icon}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            {data.slice(1, 2).map((ele) => (
              <div key={ele.head} className="space-y-5">
                <h2 className="text-2xl font-inter font-bold">{ele.head}</h2>
                {ele.info.map((info) => (
                  <p className="w-48" key={info}>{info}</p>
                ))}
              </div>
            ))}
          </div>

          <div>
            {data.slice(2, 3).map((ele) => (
              <div key={ele.head} className="space-y-5">
                <h2 className="text-2xl font-inter font-bold">{ele.head}</h2>
                {ele.list.map((info) => (
                  <p key={info}>{info}</p>
                ))}
              </div>
            ))}
          </div>

          <div>
            {data.slice(3, 4).map((ele) => (
              <div key={ele.head} className="space-y-5">
                <h2 className="text-2xl font-inter font-bold">{ele.head}</h2>
                {ele.list.map((info) => (
                  <p key={info}>{info}</p>
                ))}
              </div>
            ))}
          </div>

          <div>
            {data.slice(4).map((ele) => (
              <div key={ele.head} className="space-y-5">
                <h2 className="text-2xl font-inter font-bold">{ele.head}</h2>
                <p className="text-xs font-medium">{ele.paragraph}</p>
                <figure className="flex overflow-hidden max-h-[200px]">
                  <img className=" w-fit h-fit object-contain" src="src/assets/images/QR.webp" alt="QR" loading="lazy" />
                  <div className="ml-3">
                  <img className=" object-contain w-[170px] h-fit -mt-12" src="src/assets/images/Google-Play.webp" alt="google-play" loading="lazy" />
                  <img className=" object-contain w-[170px] h-fit -mt-28" src="src/assets/images/App-Store.webp" alt="google-play" loading="lazy" /> 
                  </div>
                </figure>
                <div className="flex gap-6 ">
                  {ele.icons.map((icon, index) => (
                    <span key={index} className="text-2xl">{icon}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
