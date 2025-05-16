import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s">
      <div className="container topbar bg-primary d-none d-lg-block py-2" style={{ borderRadius: "0 40px" }}>
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3">
              <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
              <a href="#" className="text-white">Digha, Aasiyana Road, PATNA-800011, BIHAR</a>
            </small>
            <small className="me-3">
              <i className="fas fa-envelope me-2 text-secondary"></i>
              <a href="#" className="text-white">info@sxcpatna.edu.in</a>
            </small>
          </div>
          <div className="top-link pe-2">
            <a href="https://www.facebook.com/sxcmtpatna/" className="btn btn-light btn-sm-square rounded-circle">
              <i className="fab fa-facebook-f text-secondary"></i>
            </a>
            <a href="https://www.youtube.com/@st.xavierscollegeofmgt.tec5556" className="btn btn-light btn-sm-square rounded-circle">
              <i className="fab fa-youtube text-secondary"></i>
            </a>
            <a href="https://www.instagram.com/sxcmtpatnaofficial/" className="btn btn-light btn-sm-square rounded-circle">
              <i className="fab fa-instagram text-secondary"></i>
            </a>
            <a href="https://in.linkedin.com/school/st.-xavier's-college-of-management-&-technology/" className="btn btn-light btn-sm-square rounded-circle me-0">
              <i className="fab fa-linkedin-in text-secondary"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container px-0 clg">
        <nav className="navbar navbar-light navbar-expand-xl py-3">

        <div>
        <img src="https://sxcpatna.edu.in/wp-content/uploads/2023/04/Emblem-SXCMT-2-1427x1536.png" alt="College Logo" className="clgLogo me-3 "/>
        </div>
          
          <a target="_blank" href="https://sxcpatna.edu.in/" className="navbar-brand ">
          <p className="text-primary display-8 nameHeader" style={{ letterSpacing: '1px' }}>St. Xavier’s College of Management & Technology</p>
          <p className="naacHeader">NAAC Accredited with B++ Grade (1st Cycle) | AICTE Approved</p>
          </a>
          <div className="d-flex ms-auto align-items-center">
          <img src="https://sxcpatna.edu.in/wp-content/uploads/2023/04/Finolex-Academy-of-Management-and-Technology-Ratnagiri-2-750x410-2.png" alt="CollegeLogo1" className="clgLogo1"/>
          <img src="https://sxcpatna.edu.in/wp-content/uploads/2024/04/ISOcertified.png" alt="CollegeLogo2" className="clgLogo2"/>
          <img src="https://sxcpatna.edu.in/wp-content/uploads/2024/05/iiclogo.png" alt="CollegeLogo3" className="clgLogo3"/>
          </div>
          {/* <div className="d-flex ms-auto me-4">
            <div id="phone-tada" className="d-flex align-items-center justify-content-center">
              <a href="#" className="position-relative wow tada" data-wow-delay=".9s">
                <i className="fa fa-phone-alt text-primary fa-2x me-4"></i>
                <div className="position-absolute" style={{ top: "-7px", left: "20px" }}>
                  <span>
                    <i className="fa fa-comment-dots text-secondary"></i>
                  </span>
                </div>
              </a>
            </div>
            <div className="d-flex flex-column pe-3 border-end border-primary">
              <span className="text-primary">Have any questions?</span>
              <a href="#">
                <span className="text-secondary">Free: + 0123 456 7890</span>
              </a>
            </div>
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;