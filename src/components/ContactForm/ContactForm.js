import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="app__form-container">
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
    </div>
  );
}
