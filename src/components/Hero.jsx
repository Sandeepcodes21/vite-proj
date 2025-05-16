
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import college from '../assets/img/college.jpeg';
import feast from '../assets/img/feast.jpg';
import college2 from '../assets/img/college2.jpeg';
import xest from '../assets/img/xest.jpg';
import college3 from '../assets/img/college3.jpeg';
import independence from '../assets/img/independence.jpg';
import christmas from '../assets/img/christmas.webp';
import image from '../assets/img/image.jpg';
function Hero() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
        data-bs-wrap="true"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
            aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
            aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
            aria-label="Slide 8"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={college} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={feast} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={college2} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={xest} className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src={college3} className="d-block w-100" alt="Slide 5" />
          </div>
          <div className="carousel-item">
            <img src={independence} className="d-block w-100" alt="Slide 6" />
          </div>
          <div className="carousel-item">
            <img src={christmas} className="d-block w-100" alt="Slide 7" />
          </div>
          <div className="carousel-item">
            <img src={image} className="d-block w-100" alt="Slide 8" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
