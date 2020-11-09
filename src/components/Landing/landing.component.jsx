import React from "react";
import "./landing.styles.css";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
  <div className = "">
    <section className="">
    <div className="dark-overlay">
      <div className="landing-inner ">
        <p className= "content-land">
        <h1 className="x-large">Wanna Book!</h1>
        <p className="lead">Turf Booking made times x 100 simplier 🤣</p>
        <div className="buttons">
          <Link to="/register" className="btn btn-primary ">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-light">
            Login
          </Link>
          </div>
          </p>
      </div>
    </div>
  </section>
  
  </div>
   
    
  );
};

export default Landing;
