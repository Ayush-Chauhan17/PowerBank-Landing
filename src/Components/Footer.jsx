import React from "react";
import "./Footer.css";
import logoo from "../assets/logoo.png";
import user_icon from "../assets/user_icon.svg";

const Footer = () => {
  return (
    <div id="newsletter" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={logoo} alt="logo" /> */}
          <p>
          Join our community to stay updated with the latest launches, exclusive deals, and charging tips delivered straight to your inbox.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © {new Date().getFullYear()} Voltzylimited. All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
