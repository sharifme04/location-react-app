import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/icons/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark fixed-top custom-style">
      <div className="container-fluid">
        <AiOutlineMenu className="menu-style" color={"#fff"} size={35} />
        <img
          src={logo}
          width="48"
          height="48"
          className="d-inline-block align-top"
          alt="logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
