import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4 footer_bg mt-1">
      <div className="container">
        <div className="row gy-4">

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="footer-link d-block py-1">Home</NavLink></li>
              <li><NavLink to="/about" className="footer-link d-block py-1">About Us</NavLink></li>
              <li><NavLink to="/client" className="footer-link d-block py-1">Clients</NavLink></li>
              <li><NavLink to="/enquiry" className="footer-link d-block py-1">Enquiry</NavLink></li>
              <li><NavLink to="/contact" className="footer-link d-block py-1">Contact Us</NavLink></li>
              <li><NavLink to="/gallery" className="footer-link d-block py-1">Photo Gallery</NavLink></li>
              <li><NavLink to="/catalog" className="footer-link d-block py-1">Download Catlog</NavLink></li>
              <li><NavLink to="/sitemap" className="footer-link d-block py-1">Sitemap</NavLink></li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold mb-3">Products</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/products/dewateringpumps" className="footer-link d-block py-1">Dewatering Pumps</NavLink></li>
              <li><NavLink to="/products/sewagepumps" className="footer-link d-block py-1">Sewage Pumps</NavLink></li>
              <li><NavLink to="/products/nonclogpumps" className="footer-link d-block py-1">Nonclog Pumps</NavLink></li>
              <li><NavLink to="/products/dewateringsystem" className="footer-link d-block py-1">Dewatering Systems</NavLink></li>
              <li><NavLink to="/products/submersibledewatering" className="footer-link d-block py-1">Submersible Dewatering Pumps</NavLink></li>
              <li><NavLink to="/products/slurrypumps" className="footer-link d-block py-1">Slurry Pumps</NavLink></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold mb-3">Contact Us</h5>
            <p className="mb-2 fw-semibold">KPRS PUMPS</p>
            <p className="mb-2">
              Shed No. 9, Sr. No. 82 / 6A, House No. 1527,<br />
              Gurukrupa Industrial Estate, Opp. Venkatesh Engg.,<br />
              Shivane, Pune - 411023, Maharashtra, India.
            </p>
            <p className="mb-1"><strong>Mobile No.:</strong> +91-95520 06841</p>
            <p className="mb-1"><strong>Sales:</strong> +91-96237 72704</p>
            <p className="mb-1">
              <strong>Email:</strong>{' '}
              <a href="mailto:ashwin@kprspumps.com" className="text-white">ashwin@kprspumps.com</a>
            </p>
            <p className="mb-1">
              <strong>Also visit at:</strong>{' '}
              <a href="http://www.dewateringpumpsindia.net" className="text-white" target="_blank" rel="noopener noreferrer">
                www.dewateringpumpsindia.net
              </a>
            </p>
          </div>
        </div>
        
        <div className="text-center pt-4 mt-4 border-top border-secondary small">
          <span className="text-white">
            Developed by : Exads IT Solutions Pvt. Ltd. | ©️2025 KPRS PUMPS. All rights reserved.
          </span>
        </div>
      </div>

      
    </footer>
  );
};
