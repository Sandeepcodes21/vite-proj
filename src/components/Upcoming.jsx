
import React from "react";
import { Link } from "react-router-dom";
import BBA1 from "../assets/img/BBA1.jpg";
import BCP from "../assets/img/BCP.jpg";
import BJMC from "../assets/img/BJMC.jpg";
import bbaIb from "../assets/img/bba-ib.jpg";

// import Hero from "./Hero";
const programs = [
    { id: 1, name: "BBA", image: BBA1 },
    { id: 2, name: "BCP", image: BCP },
    { id: 3, name: "BBA(IB)", image: bbaIb },
    { id: 4, name: "BA(JMC)", image: BJMC },
];



const ProgramCard = ({ name, image }) => (
    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="program-item rounded">
            <div className="program-img position-relative">
                <div className="overflow-hidden img-border-radius">
                    <img src={image} className="img-fluid w-100" alt={name} />
                </div>
            </div>
            <div className="program-text bg-white px-4 pb-3">
                <div className="program-text-inner">
                    <a href="#" className="h4">{name}</a>
                    <p className="mt-3 mb-0"><i>Coming Soon...</i></p>
                </div>
            </div>
            <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3"></div>
            <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                <small className="text-white">
                    <i className="bi bi-arrow-up-right me-1"></i>
                    {/* <a href="https://www.google.com/"  className="disabled"><i>Coming Soon...</i></a> */}

                    {/* Coming Soon ancir tag btn disabled */}

                    <a
                        href="#"
                        className="disabled"
                        onClick={(e) => e.preventDefault()}
                        style={{ pointerEvents: 'none', cursor: 'default', textDecoration: 'none' }}>
                        <i>Coming Soon...</i>
                    </a>
                </small>
            </div>
        </div>
    </div>
);

const ProgramsList = () => (
    <div className="container-fluid program py-5">
        <div className="container py-5">
            <div className="row g-5 justify-content-center">
                {programs.map((program) => (
                    <ProgramCard key={program.id} name={program.name} image={program.image} />
                ))}
                <div className="d-inline-block text-center wow fadeIn" data-wow-delay="0.1s">
                    <Link to="/" className="btn btn-primary px-5 py-5 text-white btn-border-radius">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default ProgramsList;
