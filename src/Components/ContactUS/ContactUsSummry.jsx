import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUsSummary.css"; // 👈 css for gradient

export const ContactUsSummary = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <div className="container my-5">
      <motion.div
        className="card shadow-lg border-0 rounded-4 p-4 gradient-card"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.03, boxShadow: "0px 12px 25px rgba(0,0,0,0.15)" }}
      >
        <motion.h2
          className="mb-3 fw-bold text-primary"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-dark"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Have questions or need support? Our team is here to help you with pump
          selection, technical support, and export-related queries. Reach out to us
          for prompt assistance. We are committed to providing exceptional customer
          service for all your needs.
        </motion.p>

        <motion.button
          className="btn btn-primary btn-sm mt-3 rounded-pill fw-semibold custom-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContact}
        >
          Get in Touch →
        </motion.button>
      </motion.div>
    </div>
  );
};
