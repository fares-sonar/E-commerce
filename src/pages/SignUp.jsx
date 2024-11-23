import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CiCircleAlert } from "react-icons/ci";

import {
  validateEmail,
  validatePassword,
  validateName,
} from "../components/Utils/Validation";
export const SignUp = () => {
  const navigate= useNavigate()
  const [formDate, setFormDate] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const validationForm = () => {
    const newError = {};

    if (!validateEmail(formDate.email)) {
      newError.email = "Please enter a valid email address";
    }
    if (!validateName(formDate.name)) {
      newError.name = "Name must be between 2 and 50 characters";
    }
    if (!validatePassword(formDate.password)) {
      newError.password =
        "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationForm()) {
      try {
        // Store user data in localStorage
        const existingUser = JSON.parse(localStorage.getItem("users") || "[]");

        // Check if email already exists
        if (existingUser.some((user) => user.email === formDate.email)) {
          setError({ email: "This email is already registered" });
          return;
        }
        // Check if user already exists
        if (existingUser.some((user) => user.name === formDate.name)) {
          setError({ email: "This username is already taken" });
          return;
        }

        existingUser.push(formDate);
        localStorage.setItem("users", JSON.stringify(existingUser));

        setFormDate({
          name: "",
          email: "",
          password: "",
        });
      } catch (error) {
        console.log("Error Storing Data:", error);
      }
      navigate('/login' , {replace: true});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="container lg:px-0 px-4">
        <div className="flex items-center justify-center gap-10 my-16">
          <figure className="hidden lg:flex flex-1">
            <img
              className="w-[900px]"
              src="public/images/sign-up.jfif"
              alt=""
            />
          </figure>
          <div className="">
            <h2 className="text-[36px] font-medium">Create an account</h2>
            <p>Enter your details below</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 mt-8">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="outline-none border-b-2 bg-transparent p-2"
                value={formDate.name}
                onChange={handleChange}
              />
              {error.username && (
                <div className="text-red-600 text-sm flex items-center gap-1">
                  <CiCircleAlert className="h-4 w-4" />
                  {error.username}
                </div>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email or Phone Number"
                className="outline-none border-b-2 bg-transparent p-2"
                value={formDate.email}
                onChange={handleChange}
              />
              {error.email && (
                <div className="text-red-600 text-sm flex items-center gap-1">
                  <CiCircleAlert className="h-4 w-4" />
                  {error.email}
                </div>
              )}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="outline-none border-b-2 bg-transparent p-2"
                value={formDate.password}
                onChange={handleChange}
              />
              {error.password && (
                <div className="text-red-600 text-sm flex items-center gap-1">
                  <CiCircleAlert className="h-4 w-4" />
                  {error.password}
                </div>
              )}
              <div className="mt-4 space-y-3 text-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-lightRed w-full text-white p-3 rounded-sm"
                >
                  <a className="font-medium" href="#">
                    Create Account
                  </a>
                </button>
                <button className=" flex items-center justify-center gap-3 border w-full p-3 rounded-sm">
                  <img
                    className="w-6 h-6"
                    src="public/images/icon-Google.png"
                    alt=""
                  />
                  <a href="#">Sign up with Google</a>
                </button>
                <p>
                  Already have account?{" "}
                  <Link to={"/login"}>
                    <u>Log in</u>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
