import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import BCA from '../assets/img/BCA.jpg';

const ProgramCard = ({ image, title, description, sem1, sem2, sem3, sem4, sem5, sem6 }) => {
  return (
    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
      <div className="program-item rounded">
        <div className="program-img position-relative">
          <div className="overflow-hidden img-border-radius">
            <img src={image} className="img-fluid w-100" alt={title} />
          </div>
        </div>
        <div className="program-text bg-white px-4 pb-3">
          <div className="program-text-inner">
            <h4>{title}</h4>
            <p className="mt-3 mb-0">{description}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
          {sem1 && (
            <small className="text-white">
              <i className="bi bi-arrow-up-right me-1"></i>
              <Link to="/SemesterOne" target="_blank" className="text-white text-decoration-none">
                {sem1}
              </Link>
            </small>
          )}
          {sem2 && (
            <small className="text-white">
              <i className="bi bi-arrow-up-right me-1"></i>
              <a href="/SemesterTwo" target="_blank" className="text-white text-decoration-none">
                {sem2}
              </a>
            </small>
          )}
          {sem3 && (
            <small className="text-white">
              <i className="bi bi-arrow-up-right me-1"></i>
              <a href="/SemesterThree" target="_blank" className="text-white text-decoration-none">
                {sem3}
              </a>
            </small>
          )}
          {sem4 && (
            <small className="text-white">
              <i className="bi bi-arrow-up-right me-1"></i>
              <a href="/SemesterFour" target="_blank" className="text-white text-decoration-none">
                {sem4}
              </a>
            </small>
          )}
          {sem5 && (
            <small className="text-white">
              <i className="bi bi-arrow-up-right me-1"></i>
              <a href="/SemesterFive" target="_blank" className="text-white text-decoration-none">
                {sem5}
              </a>
            </small>
          )}
          {sem6 && (
            <small className="text-white">
              <i className="bi bi-arrow-up-right me-1"></i>
              <a href="/SemesterSix" target="_blank" className="text-white text-decoration-none">
                {sem6}
              </a>
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

const BcaDepartments = () => {
  const programs = [
    {
      image: BCA,
      title: "BCA-I",
      description: "Every great developer was once a beginner. Code, learn, and grow every day.",
      sem1: "Semester 1",
      sem2: "Semester 2",
    },
    {
      image: BCA,
      title: "BCA-II",
      description: "Debug your code, but never your dreams. Keep learning, the best is yet to come!",
      sem3: "Semester 3",
      sem4: "Semester 4",
    },
    {
      image: BCA,
      title: "BCA-III",
      description: "Your logic defines you more than your syntax ever will.",
      sem5: "Semester 5",
      sem6: "Semester 6",
    },
  ];

  return (
    <>
      <Hero />
      <div className="container-fluid program py-5">
        <div className="container py-5">
          <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "700px" }}>
            <h1 className="mb-5 display-3">BCA Department</h1>
          </div>
          <div className="row g-5 justify-content-center">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/upcoming" className="btn btn-primary px-5 py-5 text-white btn-border-radius">
              View All Programs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BcaDepartments;
