import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    repeat: "",
  });

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    let isvalidated = false;
    const emailError = document.querySelector(".email-error");
    const passwordError = document.querySelector(".password-error");
    const repeatError = document.querySelector(".repeat-error");

    console.log(loginDetails);
    if (
      loginDetails.username &&
      !loginDetails.username.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      emailError.textContent = "User name is not correct!";
      emailError.classList.remove("hidden");
      isvalidated = false;
    } else {
      emailError.classList.add("hidden");
      isvalidated = true;
    }

    if (loginDetails.password.length < 8) {
      passwordError.textContent = "password is not correct!";
      passwordError.classList.remove("hidden");
      isvalidated = false;
    } else {
      passwordError.classList.add("hidden");
      isvalidated = true;
    }

    if (
      loginDetails.repeat.length < 8 ||
      loginDetails.repeat != loginDetails.password
    ) {
      repeatError.textContent = "password is not Matching!";
      repeatError.classList.remove("hidden");
      isvalidated = false;
    } else {
      repeatError.classList.add("hidden");
      isvalidated = true;
    }

    if (isvalidated) {
      console.log("validated : ", loginDetails);

      axios
        .post("http://localhost:3000/api/add_user", {
          name: "Test Name",
          email: loginDetails.username,
          password: loginDetails.password,
        })
        .then((result) => {
          console.log(result);
        
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create New Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          noValidate
          onSubmit={submitForm}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(ev) =>
                  setLoginDetails((prev) => {
                    return {
                      ...prev,
                      username: ev.target.value,
                    };
                  })
                }
              />
            </div>
          </div>
          <span class="email-error hidden flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            Invalid username field !
          </span>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(ev) =>
                  setLoginDetails((prev) => {
                    return {
                      ...prev,
                      password: ev.target.value,
                    };
                  })
                }
              />
            </div>
          </div>
          <span class="password-error hidden flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            Invalid username field !
          </span>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="repeat-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Repeat Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="repeat-password"
                name="repeat-password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(ev) =>
                  setLoginDetails((prev) => {
                    return {
                      ...prev,
                      repeat: ev.target.value,
                    };
                  })
                }
              />
            </div>
          </div>
          <span class="repeat-error hidden flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            Invalid username field !
          </span>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already Sign Up?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
