import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AboutUsSummary = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/about'); // adjust route to match your routing
  };

  return (
    <div className="container-fluid py-4 bg-white mt-1">
      <motion.div
        className="container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-3">About Us</h2>
        <p className="text-muted">
          KPR’S PUMPS brings over 10 years of expertise in submersible technology, delivering patented innovations
          for improved pump performance and efficiency. Our extensive product range serves wastewater, stormwater, industrial, and nuclear power sectors. With major exports to G.C.C. countries, our stainless steel and PP-coated aluminum pumps ensure durability and reliability.
        </p>
        <button className="btn btn-primary mt-2" onClick={handleReadMore}>
          Read More
        </button>
      </motion.div>
    </div>
  );
};

