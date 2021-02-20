import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("/");

  const activeLinks = (link) => {
    setActive(link);
  };

  return (
    <nav className="flex py-4 px-10 items-center justify-between shadow-md z-10">
      <div className="flex items-center space-x-4">
        <img
          src="https://freepngimg.com/download/pokemon/37545-9-pokeball-free-download.png"
          alt="icon-logo"
          width={40}
          height={40}
        />
        <p className="font-thin font-mono text-2xl">Daily Poke</p>
      </div>
      <div className="p-1 shadow-sm rounded-md md:hidden cursor-pointer hover:shadow-md">
        <MenuIcon className="hover:text-red-600" />
      </div>
      <ul className="md:flex space-x-10 font-mono hidden">
        <li>
          <Link
            onClick={() => activeLinks("/")}
            to="/"
            className={
              "/" === active
                ? "text-red-600 hover:text-red-800 text-lg"
                : "hover:text-red-800 text-lg"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => activeLinks("/blogs")}
            to="/blogs"
            className={
              "/blogs" === active
                ? "text-red-600 hover:text-red-800 text-lg"
                : "hover:text-red-800 text-lg"
            }
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            onClick={() => activeLinks("/about")}
            to="/about"
            className={
              "/about" === active
                ? "text-red-600 hover:text-red-800 text-lg"
                : "hover:text-red-800 text-lg"
            }
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
