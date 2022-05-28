import "./ContactForm.css";

import sonic from "../../img/8bit-sonic.gif";
import kirby from "../../img/8bit-kirby.gif";

export default function ContactForm() {
  return (
    <div className="app__form-container">
      <div className="app__form-left form-image">
        <img src={sonic} alt="8bit-sonic" />
      </div>
      <form className="app__contact-form">
        <div className="app__form-name">
          <div className="app__form-label">
            <label>Name</label>
          </div>
          <div className="app__form-input">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
            />
          </div>
        </div>
        <div className="app__form-email">
          <div className="app__form-label">
            <label>Email</label>
          </div>
          <div className="app__form-input">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
            />
          </div>
        </div>
        <div className="app__form-message">
          <div className="app__form-label">
            <label>Message</label>
          </div>
          <div className="app__form-input">
            <textarea
              id="message"
              name="message"
              placeholder="Write something.."
            ></textarea>
          </div>
        </div>
        <div className="app__form-button">
          <button className="custom__button">Send Message</button>
        </div>
      </form>
      <div className="app__form-right form-image">
        <img src={kirby} alt="8bit-kirby" />
      </div>
    </div>
  );
}
