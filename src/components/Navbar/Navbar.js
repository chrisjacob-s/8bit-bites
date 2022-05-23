import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import mario from "../../img/8bit-rotating-mario.gif";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [backgroundChange, setBackgroundChange] = useState(false);
  const [currentLink, setCurrentLink] = useState("");

  let navbarBackground = {};
  switch (currentLink) {
    case "home":
      navbarBackground = { backgroundColor: "none" };
      break;
    case "*":
      navbarBackground = { background: "var(--color-black" };
      break;
    default:
      navbarBackground = {};
  }

  /* Function that changes toggleMenu to true and prevents scroll*/
  const overlayOverflowHidden = () => {
    setToggleMenu(true);
    document.body.style.overflow = "hidden";
  };

  /* Function that changes toggleMenu to false and enables scroll*/
  const overlayOverflowScroll = () => {
    setToggleMenu(false);
    document.body.style.overflow = "auto";
  };

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      /* Scrolling down will change backgroundChange to true */
      setBackgroundChange(true);
    } else {
      setBackgroundChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <>
      {/* if backgroundChange is true then set the nav class to app__navbar and change, else just app__navbar */}
      {/* meaning app__navbar will only have black background when the window scroll exceeds 80 */}
      <nav
        className={
          backgroundChange
            ? "app__navbar app__navbar-change slide-bottom"
            : "app__navbar"
        }
        style={navbarBackground}
      >
        <div
          className={
            backgroundChange
              ? "app__navbar-logo app__navbar-shrink-image"
              : "app__navbar-logo"
          }
        >
          <img src={mario} alt="mario" />
        </div>
        <ul className="app__navbar-links">
          <li>
            <Link to="/" onClick={() => setCurrentLink("home")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/foods" onClick={() => setCurrentLink("*")}>
              Foods
            </Link>
          </li>
          <li>
            <Link to="/drinks" onClick={() => setCurrentLink("*")}>
              Drinks
            </Link>
          </li>
          <li>
            <Link to="/locations" onClick={() => setCurrentLink("*")}>
              Locations
            </Link>
          </li>
        </ul>
        <div className="app__navbar-contact">
          <Link to="/contact">
            <button type="button" className="custom__button">
              Contact
            </button>
          </Link>
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            cursor="pointer"
            color="#fff"
            fontSize={27}
            onClick={overlayOverflowHidden}
            /* clicking hamburger enable the overlay and prevent scrolling*/
          />

          {/* if toggleMenu is true, then show this */}
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={overlayOverflowScroll}
                /* clicking symbol disables the overlay and enables scrolling */
              />
              <ul className="app__navbar-smallscreen-links">
                <li className="p__pressstart2p">
                  <Link to="/" onClick={() => setCurrentLink("home")}>
                    Home
                  </Link>
                </li>
                <li className="p__pressstart2p">
                  <Link to="/foods" onClick={() => setCurrentLink("*")}>
                    Foods
                  </Link>
                </li>
                <li className="p__pressstart2p">
                  <Link to="/drinks" onClick={() => setCurrentLink("*")}>
                    Drinks
                  </Link>
                </li>
                <li className="p__pressstart2p">
                  <Link to="/locations" onClick={() => setCurrentLink("*")}>
                    Locations
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
