import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const DewatringPumps = () => {
  const pdfLinks = [
    'AK-1.5150-2p',
    'AK-1.5350-2p',
    'AK-1.5360-2p',
    'AK-2350-2p',
    'AK-3350-2p',
    'AK-6350-2p',
    'AK-8350-2p',
    'AK-8350H-2p',
  ];

  const sectionStyle = { lineHeight: '1.7', fontSize: '1rem' };
  const headingStyle = 'fw-bold text-primary mt-5 mb-3';

  return (
    <div className="container py-5">
      {/* Section 1 */}
      <motion.div
        className="row align-items-center mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="col-md-6">
          <h5 className="fw-bold">Dewatering Pumps Manufacturer</h5>
          <p>
            KPR’S <strong>Dewatering Submersible Pumps</strong>, known for job site dependability.
            Pumps are constructed of strong die cast aluminum and stainless steel body parts;
            they are fitted with stainless steel hardened impellers and field adjustable nitrile rubber diffuser.
            These tough pumps do not have to be totally submerged and will operate under snore conditions if necessary.
          </p>
          <Link to="/enquiry" className="text-primary fw-semibold text-decoration-none">
            REQUEST A QUOTE
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <motion.img
            src="../src/Assets/motor.jpg"
            alt="Submersible Dewatering Pump"
            className="img-fluid rounded shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="row align-items-center mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="col-md-6 text-center">
          <motion.img
            src="../src/Assets/motorwire.jpg"
            alt="Pump Wire Image"
            className="img-fluid rounded shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="col-md-6">
          <h6 className="fw-bold">Corrosion / Abrasion Resistant Impeller</h6>
          <p>
            All <strong>KPR’S Impellers</strong> are designed to keep working under extremely harsh conditions.
            They are produced in stainless steel 410 grade and machined to exacting specifications.
            Hardness reduces wear for continued high performance.
          </p>
          <Link to="/enquiry" className="text-primary fw-semibold text-decoration-none">
            REQUEST A QUOTE
          </Link>
        </div>
      </motion.div>

      {/* PDF Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h6 className="fw-bold text-danger mb-3">ALL MODELS DOWNLOAD PDF</h6>
        <ul className="list-unstyled">
          {pdfLinks.map((pdf, index) => (
            <motion.li
              key={index}
              className="mb-2"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href="#"
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

      {/* Section 3: Technical Overview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="fw-bold mb-4">Heavy Duty Castings Last Long</h3>
        <p style={sectionStyle}>
          All KPR’S pump models are constructed of strong die cast aluminum top cover & bottom cover,
          sand blasted and epoxy coated for durability and extended life.
        </p>

        <h5 className={headingStyle}>Long Life Seals</h5>
        <p style={sectionStyle}>
          All models use an exclusive dual tandem, double mechanical seal system with each set
          mechanically independent for added protection. Tungsten carbide seal faces ensure corrosion,
          abrasion, and thermal shock resistance.
        </p>

        <h5 className={headingStyle}>Wear Resistant Steel Oil Chamber</h5>
        <p style={sectionStyle}>
          Strong investment cast stainless steel seal housing ensures continuous seal lubrication and long service life.
        </p>

        <h5 className={headingStyle}>High Performance Submersible Motor</h5>
        <p style={sectionStyle}>
          All KPR’S pumps feature a heavy-duty class 'F' insulated motor with shrink-fitted stator for efficient
          cooling and durability. Windings are triple dipped in class ‘H’ varnish for protection from burnout.
        </p>

        <h4 className="fw-bold text-dark mt-5 mb-3">Quality Dewatering Pumps for Efficient Water Management</h4>
        <p style={sectionStyle}>
          At KPRS PUMPS, we provide high-performance dewatering pumps engineered for the most demanding water removal tasks.
          Ideal for construction, mining, and industrial use.
        </p>

        <h5 className={headingStyle}>Why Choose Our Dewatering Pumps?</h5>
        <ul className="mb-4">
          <li>Robust Construction for extreme environments</li>
          <li>Efficient Water Removal with high-capacity designs</li>
          <li>Versatile Applications from construction to disaster recovery</li>
          <li>Advanced Technology for energy savings and maximum output</li>
        </ul>

        <h5 className={headingStyle}>Product Highlights</h5>
        <ol className="mb-4">
          <li>Submersible Dewatering Pumps for clean & slurry water</li>
          <li>High Flow Rates to reduce downtime</li>
          <li>Durable Materials resist corrosion</li>
          <li>Easy Maintenance minimizes disruptions</li>
        </ol>

        <h5 className={headingStyle}>Application Areas</h5>
        <ul className="mb-4">
          <li>Construction Sites</li>
          <li>Mining Operations</li>
          <li>Disaster Recovery</li>
          <li>Flood Control</li>
        </ul>

        <h5 className={headingStyle}>Use Cases</h5>
        <p className="fw-semibold">For Submersible Dewatering Pumps:</p>
        <ul>
          <li>Flooded basements, pits, sumps</li>
          <li>Wellpoint dewatering</li>
          <li>Offshore and industrial applications</li>
        </ul>

        <p className="fw-semibold mt-3">For Submersible Non-Clog Slurry Pumps:</p>
        <ul>
          <li>Poultry and fish farms</li>
          <li>Food processing units</li>
          <li>Sand washing and slurry pumping</li>
        </ul>

        <h5 className={headingStyle}>Keywords</h5>
        <p>
          Submersible Dewatering Pump, Dewatering Submersible Pump, Submersible Sump Pump,
          Drainage Pump, Portable Dewatering Pump, Self Priming Dewatering Pump.
        </p>

        <h5 className={headingStyle}>Top Models & Specs</h5>

        {/* Pump Cards */}
        <div className="row">
          {[{
              hp: 5,
              model: 'AK-5350-2P',
              head: '22 Mtr.',
              discharge: '1200 LPM',
              solid: '10 mm',
              dischargeType: '3" Hose',
            },
            {
              hp: 10,
              model: 'AK-10350-2P',
              head: '30 Mtr.',
              discharge: '3200 LPM',
              solid: '10 mm',
              dischargeType: '4" Hose',
            },
            {
              hp: 35,
              model: 'AK-35350-2P',
              head: '45 Mtr.',
              discharge: '7200 LPM',
              solid: '30 mm',
              dischargeType: '6" Hose',
            },
          ].map((pump, i) => (
            <motion.div
              key={i}
              className="col-md-4 mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h6 className="fw-bold text-primary mb-2">{pump.hp} HP Submersible Dewatering Pump</h6>
                  <p className="mb-1"><strong>Model:</strong> {pump.model}</p>
                  <p className="mb-1"><strong>Max Head:</strong> {pump.head}</p>
                  <p className="mb-1"><strong>Max Discharge:</strong> {pump.discharge}</p>
                  <p className="mb-1"><strong>Solids Handling:</strong> Up to {pump.solid}</p>
                  <p className="mb-1"><strong>Discharge Connection:</strong> {pump.dischargeType}</p>
                  <p className="mb-0">
                    <strong>Applications:</strong> Sumps, basements, industrial drainage, construction, seepage & effluent removal.
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
