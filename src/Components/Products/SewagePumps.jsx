import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import slider3 from "../../assets/slider3.png";

export const SewagePumps = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Left Side - Text */}
        <motion.div
          className="col-md-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="fw-bold mb-3"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Sewage Pumps
          </motion.h2>
          
          <motion.h5 
            className="fw-semibold mb-3"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Sewage Pumps Manufacturer, Exporter, Supplier
          </motion.h5>
          
          <motion.p 
            className="text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            KPR'S Pumps is also known for being a leading Manufacturer of Sewage Pumps. 
            Our Sewage Pumps are suitable for three-phase as well as single-phase 
            power supply. Pumps are constructed of strong cast die body parts, 
            ensuring that the material will remain durable and long-lasting.
          </motion.p>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link 
              to="/enquiry" 
              className="btn btn-primary btn-lg rounded-pill shadow mb-2"
            >
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="col-md-6 text-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img 
            src={slider3} 
            alt="Sewage Pump" 
            className="img-fluid rounded shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </div>
  );
};
