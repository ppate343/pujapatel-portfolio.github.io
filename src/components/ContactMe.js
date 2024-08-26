import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/Contact.css';
import emailjs from 'emailjs-com';

const ContactMe = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hp7ixxl', 'template_59anvdn', e.target, '4NLQNudsoxE5C0FCO')
      .then((result) => {
        console.log(result.text);
        setFeedback('Message sent successfully!');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        setFeedback('Failed to send message.');
      });
  };

  return (
    <footer id='contact' className="contact-form-container">
      <div className="footer-content">
        <h3>Contact Me</h3>
        <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
        
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
          <button type="submit">Send Message</button>
        </form>
        {feedback && <p className={`feedback ${feedback.includes('success') ? 'success' : 'error'}`}>{feedback}</p>}
        <ul className="socials">
          <li>
            <a href="https://www.linkedin.com/in/ppate343" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/ppate343" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy; <a href="#H">Puja Patel</a> 2024</p>
      </div>
    </footer>
  );
};

export default ContactMe;
