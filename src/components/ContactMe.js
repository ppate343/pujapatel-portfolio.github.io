import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import '../css/Contact.css';

const ContactMe= () => {
  return (
    <footer id='contact' className="contact-form-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input type="tel" id="number" name="number" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <p>  647-615-2280</p>
        <p> ppate2208@gmail.com</p>
      </div>
      <div className="social-media-links">
        <a href="https://www.linkedin.com/in/ppate343" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/ppate343" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default ContactMe;
