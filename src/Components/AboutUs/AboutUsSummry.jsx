import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const AboutUsSummary = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/about"); // adjust route to match your routing
  };

  return (
    <div className="container my-5">
      <motion.div
        className="card shadow-lg border-0 rounded-4 p-4"
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
          About Us
        </motion.h2>

        <motion.p
          className="text-muted"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <strong>KPR’S PUMPS</strong> brings over 10 years of expertise in
          submersible technology, delivering patented innovations for improved
          pump performance and efficiency. Our extensive product range serves
          wastewater, stormwater, industrial, and nuclear power sectors. With
          major exports to G.C.C. countries, our stainless steel and PP-coated
          aluminum pumps ensure durability and reliability.
        </motion.p>

        <motion.button
          className="btn btn-primary px-4 py-2 mt-3 rounded-pill fw-semibold"
          whileHover={{ scale: 1.05 }} // same subtle hover as Contact summary
          whileTap={{ scale: 0.95 }}
          onClick={handleReadMore}
        >
          Read More →
        </motion.button>
      </motion.div>
    </div>
  );
};
