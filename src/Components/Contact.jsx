import React from "react";
import "./Contact.css"
import theme_pattern from "../assets/theme_pattern.svg"
import mail_icon from "../assets/mail_icon.svg"
import call_icon from "../assets/call_icon.svg"
import location_icon from "../assets/location_icon.svg"

const Contact=()=>{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "dbe28b86-5272-4105-b6bc-602eac7b02df");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };



    return(
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Plug Into Support</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Stay charged, stay connected</h1>
                    <p>Want to know more about our product, warranty, or exclusive deals? Just drop us a message — we’re happy to help!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                           <img src={mail_icon} alt="" /><p>cddfsdfbs6@gmail.com</p> 
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>12328793291293</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Varanasi,Up</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your Name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit" >Submit now</button>
                </form>
            </div>
        </div>
    )
}
export default Contact