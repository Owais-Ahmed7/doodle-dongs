import React from "react";
import { Outlet } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

function Layout() {
  return (
    <ParallaxProvider>
      <Outlet />
    </ParallaxProvider>
  );
}

export default Layout;
