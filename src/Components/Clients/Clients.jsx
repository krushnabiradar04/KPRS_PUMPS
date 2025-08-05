


import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clients11 from '../../assets/Clients.png';

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

export const Clients = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
      <motion.h2
          className="mb-2 text-center fw-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >Clients</motion.h2>

        {/* Tagline + Paragraph Section */}
        <motion.div
          className="bg-white rounded shadow p-4 mb-5 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="text-primary fw-semibold mb-3">
            "Engineering Pumps. Empowering Industries."
          </h5>
          <p className="text-muted mb-0 mx-auto" style={{ maxWidth: '750px' }}>
            At <strong>KPR’S PUMP</strong>, we don’t just manufacture pumps—we move industries forward.
            With a trusted global client base and decades of excellence, our pumps are the heartbeat of
            countless wastewater, power, industrial, and construction projects around the world.
          </p>
        </motion.div>

        {/* Clients List and Image */}
        <div className="row align-items-center">
          <div className="col-md-7">
            <motion.p
              className="text-muted"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <strong>KPR’S PUMP</strong> has clients in all parts of the industry from across the globe.
              We have a wide base of satisfied clients not only in India but also abroad.
              Our National & International Clients are part of the following sectors:
            </motion.p>

            <motion.ul
              className="text-muted list-unstyled ps-3"
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              {[
                "Waste Water Plants",
                "Storm Water Plants",
                "Industrial Plants",
                "Power Plants",
                "Nuclear Power Plants",
                "IT Companies",
                "Construction Companies",
                "Production Companies"
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants} className="mb-2">
                  • {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="col-md-5 text-center mt-4 mt-md-0">
            <motion.img
              src={Clients11}
              alt="clients"
              className="img-fluid rounded shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
