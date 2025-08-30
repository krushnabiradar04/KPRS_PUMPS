import React from 'react';
import { motion } from 'framer-motion';
import './ContactUS.css';

export const ContactUS = () => {
  return (
    <motion.div 
      className="contactus-wrapper container py-5"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h2 
        className="text-center mb-5 fw-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
      >
        Contact Us
      </motion.h2>

      <motion.div 
        className="contactus-box mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: "easeOut" } }}
      >
        <h4 className="fw-semibold">KPRS PUMPS</h4>
        <p className="mb-2">
          <strong>Address:</strong><br />
          Shed No. 9, Sr. No. 82 / 6A, House No.1527, Gurukrupa Industrial Estate,<br />
          Opp. Venkatesh Engg., Shivane, Pune – 411023, Maharashtra, India.
        </p>
        <p className="mb-2"><strong>E-mail:</strong> <a href="mailto:ashwin@kprspumps.com">ashwin@kprspumps.com</a></p>
        <p><strong>Mobile No.:</strong> +91-95520 06841 / <strong>Sales:</strong> +91-96237 72704</p>
      </motion.div>

      <motion.div 
        className="contactus-box mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: "easeOut" } }}
      >
        <h4 className="fw-semibold">SALES :</h4>
        <p className="mb-1">Ms. Sharvari Kolhe</p>
        <p className="mb-1">M. +91-96237 72704</p>
        <p><strong>E-mail:</strong> <a href="mailto:sharvari@kprspumps.com">sharvari@kprspumps.com</a></p>
      </motion.div>

      <motion.div 
  className="contactus-box text-center mt-4" // added margin-top for spacing
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }} // ensures it triggers on scroll
  transition={{ duration: 0.8, ease: "easeOut" }}
  whileHover={{ scale: 1.06, transition: { duration: 0.2, ease: "easeOut" } }}
>
  <p className="fw-medium mb-1">Also visit at:</p>
  <a
    href="http://www.dewateringpumpsindia.net"
    target="_blank"
    rel="noopener noreferrer"
  >
    www.dewateringpumpsindia.net
  </a>
</motion.div>

    </motion.div>
  );
};
