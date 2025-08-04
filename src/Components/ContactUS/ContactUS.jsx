import React from 'react';
import './ContactUS.css';

export const ContactUS = () => {
  return (
    <div className="contactus-wrapper container py-5">
      <h2 className="text-center mb-5 fw-bold">Contact Us</h2>

      <div className="contactus-box mb-4">
        <h4 className="fw-semibold">KPRS PUMPS</h4>
        <p className="mb-2">
          <strong>Address:</strong><br />
          Shed No. 9, Sr. No. 82 / 6A, House No.1527, Gurukrupa Industrial Estate,<br />
          Opp. Venkatesh Engg., Shivane, Pune – 411023, Maharashtra, India.
        </p>
        <p className="mb-2"><strong>E-mail:</strong> <a href="mailto:ashwin@kprspumps.com">ashwin@kprspumps.com</a></p>
        <p><strong>Mobile No.:</strong> +91-95520 06841 / <strong>Sales:</strong> +91-96237 72704</p>
      </div>

      <div className="contactus-box mb-4">
        <h4 className="fw-semibold">SALES :</h4>
        <p className="mb-1">Ms. Sharvari Kolhe</p>
        <p className="mb-1">M. +91-96237 72704</p>
        <p><strong>E-mail:</strong> <a href="mailto:sharvari@kprspumps.com">sharvari@kprspumps.com</a></p>
      </div>

      <div className="contactus-box text-center">
        <p className="fw-medium mb-1">Also visit at:</p>
        <a
          href="http://www.dewateringpumpsindia.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.dewateringpumpsindia.net
        </a>
      </div>
    </div>
  );
};
