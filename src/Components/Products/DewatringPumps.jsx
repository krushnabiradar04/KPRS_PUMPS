import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Import images (Vite bundles correctly)
import motor from "../../assets/motor.jpg";
import motorwire from "../../assets/motorwire.jpg";

export const DewatringPumps = () => {
  const pdfLinks = [
    "AK-1.5150-2p",
    "AK-1.5350-2p",
    "AK-1.5360-2p",
    "AK-2350-2p",
    "AK-3350-2p",
    "AK-6350-2p",
    "AK-8350-2p",
    "AK-8350H-2p",
  ];

  const pumps = [
    {
      hp: 5,
      model: "AK-5350-2P",
      head: "22 Mtr.",
      discharge: "1200 LPM",
      solid: "10 mm",
      dischargeType: '3" Hose',
    },
    {
      hp: 10,
      model: "AK-10350-2P",
      head: "30 Mtr.",
      discharge: "3200 LPM",
      solid: "10 mm",
      dischargeType: '4" Hose',
    },
    {
      hp: 35,
      model: "AK-35350-2P",
      head: "45 Mtr.",
      discharge: "7200 LPM",
      solid: "30 mm",
      dischargeType: '6" Hose',
    },
  ];

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="fw-bold text-primary">Dewatering Submersible Pumps</h1>
        <p className="text-secondary fs-5 mt-3">
          Robust • Reliable • Engineered for Extreme Conditions
        </p>
        <Link to="/enquiry" className="btn btn-primary px-4 py-2 mt-3 shadow">
          Request a Quote
        </Link>
      </motion.div>

      {/* Section 1: Dependability */}
      <div className="row align-items-center mb-5">
        <motion.div
          className="col-md-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="fw-bold text-dark">Job-Site Dependability</h4>
          <p>
            KPR’S <strong>Dewatering Submersible Pumps</strong> are trusted for
            durability and efficiency. Built with strong die-cast aluminum and
            stainless steel parts, hardened impellers, and adjustable rubber
            diffusers, these pumps excel even in snore conditions.
          </p>
        </motion.div>
        <motion.div
          className="col-md-6 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={motor}
            alt="Submersible Dewatering Pump"
            className="img-fluid rounded shadow-lg"
          />
        </motion.div>
      </div>

      {/* Section 2: Impellers */}
      <div className="row align-items-center mb-5">
        <motion.div
          className="col-md-6 text-center order-md-2"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={motorwire}
            alt="Pump Wire"
            className="img-fluid rounded shadow-lg"
          />
        </motion.div>
        <motion.div
          className="col-md-6 order-md-1"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="fw-bold text-dark">Corrosion & Abrasion Resistant</h4>
          <p>
            All <strong>KPR’S Impellers</strong> are precision machined in
            stainless steel 410 grade, ensuring superior hardness and wear
            resistance under harsh environments.
          </p>
        </motion.div>
      </div>

      {/* Section 3: PDFs */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h5 className="fw-bold text-danger mb-3">All Models Download PDF</h5>
        <ul className="list-unstyled row">
          {pdfLinks.map((pdf, i) => (
            <motion.li
              key={i}
              className="col-md-3 mb-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`/assets/pdfs/${pdf}.pdf`}
                download
                className="text-danger text-decoration-none fw-semibold"
              >
                <i className="bi bi-file-earmark-pdf-fill me-2"></i>
                {pdf}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Section 4: Technical Overview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="fw-bold mb-4">Heavy Duty Castings Last Long</h3>
        <p>
          All KPR’S pump models are constructed of strong die-cast aluminum top
          cover & bottom cover, sand blasted and epoxy coated for durability and
          extended life.
        </p>

        <h5 className="fw-bold text-primary mt-4">Long Life Seals</h5>
        <p>
          Exclusive dual tandem, double mechanical seal system with tungsten
          carbide seal faces ensures corrosion, abrasion, and thermal shock
          resistance.
        </p>

        <h5 className="fw-bold text-primary mt-4">
          Wear Resistant Steel Oil Chamber
        </h5>
        <p>
          Investment cast stainless steel seal housing ensures continuous seal
          lubrication and long service life.
        </p>

        <h5 className="fw-bold text-primary mt-4">
          High Performance Submersible Motor
        </h5>
        <p>
          All KPR’S pumps feature a heavy-duty class 'F' insulated motor with
          shrink-fitted stator. Windings are triple dipped in class ‘H’ varnish
          for protection from burnout.
        </p>
      </motion.div>

      {/* Section 5: Marketing Highlights */}
      <motion.div
        className="bg-light p-4 rounded shadow-sm mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="fw-bold text-dark">
          Quality Dewatering Pumps for Efficient Water Management
        </h4>
        <p>
          At KPRS PUMPS, we provide high-performance dewatering pumps engineered
          for demanding water removal tasks. Ideal for construction, mining, and
          industrial use.
        </p>

        <h5 className="fw-bold text-primary mt-3">Why Choose Us?</h5>
        <ul>
          <li>Robust Construction for extreme environments</li>
          <li>Efficient Water Removal with high-capacity designs</li>
          <li>Versatile Applications from construction to disaster recovery</li>
          <li>Advanced Technology for energy savings and maximum output</li>
        </ul>
      </motion.div>

      {/* Section 6: Pump Models */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="fw-bold text-dark mb-4">Top Models & Specs</h3>
        <div className="row">
          {pumps.map((pump, i) => (
            <motion.div
              key={i}
              className="col-md-4 mb-4"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h6 className="fw-bold text-primary mb-2">
                    {pump.hp} HP Submersible Pump
                  </h6>
                  <p className="mb-1"><strong>Model:</strong> {pump.model}</p>
                  <p className="mb-1"><strong>Max Head:</strong> {pump.head}</p>
                  <p className="mb-1"><strong>Discharge:</strong> {pump.discharge}</p>
                  <p className="mb-1"><strong>Solids Handling:</strong> {pump.solid}</p>
                  <p className="mb-1"><strong>Discharge Type:</strong> {pump.dischargeType}</p>
                  <hr />
                  <p className="small text-secondary">
                    Applications: Sumps, basements, industrial drainage,
                    construction, seepage & flood control.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
