import Button from '../Button/Button'
import Title from '../Title/Title'
import ExploreProducts from './ExploreProducts'

function Explore() {
  return (
    <section className='mt-16'>
      <Title title={"Explore Our Products"} text={"Our Products"}/>
      <ExploreProducts />
      <Button text={"View All Products"}/>
    </section>
  )
}

export default Explore