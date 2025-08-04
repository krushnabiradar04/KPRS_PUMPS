import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { ScrollToTop } from '../ScroolToTop';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
        <ScrollToTop />
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">KPRS Pumps</NavLink>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>Home</NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                to="/facilities"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Facilities
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/facilities/installation" className="dropdown-item">Installation</NavLink></li>
                <li><NavLink to="/facilities/transportation" className="dropdown-item">Transportation</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                to="/products"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/products/dewateringpumps" className="dropdown-item">Dewatering Pumps</NavLink></li>
                <li><NavLink to="/products/nonclogpumps" className="dropdown-item">Non-Clog Pumps</NavLink></li>
                <li><NavLink to="/products/sewagepumps" className="dropdown-item">Sewage Pumps</NavLink></li>
                <li><NavLink to="/products/dewateringsystem" className="dropdown-item">Dewatering Pumps</NavLink></li>
                <li><NavLink to="/products/submersibledewatering" className="dropdown-item">Submersible Dewatering Pumps</NavLink></li>
                <li><NavLink to="/products/slurrypumps" className="dropdown-item">Slurry Pumps</NavLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/infrastructure" className="nav-link">Infrastructure</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/enquiry" className="nav-link">Enquiry</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
