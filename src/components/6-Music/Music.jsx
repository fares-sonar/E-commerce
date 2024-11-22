import MusicTime from "./MusicTime"

function Music() {
  return (
    <section className='mt-16'>
      <div className="flex items-center bg-black text-white max-h-[500px] p-8">
        <div className="flex-1">
          <h3 className="text-lightGreen font-semibold">Categories</h3>
          <h2 className="lg:text-[48px] md:text-[33px] text-[28px] font-semibold font-inter">Enhance Your <br /> Music Experience</h2>
          <div className="flex flex-wrap gap-6 my-6">
            <MusicTime/>
          </div>
        </div>
        <figure className="lg:flex hidden">
          <img className="w-[600px] h-fit object-cover overflow-hidden" src="src/assets/images/music-1.webp" alt="music" loading="lazy" />
        </figure>
      </div>
    </section>
  )
}

export default Music