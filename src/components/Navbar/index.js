import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex py-4 px-10 items-center justify-between shadow-md z-10 fixed w-full top-0 bg-white">
      <div className="flex items-center space-x-4">
        <img
          src="https://freepngimg.com/download/pokemon/37545-9-pokeball-free-download.png"
          alt="icon-logo"
          width={40}
          height={40}
        />
        <p className="font-thin font-mono text-2xl">Daily PokéLogs</p>
      </div>
      <div className="p-1 shadow-sm rounded-md md:hidden cursor-pointer hover:shadow-md hover:text-red-600">
        <MenuIcon />
      </div>
      <ul className="md:flex space-x-10 font-mono hidden">
        <li>
          <NavLink
            activeStyle={styles.active}
            isActive={(match, location) => {
              if (location.pathname === "/") {
                return true;
              }
            }}
            to="/"
            className={"hover:text-red-800 text-lg"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={styles.active}
            isActive={(match, location) => {
              if (location.pathname === "/blogs") {
                return true;
              }
            }}
            to="/blogs"
            className={"hover:text-red-800 text-lg"}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={styles.active}
            isActive={(match, location) => {
              if (location.pathname === "/pokedex") {
                return true;
              }
            }}
            to="/pokedex"
            className={"hover:text-red-800 text-lg"}
          >
            Pokédex
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={styles.active}
            isActive={(match, location) => {
              if (location.pathname === "/about") {
                return true;
              }
            }}
            to="/about"
            className={"hover:text-red-800 text-lg"}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  active: {
    color: "rgba(220, 38, 38, 1)",
  },
};

export default Navbar;
