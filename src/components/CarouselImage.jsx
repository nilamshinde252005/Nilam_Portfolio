// src/components/CarouselImage.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";

import s161344 from "../assets/screenshot-16-13-44.png";
import s165421 from "../assets/screenshot-16-54-21.png";
import s161322 from "../assets/screenshot-16-13-22.png";
import s161258 from "../assets/screenshot-16-12-58.png";
import s165824 from "../assets/screenshot-16-58-24.png";
import s161151 from "../assets/screenshot-16-11-51.png";
import s161129 from "../assets/screenshot-16-11-29.png";
import s170130 from "../assets/screenshot-17-01-30.png";
import s170243 from "../assets/screenshot-17-02-43.png";
import s161233 from "../assets/screenshot-16-12-33.png";
import s161055 from "../assets/screenshot-16-10-55.png";

function CarouselImage() {
  return (
    <div style={{ marginTop: "5%",marginBottom:"8%" }}>
      <Carousel fade indicators={false} controls interval={3000}>
        <Carousel.Item>
          <img className="custom-img" src={s161344} alt="First slide" />
          <Carousel.Caption><h3>sign-in & sign-up</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-img" src={s165421} alt="Second slide" />
          <Carousel.Caption><h3>Journey- Save & edit YOUR RULES</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-img" src={s161322} alt="Third slide" />
          <Carousel.Caption><h3>Journey- YOUR RULES with music</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-img" src={s161258} alt="Fourth slide" />
          <Carousel.Caption><h3>Journey- save & edit journal</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-img" src={s165824} alt="Fifth slide" />
          <Carousel.Caption><h3>Journey- journal entry</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-img" src={s161151} alt="Sixth slide" />
          <Carousel.Caption><h3>Books</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-img" src={s161129} alt="Seventh slide" />
          <Carousel.Caption><h3>To do List- save & edit</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-img" src={s170130} alt="Eighth slide" />
          <Carousel.Caption><h3>Manifestation- overview</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-img" src={s170243} alt="Ninth slide" />
          <Carousel.Caption><h3>Manifestation- 28 days challenges</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-img" src={s161233} alt="Tenth slide" />
          <Carousel.Caption><h3>Manifestation- save & edit as per diff. 28 days challenges</h3></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-img" src={s161055} alt="Eleventh slide" />
          <Carousel.Caption><h3>Manifestation- progress tracker</h3></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselImage;
