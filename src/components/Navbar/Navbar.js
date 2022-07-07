import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="header-nav">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <NavLink  className="nav-link" to='/' exact className="navbar-brand">Logo</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                                aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mr-2">
                                    <NavLink  className="nav-link" to='/' exact>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink  className="nav-link" to='/Add'>Add</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink  className="nav-link" to='/about'>About us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink  className="nav-link" to='/contacts'>Contacts</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;