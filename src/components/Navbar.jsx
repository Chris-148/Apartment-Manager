import React from "react";
import logo from "../assets/Images/Logo.webp"
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return(
        <nav className="nav-bar">
            <img className = "logo" src={logo} alt="" />
            <h1>Apartment-Manager</h1>
            <div className="nav-links">
            <NavLink to={'/'}>
            <div>Home</div>
            </NavLink>
            <NavLink to={'/About'}>
            <div>About</div>
            </NavLink>
            <NavLink to={'/NewListing'}>
            <div>Create New Listing</div>
            </NavLink>
            </div>
            </nav>
    );
};
export default Navbar;