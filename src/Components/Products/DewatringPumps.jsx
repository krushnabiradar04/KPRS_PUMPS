import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const DewatringPumps = () => {
  const sections = [
    {
      title: 'Dewatering Pumps Manufacturer',
      content: `KPR’S Dewatering Submersible Pumps, known for job site dependability. Pumps are constructed of strong die cast aluminum and stainless steel body parts; they are fitted with stainless steel hardened impellers and field adjustable nitrile rubber diffuser. The both upper and lower mechanical seals are wholly enclosed in oil chamber. These tough pumps do not have to be totally submerged and will operate under snore conditions if necessary.`,
      image: '../src/Assets/motor.jpg',
    },
    {
      title: 'Corrosion / Abrasion Resistant Impeller',
      content: `All KPR’S Impellers are designed to keep working under extremely harsh conditions. They are produced in stainless steel 410 grade and machined in our own machine shop to exacting specifications and finished to very high hardness levels. Hardness reduces wear for continued high performance.`,
      image: '../src/Assets/motorwire.jpg',
    },
  ];

  const pdfLinks = [
    'AK-1.5150-2p', 'AK-1.5350-2p', 'AK-1.5360-2p', 'AK-2350-2p',
    'AK-3350-2p', 'AK-6350-2p', 'AK-8350-2p', 'AK-8350H-2p',
  ];

  return (
    <div className="container py-5">
      {sections.map((section, index) => (
        <div className="row align-items-center mb-5" key={index}>
          <div className="col-md-6">
            <h4 className="fw-bold">{section.title}</h4>
            <p className="text-secondary" style={{ textAlign: 'justify' }}>{section.content}</p>
            <a href="#" className="text-primary fw-semibold text-decoration-none">REQUEST A QUOTE</a>
          </div>
          <div className="col-md-6 text-center">
            <img src={section.image} alt="Product" className="img-fluid rounded shadow" />
          </div>
        </div>
      ))}

      <div className="bg-light p-4 rounded shadow mb-5">
        <h6 className="text-uppercase fw-bold mb-3 text-center">KPR’S Electric Submersible Dewatering Pumps All Models Specification</h6>
        <div className="row justify-content-center">
          {pdfLinks.map((link, idx) => (
            <div className="col-md-3 col-sm-6 mb-3" key={idx}>
              <a href="#" className="d-block text-center text-danger text-decoration-none fw-semibold">
                <i className="bi bi-file-earmark-pdf-fill me-2"></i> {link}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5" >
        <h6 className="fw-bold text-uppercase mb-3">Heavy Duty Castings Last Long</h6>
        <p>All KPR’S pump models are constructed of strong die cast aluminum top and bottom covers, sand blasted and epoxy coated for durability.</p>

        <h6 className="fw-bold text-uppercase mt-4 mb-3">Long Life Seals</h6>
        <p>Our exclusive dual tandem mechanical seal system features independent tungsten carbide faces operated in stainless steel chambers filled with lubricating oil, delivering maximum resistance and long-term performance.</p>

        <h6 className="fw-bold text-uppercase mt-4 mb-3">Wear Resistant Steel Oil Chamber</h6>
        <p>Constructed of investment cast stainless steel, our seal housing ensures continued seal lubrication and extended pump life.</p>

        <h6 className="fw-bold text-uppercase mt-4 mb-3">High Performance Submersible Motor</h6>
        <p>Each pump is powered by a Class ‘F’ insulated motor, shrink-fitted for optimal heat transfer, dipped and baked thrice in Class ‘H’ varnish for high resistance to burnout and moisture damage.</p>
      </div>

      <div className="mb-5">
        <h6 className="fw-bold text-uppercase mb-4">Quality Dewatering Pumps for Efficient Water Management</h6>
        <p>At KPRS PUMPS, we specialize in providing top-of-the-line dewatering pumps engineered to handle the most demanding water removal tasks. Whether you're involved in construction, mining, or disaster recovery, our pumps are built to perform.</p>

        <h6 className="fw-semibold mt-4">Why Choose Our Dewatering Pumps?</h6>
        <ul>
          <li>Robust Construction for harsh environments</li>
          <li>Efficient Water Removal with high capacity</li>
          <li>Versatile Applications: construction, mining, and disaster recovery</li>
          <li>Advanced Technology for energy savings</li>
        </ul>

        <h6 className="fw-semibold mt-4">Product Highlights:</h6>
        <ul>
          <li>Submersible Pumps for clean/slurry water</li>
          <li>High Flow Rates</li>
          <li>Corrosion Resistant Materials</li>
          <li>Easy to Maintain Design</li>
        </ul>

        <h6 className="fw-semibold mt-4">Application Areas:</h6>
        <ul>
          <li>Construction Sites</li>
          <li>Mining Operations</li>
          <li>Disaster Recovery</li>
        </ul>

        <h6 className="fw-semibold mt-4">Submersible Dewatering Pumps:</h6>
        <ul>
          <li>For Sumps and Pits, Flooded Basements, Wellpoint dewatering</li>
          <li>Used in Offshore Construction, Pharmaceutical, Steel & Cement companies</li>
        </ul>

        <h6 className="fw-semibold mt-4">Submersible Non-Clog Slurry Pumps:</h6>
        <ul>
          <li>For Poultry farms, Gobar gas plants, and Restaurants</li>
          <li>Used in Food Processing and Sand Washing Plants</li>
        </ul>
      </div>

      <div className="bg-light p-4 rounded shadow">
        <h5 className="fw-bold text-uppercase mb-3">Top Models Overview</h5>
        <div className="row">
          {[
            {
              hp: 5, model: "AK-5350-2P", head: "22 Mtr.", discharge: "1200 LPM", size: "3\" Hose", solid: "Up to 10 mm"
            },
            {
              hp: 10, model: "AK-10350-2P", head: "30 Mtr.", discharge: "3200 LPM", size: "4\" Hose", solid: "Up to 10 mm"
            },
            {
              hp: 35, model: "AK-35350-2P", head: "45 Mtr.", discharge: "7200 LPM", size: "6\" Hose", solid: "Up to 30 mm"
            },
          ].map((pump, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h6 className="fw-bold">{pump.hp} HP Submersible Dewatering Pump</h6>
                  <p className="mb-1">Model: <strong>{pump.model}</strong></p>
                  <p className="mb-1">Max Head: {pump.head}</p>
                  <p className="mb-1">Max Discharge: {pump.discharge}</p>
                  <p className="mb-1">Solid Handling: {pump.solid}</p>
                  <p className="mb-1">Discharge Size: {pump.size}</p>
                  <p className="text-muted small">Available in SS 304/316, 50 Hz & 60 Hz options</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
