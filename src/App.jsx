import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const lazyLoad = (path) => lazy(() => import(`./pages/${path}.jsx`));

const Home = lazyLoad("Home");
const About = lazyLoad("About");
const Contact = lazyLoad("Contact");
const SignUp = lazyLoad("SignUp");
const Login = lazyLoad("Login");
const Cart = lazyLoad("Cart");
const Account = lazyLoad("Account");
const WishList = lazyLoad("WishList");
const CheckOut = lazyLoad("CheckOut");
const NotFound = lazyLoad("NotFound");
import { Footer, Header, Scroll } from "./components/index.js";
const Store = lazy(() => import("./Context/Store.jsx"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            Loading...
          </div>
        }
      >
        <Store>
          <Header />
          <Scroll />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/sign up" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/wish-list" element={<WishList />}></Route>
            <Route path="/check-out" element={<CheckOut />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Store>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
