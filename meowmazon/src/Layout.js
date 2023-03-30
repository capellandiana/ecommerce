import React from "react";
import {Outlet} from "react-router-dom";
// import NavBar from "./components/Common/NavBar";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;