import React from "react";
import logo from "../assets/Images/Logo.webp"
const Navbar=()=>{
    return(
        <nav className="nav-bar">
            <img className = "logo" src={logo} alt="" />
            <h1>Apartment-Manager</h1>
            <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            </div>
            </nav>
    );
};
export default Navbar;