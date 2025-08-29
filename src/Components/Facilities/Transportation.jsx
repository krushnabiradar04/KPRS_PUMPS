import React from "react";
import { motion } from "framer-motion";

// ✅ Import image so Vite includes it in build
import transportImg from "../../assets/transport.png";

export const Transportation = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-dark">Transportation</h2>
      <div className="row align-items-center">
        {/* Left: Text Content */}
        <motion.div
          className="col-md-7"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="fs-5">
            <strong>KPR’S PUMP</strong> is providing the facility of
            transportation on customer demand anywhere in the world. KPR’s Pumps
            company is exporting 60% products to G.C.C Countries and supplied
            the pumps in very prestigious projects in G.C.C Countries through
            the reputed construction companies. Pumps are working in very good
            conditions. We are having Exporting facility.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="col-md-5 d-flex justify-content-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={transportImg}
            alt="Transportation"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
