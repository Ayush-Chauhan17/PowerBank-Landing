import React from "react";
import "./Features.css";
import theme_pattern from '../assets/theme_pattern.svg'
import Services_Data from "../assets/services_data";
import Products from'../assets/product_card';
import arrow_icon from '../assets/arrow_icon.svg'
const Features = () => {
  return (
    <div id="products" className="features">
        <div className="features-title">
        <h1>Choose Your Power Companion</h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className="features-container">
         {Products.map((item,index)=>{
            return <div key={index} className="features-format">
                <img src={item.s_img} alt={item.s_name} className="features-img"  />
                <h2>{item.s_name}</h2>
                <p>{item.s_desc}</p>
                <div className="features-price-rating">
                <p className="rating">⭐ {item.s_rate}</p>
                  <p className="price">{item.s_price}</p>
                  
                </div>
                <div className="features-readmore">
                <button className="buy-now-btn">Buy Now</button>
                    {/* <img src={arrow_icon} alt="" /> */}
                </div>
            </div>
         })}
      </div>
    </div>
  );
};

export default Features;
