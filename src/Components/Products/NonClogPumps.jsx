import React from "react";
import slider2 from "../../assets/slider2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NonClogPumps = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center mb-5">
        
        <motion.div
          className="col-md-7"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="fw-bold mb-3"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Non Clog Pumps Manufacturer, Exporter, Supplier
          </motion.h2>

          <motion.p
            className="text-muted mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            KPR's Pumps are Manufacturers and Suppliers for Non Clog Pumps,
            Non Clog Submersible Pumps and our set up is situated in Pune,
            Maharashtra, India. Our Experts have designed the best Non Clog Pumps
            Model which is very useful for industrial as well as individual purposes.
            KPR's Pumps is manufacturing the best solution in Non Clog Pumps.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/enquiry"
              className="btn btn-primary btn-lg rounded-pill shadow mb-2"
            >
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-md-5 text-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={slider2}
            alt="Non Clog Pump"
            className="img-fluid rounded shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>

      <div className="row g-4">

        <motion.div
          className="col-md-6"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <div className="card h-100 shadow-sm p-3">
            <div className="card-body">
              <h5 className="card-title">10 HP Submersible Non Clog Slurry Pump</h5>
              <p className="card-text">
                Available in Aluminum and Cast Iron Construction, best suitable
                to drain Slurry. Also available with SS Agitators.
              </p>
              <ul className="list-unstyled small">
                <li><strong>Motor Horse Power:</strong> 10 HP</li>
                <li><strong>Pump Model:</strong> SK-10350-NC</li>
                <li><strong>Max Head:</strong> 30 Mtr.</li>
                <li><strong>Max Discharge:</strong> 1500 LPM</li>
                <li><strong>Solid Handling:</strong> Up to 60 mm</li>
                <li><strong>Applications:</strong> Poultry Farms, Cement Plants, Bricks Manufacturing</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-md-6"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <div className="card h-100 shadow-sm p-3">
            <div className="card-body">
              <h5 className="card-title">12.5 HP Submersible Non Clog Slurry Pump</h5>
              <p className="card-text">
                Available in Aluminum and Cast Iron Construction, best suitable
                to drain Slurry. Also available with SS Agitators.
              </p>
              <ul className="list-unstyled small">
                <li><strong>Motor Horse Power:</strong> 12.5 HP</li>
                <li><strong>Pump Model:</strong> SK-12.5350-NC</li>
                <li><strong>Max Head:</strong> 35 Mtr.</li>
                <li><strong>Max Discharge:</strong> 1500 LPM</li>
                <li><strong>Solid Handling:</strong> Up to 60 mm</li>
                <li><strong>Applications:</strong> Poultry Farms, Cement Plants, Bricks Manufacturing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="fw-bold mb-3">Why Choose KPRS PUMP’s Non-Clog Pumps?</h3>
        <ul className="list-group">
          <li className="list-group-item">✅ Clog-Free Performance</li>
          <li className="list-group-item">✅ High-Efficiency Design</li>
          <li className="list-group-item">✅ Low-Maintenance</li>
          <li className="list-group-item">✅ Versatile Applications</li>
        </ul>
      </motion.div>

      <motion.div
        className="mt-5"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="fw-bold mb-3">Product Highlights</h3>
        <ol>
          <li>Solid Handling Capability</li>
          <li>Efficient Impeller Design</li>
          <li>Durability and Longevity</li>
          <li>Easy Installation and Maintenance</li>
        </ol>
      </motion.div>

      <motion.div
        className="mt-5"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="fw-bold mb-3">Application Areas</h3>
        <ul>
          <li>Municipal Wastewater Treatment</li>
          <li>Industrial Processes (Food, Chemical, etc.)</li>
          <li>Commercial Facilities</li>
        </ul>
      </motion.div>
    </div>
  );
};
