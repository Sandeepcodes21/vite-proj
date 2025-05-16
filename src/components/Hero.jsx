
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
            <img src="src/assets/img/college.jpeg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/feast.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/college2.jpeg" className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/xest.jpg" className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/college3.jpeg" className="d-block w-100" alt="Slide 5" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/independence.jpg" className="d-block w-100" alt="Slide 6" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/christmas.webp" className="d-block w-100" alt="Slide 7" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/image.jpg" className="d-block w-100" alt="Slide 8" />
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
