import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] w-[98%] mx-auto mb-4">
        <Outlet />
        <ScrollRestoration />
      </main>
    </>
  );
}

export default Layout;
