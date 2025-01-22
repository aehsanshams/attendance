import React from "react";
import { NavLink } from 'react-router';

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
};


function Layout({ children }) {

    return (
        <>

            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Home</a> */}
                        <NavLink to="/" end style={linkStyle}>Home</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="">Attendance</a> */}
                                    <NavLink to="/attendance" end style={linkStyle}>Attendance</NavLink>

                                </li>
                            </ul>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* Conditionally render the Profile link */}
                                    {location.pathname !== "/profile" && (
                                        <li className="nav-item">
                                            <NavLink to="/profile" end style={linkStyle}>
                                                Profile
                                            </NavLink>
                                        </li>
                                    )}
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Logout</a> */}
                                    <NavLink to="#" end style={linkStyle}>Logout</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {children}

        </>
    );
}

export default Layout;