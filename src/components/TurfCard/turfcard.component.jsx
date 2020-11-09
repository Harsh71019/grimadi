import React from "react";
import "./turfcard.styles.css";
import Turf from "../../images/turf.jfif";
import Turf2 from "../../images/turf2.jfif";

const TurfCard = () => { 
  return (
    <section className="card-container-main">
      <div className="card-container">
        <div className="card-image">
          <img src={Turf} className="image-styling" alt="turf" />
        </div>
        <div className="card-title">Title</div>
        <div className="card-address">Address</div>
        <div>
            <button className="book-button">Book</button>
        </div>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={Turf2} className="image-styling" alt="turf2" />
        </div>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={Turf} className="image-styling" alt="turf"/>
        </div>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={Turf2} className="image-styling" alt="turf2" />
        </div>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={Turf} className="image-styling" alt="turf" />
        </div>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={Turf2} className="image-styling" alt="turf2" />
        </div>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={Turf} className="image-styling" alt="turf2" />
        </div>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={Turf2} className="image-styling" alt="turf2"/>
        </div>
      </div>
      <div className="card-container">
        <div className="card-image">
          <img src={Turf} className="image-styling" alt="turf"/>
        </div>
      </div>
    </section>
  );
};  

export default TurfCard;
