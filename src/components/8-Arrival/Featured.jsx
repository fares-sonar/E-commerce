
function Featured() {
  return (
    <div className="mt-8 grid lg:grid-cols-4 mg:grid-cols-2 grid-cols-1 gap-8">

        <figure className="bg-black relative lg:row-span-2 md:row-span-1 lg:col-span-2 md:col-span-1 ">
          <img className="w-full h-full object-contain" src="./src/assets/images/play.png" alt="" />
          <div className="absolute bottom-4 left-8 text-white ">
              <h2 className="lg:text-2xl font-semibold">PlayStation 5</h2>
              <p className="text-sm my-2">Black and White version of the PS5 <br /> coming out on sale.</p>
              <a href="#"><u>Shop Now</u></a>
          </div>
        </figure>

        <figure className="bg-black relative lg:col-span-2">
          <img className="w-full h-full" src="./src/assets/images/woman.webp" alt="image" loading="lazy" />
          <div className="absolute bottom-4 left-8 text-white ">
              <h2 className="lg:text-2xl font-semibold">Women’s Collections</h2>
              <p className="text-sm my-2">Featured woman collections that <br /> give you another vibe.</p>
              <a href="#"><u>Shop Now</u></a>
          </div>
        </figure>

        <figure className="bg-black relative col-span-1">
          <img className="w-full h-full object-contain" src="./src/assets/images/speaker.png" alt="image" loading="lazy" />
          <div className="absolute bottom-4 left-8 text-white ">
              <h2 className="lg:text-2xl font-semibold">Speakers</h2>
              <p className="text-sm my-2">Amazon wireless speakers</p>
              <a href="#"><u>Shop Now</u></a>
          </div>
        </figure>

        <figure className="bg-black relative col-span-1">
          <img className="w-full h-full object-contain" src="./src/assets/images/perfum.png" alt="image" loading="lazy" />
          <div className="absolute bottom-4 left-8 text-white ">
              <h2 className="lg:text-2xl font-semibold">Perfume</h2>
              <p className="text-sm my-2">GUCCI INTENSE OUD EDP</p>
              <a href="#"><u>Shop Now</u></a>
          </div>
        </figure>
        
      </div>
  )
}

export default Featured