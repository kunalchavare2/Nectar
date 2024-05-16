import React, { useEffect, useState } from "react";
import { Navigate, useLoaderData } from "react-router";
import Loading from "../components/Molecules/Loading/Loading";
import App from "../App";
import AuthPage from "../pages/AuthPage/AuthPage";
import { useDispatch } from "react-redux";
import { addUser } from "../store/Slice/AuthSlice/AuthSlice";

const AuthHoc = () => {
  const data = useLoaderData();
  const [value, setValue] = useState("loading");
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.isLoggedIn) {
      setValue(data.message);
      dispatch(addUser(data));
    } else if (data) {
      setValue(false);
    }
  }, [data, value]);

  if (value === "loading") {
    return <Loading showLoading={true} />;
  }

  if (value) {
    return <Navigate to={"/app/home"} />;
  }

  return <Navigate to={"/login"} />;
};

export default AuthHoc;
