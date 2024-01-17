
import React from 'react';
import "./about.css";
import Img8 from "../../Assests/img8.jpg";
const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>Welcome to Our Company</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Duo Reges: constructio interrete. Quis istud possit, inquit, negare? Cum id quoque, ut cupiebat, audivisset, evelli iussit eam, qua erat transfixus, hastam. Eam tum adesse, cum dolor omnis absit; An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas facit?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Duo Reges: constructio interrete. Quis istud possit, inquit, negare? Cum id quoque, ut cupiebat, audivisset, evelli iussit eam, qua erat transfixus, hastam. Eam tum adesse, cum dolor omnis absit; An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas facit?
        </p>
      </div>
      <div className="about-image">
        <img src={Img8} alt="Company" />
      </div>
    </div>
  );
};

export default AboutPage;
