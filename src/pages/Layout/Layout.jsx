import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ setArrowStyle, resetArrowStyle}) {
  return (
    <>
      <Nav
        setArrowStyle={setArrowStyle}
        resetArrowStyle={resetArrowStyle}
      />
      <Outlet />
      <Footer setArrowStyle={setArrowStyle} resetArrowStyle={resetArrowStyle} />
    </>
  );
}

export default Layout;
