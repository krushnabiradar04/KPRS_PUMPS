import React from 'react';


export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {['Home', 'About Us', 'Clients', 'Enquiry', 'Contact Us', 'Photo Gallery', 'Download Catlog', 'Sitemap'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="footer-link d-block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold mb-3">Products</h5>
            <ul className="list-unstyled">
              {[
                'Dewatering Pumps',
                'Sewage Pumps',
                'Nonclog Pumps',
                'Dewatering Systems',
                'Submersible Dewatering Pumps',
                'Slurry Pumps',
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="footer-link d-block py-1">{item}</a>
                </li>
              ))}
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
              <a href="mailto:ashwin@kprspumps.com" className="text-info">ashwin@kprspumps.com</a>
            </p>
            <p className="mb-1">
              <strong>Also visit at:</strong>{' '}
              <a href="http://www.dewateringpumpsindia.net" className="text-info" target="_blank" rel="noopener noreferrer">
                www.dewateringpumpsindia.net
              </a>
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center pt-4 mt-4 border-top border-secondary small">
          <span className="text-white">
            Designed by : Exads IT Solutions Pvt. Ltd. | ©️2025 KPRS PUMPS. All rights reserved.
          </span>
        </div>
      </div>

      {/* Inline CSS for hover effect */}
      <style jsx>{`
        .footer-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #0dcaf0; /* Bootstrap info */
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};
