import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillHome, AiFillProject } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar-container">
          <Link to="/" className="logo-link">
            <h1 className="logo">Jega..</h1>
          </Link>
          <div className="links-container">
            <NavLink
              to="/"
              className="link ({ isActive }) => (isActive ? 'active' : 'inactive')"
            >
              <AiFillHome className="icons" />
              <p className="links-title">Home</p>
            </NavLink>
            <NavLink
              to="/about"
              className="link ({ isActive }) => (isActive ? 'active' : 'inactive')"
            >
              <BsFillInfoCircleFill className="icons" />
              <p className="links-title">About</p>
            </NavLink>
            <NavLink
              to="/projects"
              className="link ({ isActive }) => (isActive ? 'active' : 'inactive')"
            >
              <AiFillProject className="icons" />
              <p className="links-title project-link">Projects</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
