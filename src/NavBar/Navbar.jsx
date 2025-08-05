import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ScrollToTop } from "../ScroolToTop";
import './NavBar.css'

export const Navbar = () => {
  const location = useLocation();

  const handleNavClick = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      new window.bootstrap.Collapse(navbarCollapse).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <ScrollToTop />
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          KPRS Pumps
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-warning" : "text-white"}`
                }
                onClick={handleNavClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                to="/facilities"
                className={({ isActive }) =>
                  `nav-link dropdown-toggle ${isActive ? "text-warning" : "text-white"}`
                }
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Facilities
              </NavLink>
              <ul
                className="dropdown-menu"
                onClick={(e) => e.stopPropagation()}
              >
                <li>
                  <NavLink
                    to="/facilities/installation"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Installation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/facilities/transportation"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Transportation
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link dropdown-toggle ${isActive ? "text-warning" : "text-white"}`
                }
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </NavLink>
              <ul
                className="dropdown-menu"
                onClick={(e) => e.stopPropagation()}
              >
                <li>
                  <NavLink
                    to="/products/dewateringpumps"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Dewatering Pumps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/nonclogpumps"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Non-Clog Pumps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/sewagepumps"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Sewage Pumps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/dewateringsystem"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Dewatering Systems
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/submersibledewatering"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Submersible Dewatering Pumps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/slurrypumps"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Slurry Pumps
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                to="/infrastructure"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-warning" : "text-white"}`
                }
                onClick={handleNavClick}
              >
                Infrastructure
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/client"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-warning" : "text-white"}`
                }
                onClick={handleNavClick}
              >
                Clients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/enquiry"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-warning" : "text-white"}`
                }
                onClick={handleNavClick}
              >
                Enquiry
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-warning" : "text-white"}`
                }
                onClick={handleNavClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-warning" : "text-white"}`
                }
                onClick={handleNavClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
