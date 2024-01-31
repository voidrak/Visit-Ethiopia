import React from "react";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="logo-social">
        <div className="logo">
          <img src="/MARA.png" alt="mara logo" />
          <h1>travel</h1>
        </div>
        <p>
          Let us be your gateway to the captivating beauty and diversity of
          Ethiopia.
        </p>
        <div className="social"></div>
      </div>

      <div className="helpful-links">
        <ul>
          <li>Explore</li>
          <li>How to</li>
          <li>Reserve</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="information">
        <ul>
          <li>Explore</li>
          <li>How to</li>
          <li>Reserve</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="contact">
        <ul className="caleb">
          <li>
            <a href="tel:+25172665987"></a>
          </li>
          <li>
            <a href="mailto:Kalebtesfaye81@gmail.com"></a>
          </li>
        </ul>
        <ul className="caleb">
          <li>
            <a href="tel:+251921607264"></a>
          </li>
          <li>
            <a href="mailto:nahomabrahamofficial@gmail.com"></a>
          </li>
        </ul>
      </div>
      <div className="payment"></div>
    </div>
  );
};

export default ContactSection;
