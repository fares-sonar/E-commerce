import Page_Title from "../components/About/Page-Title/Page_Title";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="container my-16">
      <Page_Title text={"404 Error"} />
      <div className=" flex items-center justify-center px-4">
        <div className=" w-full text-center">
          <h1 className="text-8xl font-inter font-medium text-gray-800">
            404 Not Found
          </h1>
          <p className="text-gray-500 mt-4">
            Your visited page not found. You may go home page.
          </p>
          <Link
            to={'/'}
            className="inline-block mt-8 px-6 py-3 bg-lightRed text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to home page
          </Link>
        </div>
      </div>
      </section>
    </>
  );
};

export default NotFound;
