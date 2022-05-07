import "./Footer.css";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="app__footer">
      <section className="app__footer-links-section">
        <div className="app__footer-links">
          <a href="#home">HOME</a>
          <a href="#foods">FOOD MENU</a>
          <a href="#drinks">DRINK MENU</a>
          <a href="#contact">CONTACT</a>
        </div>
      </section>
      <section className="app__footer-socials-section">
        <div className="app__footer-socials-follow">FOLLOW</div>
        <div className="app__footer-socials">
          <BsGithub className="app__footer-social" fontSize={18} />
          <BsInstagram className="app__footer-social" fontSize={18} />
          <BsLinkedin className="app__footer-social" fontSize={18} />
        </div>
      </section>
      <section className="app__footer-info">
        <p>(562) 632-1445</p>
        <p>INFO@GUILDHALL.TV</p>
        <p>6741 Bright Ave</p>
        <p>Whittier, California</p>
      </section>
    </footer>
  );
}
