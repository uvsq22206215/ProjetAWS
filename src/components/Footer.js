import React from 'react';
import '../assets/css/Footer.css';
import backgroundImage from '../assets/img/footer-background.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/img/AWS Logo.png";

library.add(faEnvelope, faPhone, faFacebook, faTwitter, faInstagram);



function Footer() {
  return (
    <section id="footer" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="footer-container">
        <div className='footer-row'>
          <div className='footer-col'>
            <h1>SPREAD HAPPINESS TODAY</h1>

          </div>
        </div>
        <div className="footer-row">
          <div className="footer-logo">
            <img src={logo} alt="Logo" style={{ width: "300px", height: "auto" }} />
          </div>
          <div className="footer-col">
            <h3 style={{ fontWeight: 'bold' }}>About Us</h3>
            <ul>
              <li><a href="#">Privacy & Policy</a></li>
              <li><a href="#">Help & Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 style={{ fontWeight: 'bold' }}>Useful Information</h3>

            <ul>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Become Creator</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>

            </ul>
          </div>
          <div className="footer-col">
            <h3 style={{ fontWeight: 'bold' }}>Contact Us</h3>
            <ul>
              <li style={{ display: "flex", alignItems: "center" }}><FontAwesomeIcon icon={faEnvelope} className="mail-icon" /> <a href="#">hello@reallygreatsite.com</a> </li>
              <li style={{ display: "inline-block" }}><FontAwesomeIcon icon={faPhone} className="phone-icon" /><a href="tel:+334567890">(+33) 456 7890</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <h3 style={{ fontWeight: 'bold' }}>SOCIAL MEDIA</h3>

          <ul className="social-icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
          </ul>
        </div>
      </div>


    </section>
  );
}

export default Footer;
