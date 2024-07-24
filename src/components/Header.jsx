import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#1b3252] text-white text-2xl font-semibold px-4 py-2 mb-4">
      <Link to="/">Wellness Retreats</Link>
    </header>
  );
}

export default Header;
