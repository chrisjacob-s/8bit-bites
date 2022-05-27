import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section className="app__contact-us-section">
      <div className="app__contact-us">
        <div className="app__contact-us-card">
          <div className="app__contact-us-title">
            <h1>Contact Us</h1>
          </div>
          <div className="app__contact-us-info">
            <h4>(562)632-1445 / info@8bitbites.tv</h4>
          </div>
          <div className="app__contact-us-times">
            <h3>Monday - Thursday 5:00 pm - 12:00 am</h3>
            <h3>Friday 5:00 pm - 2:00 am</h3>
            <h3>Saturday 11:00 am - 2:00 am</h3>
            <h3>Sunday 11:00 am - 12:00 am</h3>
            <h3>Kitchen Closes at 11:30 pm Friday - Saturday</h3>
            <h3>And 10:30 pm Sunday - Thursday</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
