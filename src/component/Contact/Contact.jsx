import React, { useState } from "react";
import emailjs from "emailjs-com";
import insta from "../../assets/ContactPage/insta.svg";
import facebook from "../../assets/ContactPage/facebook.svg";
import youtube from "../../assets/ContactPage/youtube.svg";
import location from "../../assets/ContactPage/location.svg";
import phone from "../../assets/ContactPage/phone.svg";
import mail from "../../assets/ContactPage/mail.svg";
import support from "../../assets/ContactPage/support.svg";
import section1 from "../../assets/ContactPage/section1.png";
import section2 from "../../assets/ContactPage/section2.png";
import styles from "./NewContact.module.css";
import "./Contact.css";

import Recaptcha from "../Recaptcha";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (value) => { setCaptchaValue(value); };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA to submit the form.");
      return;
    }

    // Send the form data to Gmail via EmailJS
    emailjs
      .send(
        "1234", // Service ID from EmailJS
        "template_lk8lyko", // Template ID from EmailJS
        formData, // The form data that will be sent
        "0-3YxFFXVahKZTKmH" // User ID from EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="contact-page">
      <img src={section1} alt="First BG" className="bg-sec1" />
      <div className="contact-page-content">
        <div className="main" style={{ justifyContent: "space-between" }}>
          <div className="cols-1">
            <h1>Get In Touch</h1>
            <p className="sm:text-[24px] sm:opacity-[75%] sm:font-thin">
            "Have big dreams and bigger goals? Let’s connect and turn your aspirations into achievements!"
            </p>
          </div>
          <div className="cols-2 display-none">
            <h2 className="sm:text-[24px] sm:font-bold sm:mb-[15px]">
              Follow Us On
            </h2>
            <div className="icon-list">
  <a href="https://www.instagram.com/sgeducationacademy" target="_blank" rel="noopener noreferrer">
    <img src={insta} alt="Instagram" />
  </a>
  <a href="https://www.facebook.com/sgeduhc" target="_blank" rel="noopener noreferrer">
    <img src={facebook} alt="Facebook" />
  </a>
  <a href="https://www.youtube.com/@S.G.Education" target="_blank" rel="noopener noreferrer">
    <img src={youtube} alt="YouTube" />
  </a>
</div>

          </div>
        </div>
        <div className="main">
          <div className="column-1">
            <div className={styles.box}>
              <div className={styles.flipContainer}>
                <div className={styles.flipFront}>
                  <img src={location} alt="" />
                  <p className="sm:text-[24px] sm:opacity-[75%] sm:font-thin">
                    Address
                  </p>
                </div>
                <div className={styles.flipBack}>
                  <img src={location} alt="" />
                  <h2 className="sm:text-[24px] sm:font-bold sm:mb-[15px]">
                    Address
                  </h2>
                  <h4>
                    Office No 109, Whitefield, Flower valley, Opposite Gurudev
                    NX, Khadakpada, Birla College Road, Kalyan Maharashtra,
                    421301
                  </h4>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.flipContainer}>
                <div className={styles.flipFront}>
                  <img src={phone} alt="" />
                  <p className="sm:text-[24px] sm:opacity-[75%] sm:font-thin">
                    Phone
                  </p>
                </div>
                <div className={styles.flipBack}>
                  <img src={phone} alt="" />
                  <h2 className="sm:text-[24px] sm:font-bold sm:mb-[15px]">
                    Phone
                  </h2>
                  <h4>
                  +91 8591932112
                  </h4>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.flipContainer}>
                <div className={styles.flipFront}>
                  <img src={mail} alt="" />
                  <p className="sm:text-[24px] sm:opacity-[75%] sm:font-thin">
                    Email ID
                  </p>
                </div>
                <div className={styles.flipBack}>
                  <img src={mail} alt="" />
                  <h2 className="sm:text-[24px] sm:font-bold sm:mb-[15px]">
                    Email ID
                  </h2>
                  <h4>
                  sgeducation@gmail.com
                  </h4>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.flipContainer}>
                <div className={styles.flipFront}>
                  <img src={support} alt="" />
                  <p className="sm:text-[24px] sm:opacity-[75%] sm:font-thin">
                    Support Team
                  </p>
                </div>
                <div className={styles.flipBack}>
                  <img src={support} alt="" />
                  <h2 className="sm:text-[24px] sm:font-bold sm:mb-[15px]">
                    Support Team
                  </h2>
                  <h4>
                  Chat with our WhatsApp support team to get insights about SG educations, Course work and enrolling process.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="column-2">
            <div className={styles.formContainer}>
              <h1>Send a Message</h1>
              <form action="" onSubmit={handleSubmit}>
              <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
               <input type="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" required/>
                <div className={styles.textareaContainer}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id=""
                    placeholder="Write Your message here"
                    style={{height: "100%"}}
                    required
                  ></textarea>

                  <button type="submit">Submit</button>
                </div>
                <br />
                <Recaptcha onChange={handleCaptchaChange} required/>
                <p className="sm:text-[24px] sm:opacity-[75%] sm:font-thin">
                  Terms and conditions or Privacy policy
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="mapContainer">
          <div className="mapMaintain">
            <h1>Explore in Maps</h1>
            <div className="mapWrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6976948085035!2d73.13538367472482!3d19.     252002446424655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.      1!3m3!1m2!1s0x3be79736706a0099%3A0x710171692ba67415!2sSG%20Education!5e0!3m2!1sen!2sin!4v1727784347118!5m2!1sen!2sin"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <img src={section2} alt="Second BG" className="bg-sec2" />
        </div>
      </div>
    </div>
  );
}
