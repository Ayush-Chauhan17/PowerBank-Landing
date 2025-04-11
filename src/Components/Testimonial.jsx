import React from "react";
import "./Testimonial.css";
// import quoteIcon from "../assets/quote_icon.svg";
import testimonials from "../assets/testimonial";

const Testimonial = () => {
  return (
    <div id="reviews" className="testimonial-section">
      <h1>What Our Customers Say</h1>
      <div className="testimonial-container">
        {testimonials.map((item, index) => {
          return <div className="testimonial-card" key={index}>
            {/* <img src={quoteIcon} className="quote-icon" alt="quote" /> */}
            <p className="review-text">"{item.review}"</p>
            <div className="user-info">
              <img src={item.image} alt={item.name} className="user-image" />
              <h3>{item.name}</h3>
            </div>
          </div>
})}
      </div>
    </div>
  );
};

export default Testimonial;
