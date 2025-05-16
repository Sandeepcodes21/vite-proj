import React from 'react';
import supriya1 from '../assets/img/supriya1.jpeg';
import MukeshSir from '../assets/img/MukeshSir.jpg';
import vandna from '../assets/img/vandna.jpeg';
import prak from '../assets/img/prak.jpg';
import rakesh from '../assets/img/rakesh.jpg';
import FatherSeb1 from '../assets/img/FatherSeb1.jpeg';
const Footer = () => {
  const images = [{supriya1, MukeshSir, vandna, prak, rakesh, FatherSeb1}];

  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          {/* LOCATION SECTION */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="footer-item">
              <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">LOCATION</h4>
              <div className="d-flex flex-column align-items-start">
                <a href="https://sxcpatna.edu.in/" className="text-body mb-4"><i className="fa fa-map-marker-alt text-primary me-2"></i>St. Xavier's College of Management & Technology, Digha-Aashiyaana Road, Digha, Patna 800-011</a>
                <a href="" className="text-start rounded-0 text-body mb-4"><i className="fa fa-phone-alt text-primary me-2"></i>+91-8877617734</a>
                <a href="" className="text-start rounded-0 text-body mb-4"><i className="fas fa-envelope text-primary me-2"></i> info@sxcpatna.edu.in</a>
                <div className="footer-icon d-flex">
                  <a className="btn btn-primary btn-sm-square me-3 rounded-circle text-white" href="https://www.facebook.com/sxcmtpatna/"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-primary btn-sm-square me-3 rounded-circle text-white" href="https://www.youtube.com/@st.xavierscollegeofmgt.tec5556"><i className="fab fa-youtube"></i></a>
                  <a href="https://www.instagram.com/sxcmtpatnaofficial/" className="btn btn-primary btn-sm-square me-3 rounded-circle text-white"><i className="fab fa-instagram"></i></a>
                  <a href="https://in.linkedin.com/school/st.-xavier's-college-of-management-&-technology/" className="btn btn-primary btn-sm-square rounded-circle text-white"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Empty space column (merged) */}
          <div className="col-md-12 col-lg-8 col-xl-6">
            {/* Custom content can be added here */}
          </div>

          {/* GALLERY SECTION */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="footer-item">
              <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                OUR FACULTY
              </h4>
              <div className="row g-3">
                {images.map((image, index) => (
                  <div className="col-4" key={index}>
                    <div
                      className="footer-galary-img border border-primary"
                      style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "8px",
                        padding: "5px",
                      }}
                    >
                      <img
                        src={image}
                        className="img-fluid"
                        alt={`Gallery ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;