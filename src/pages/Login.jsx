import { useState } from "react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { CiCircleAlert } from "react-icons/ci";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const inputDate = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const checkLogin = (e) => {
    e.preventDefault();
    try {
      const userString = localStorage.getItem("users");
      if (!userString) {
        setError("No user found");
        return;
      }

      const user = JSON.parse(localStorage.getItem("users"));
      console.log('input',input);
      console.log('user',user);

      if (input.email === user[0].email || input.password === user[0].password) {
        navigate("/", { replace: true });
      } else {
        setError("Email or password is incorrect");
      }
    } catch (error) {
      setError("Something went wrong", error);
    }
  };
  return (
    <>
      <div className="container lg:px-0 px-4">
        <div className="flex items-center justify-center gap-10 my-16">
          <figure className="hidden lg:flex flex-1 ">
            <img
              className="w-[900px]"
              src="./src/assets/images/sign-up.jfif"
              alt=""
            />
          </figure>
          <form onSubmit={checkLogin} className="">
            <h2 className="text-[36px] font-medium mb-4">
              Log in to Exclusive
            </h2>
            <p>Enter your details below</p>
            <div className="flex flex-col gap-10 mt-8">
              <input
                type="email"
                onChange={inputDate}
                name="email"
                autoComplete="email"
                value={input.email}
                placeholder="Email or Phone Number"
                className="outline-none border-b-2"
              />
              <input
                type="password"
                onChange={inputDate}
                name="password"
                autoComplete="current-password"
                value={input.password}
                placeholder="Password"
                className="outline-none border-b-2"
              />
            </div>
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CiCircleAlert className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      {error}
                    </h3>
                  </div>
                </div>
              </div>
            )}
            <div className=" flex items-center justify-between mt-4">
              <div onClick={checkLogin}>
                <Button text={"Login"} />
              </div>

              <p className=" text-lightRed">
                <a href="#">Forget Password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
