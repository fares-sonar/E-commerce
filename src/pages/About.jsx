
import Main from "../components/About/1-Main/Main";
import Services from "../components/9-Services/Services";
import Box from "../components/About/2-Box/Box";
import Team from "../components/About/3-Team/Team";

function About() {
  return (
    <>
      <div className="container lg:px-0 px-4">
        <Main/>
        <Box/>
        <Team/>
        <Services />
      </div>

    </>
  );
}

export default About;
