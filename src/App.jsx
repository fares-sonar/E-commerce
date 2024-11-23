import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Account } from "./pages/Account.jsx";
import Footer from "./components/10-Footer/Footer.jsx";
import Header from "./components/1-header/Header.jsx";
import Store from "./Context/Store.jsx";
import { WishList } from "./pages/WishList.jsx";
import { CheckOut } from "./pages/CheckOut.jsx";
import Scroll from "./components/Scroll/Scroll.jsx";

const App = () => {
  return (
    <>  
      <Store>
        <Header />
        <Scroll/>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sign up" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/wish-list" element={<WishList />}></Route>
          <Route path="/check-out" element={<CheckOut />}></Route>
        </Routes>
        <Footer />
      </Store>
    </>
  );
};

export default App;
