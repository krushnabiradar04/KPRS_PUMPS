import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactUsSummary = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact'); // adjust route to match your routing
  };

  return (
    <div className="container-fluid py-4 bg-white mt-1">
      <motion.div
        className="container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-3">Contact Us</h2>
        <p className="text-muted">
          Have questions or need support? Our team is here to help you with pump selection, technical support, and export-related queries. Reach out to us for prompt assistance. We are committed to providing exceptional customer service for all your needs.
        </p>
        <button className="btn btn-primary mt-2" onClick={handleContact}>
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
};
