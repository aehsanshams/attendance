import React from "react";
import { NavLink, useLocation } from "react-router";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black",
};
const footerStyle = {
    marginTop: "auto",
    backgroundColor: "#f2f2f2",
    padding: "0.5rem",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#6c757d",
};

function Layout({ children }) {
    const location = useLocation(); // Import and use `useLocation` to get the current path

    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink to="/" end style={linkStyle}>
                            Home
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/attendance" end style={linkStyle}>
                                        Attendance
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                {location.pathname !== "/profile" && (
                                    <li className="nav-item">
                                        <NavLink to="/profile" end style={linkStyle}>
                                            Profile
                                        </NavLink>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <NavLink to="/login" end style={linkStyle}>
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {children}

            <footer className="container" style={footerStyle}>
                <div>
                    <p>
                        <a href="/terms" style={linkStyle}>
                            Terms of Service
                        </a>{" "}
                        |{" "}
                        <a href="/privacy" style={linkStyle}>
                            Privacy Policy
                        </a>
                    </p>
                    <p>© {new Date().getFullYear()} aehsanshams. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Layout;
