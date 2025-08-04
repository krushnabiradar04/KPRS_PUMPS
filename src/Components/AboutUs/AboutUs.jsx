import React from 'react';
import './AboutUs.css';
import zedCert from "../../assets/Certificate.png";


export const AboutUs = () => {
  return (
    <div className="about-container container py-5">
      <h2 className="text-center mb-4">About Us</h2>

      <p><strong>KPR’S PUMPS</strong> has over 10 years of experience in submersible technology and during this time has developed a number of patented engineering and design innovations to improve equipment performance and efficiency. Our broad product range extends from 1.5 hp dewatering pumps to 50 hp pumps. KPR’S PUMPS equipment is being used successfully in wastewater, storm water, industrial and power plant applications including in nuclear power plants. We are leading manufacturers of Dewatering Pumps, Dewatering Pump Sets, Sewage Pumps, Non-Clog Pumps, Dewatering Systems, Dewatering Submersible Pumps, Submersible Dewatering Pumps, Submersible Pumps, Slurry Pumps, Sludge Pumps, Dewatering Equipments, Mud Pumps.</p>

      <p>The company has branch offices in Delhi (India), Adrud in Dubai & Bahrain. At present, the company is exporting 60% of its products to G.C.C. Countries and supplying pumps to prestigious projects through reputed construction companies. To ensure reliable performance and operations in the field, each pump is tested before leaving the factory. Our experienced customer service network ensures a full range of support services.</p>

      <p>The quality, reliability, and overall performance of our products combined with our strong service support will result in lower total life cycle costs for your submersible equipment.</p>

      <p>The maximum parts of the pump are in stainless steel construction and a few parts are in aluminum alloys with PP coating for better and long life in corrosion conditions.</p>

      <hr className="my-4" />

      <div className="pledge-section">
        <h4>KPR'S PUMPS pledge to you:</h4>
        <ul>
          <li>Quality and reliability in all our products</li>
          <li>Strong service and support after the sale</li>
          <li>Lower total life cycle equipment costs</li>
          <li>Maximum value for your investment</li>
        </ul>
      </div>

      <div className="text-center my-4">
        <img src={zedCert} alt="ZED Bronze Certificate" className="img-fluid shadow border rounded aboutus-image" />
      </div>
    </div>
  );
};


