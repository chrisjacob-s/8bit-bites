import "./Footer.css";
import { Link } from "react-router-dom";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="app__footer">
      <section className="app__footer-links-section">
          <ul className="app__footer-links">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/foods">
                Foods
              </Link>
            </li>
            <li>
              <Link to="/drinks">
                Drinks
              </Link>
            </li>
            <li>
              <Link to="/locations">
                Locations
              </Link>
            </li>
          </ul>
      </section>
      <section className="app__footer-socials-section">
        <div className="app__footer-socials-follow">FOLLOW</div>
        <div className="app__footer-socials">
          <a
            href="https://github.com/chrisjacob-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="app__footer-social" fontSize={18} />
          </a>
          <a
            href="https://www.instagram.com/chrisjacob_s/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="app__footer-social" fontSize={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/chrisjacob-s/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="app__footer-social" fontSize={18} />
          </a>
        </div>
      </section>
      <section className="app__footer-info">
        <p className="app__footer-phone">(562) 632-1445</p>
        <p>INFO@8BITBITES.TV</p>
        <p>6741 Bright Ave</p>
        <p>Whittier, California</p>
      </section>
    </footer>
  );
}
