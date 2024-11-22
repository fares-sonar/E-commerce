import Page_Title from "../Page-Title/Page_Title"

function Main() {
  return (
    <section className="mt-16">
      <Page_Title text={"About"}/>
      <div className="flex lg:flex-row flex-col gap-8 items-center justify-between">
        <div>
          <h1 className="lg:text-[54px] md:text-[33px] text-[28px] font-semibold font-inter">Our Story</h1>
          <p className="mt-10 leading-7">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className="mt-6 leading-7">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <figure>
          <img src="src/assets/images/about-banner.jfif" alt="banner" />
        </figure>
      </div>
    </section>
  )
}

export default Main