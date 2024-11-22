import Title from "../Title/Title"
import Featured from "./Featured"

function Arrival() {
  return (
    <section className="my-16">
      <Title title={"New Arrival"} text={"Featured"}/>
      <Featured/>
    </section>
  )
}

export default Arrival