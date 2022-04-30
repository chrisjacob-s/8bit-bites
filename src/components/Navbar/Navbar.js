import { useState } from "react";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import mario from "../../img/8bit-rotating-mario.gif";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [backgroundChange, setBackgroundChange] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      console.log("Hello")
      setBackgroundChange(true);
    } else {
      setBackgroundChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={mario} alt="mario" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__vt323">
            <a href="#home">Home</a>
          </li>
          <li className="p__vt323">
            <a href="#foods">Foods</a>
          </li>
          <li className="p__vt323">
            <a href="#drinks">Drinks</a>
          </li>
          <li className="p__vt323">
            <a href="#locations">Locations</a>
          </li>
        </ul>
        <div className="app__navbar-contact">
          <a href="#contact" className="p__vt323">
            <button type="button" className="custom__button">
              Contact
            </button>
          </a>
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            cursor="pointer"
            color="#fff"
            fontSize={27}
            onClick={() =>
              setToggleMenu(true)
            } /*clicking hamburger menu will set toggleMenu to true*/
          />

          {/* if toggleMenu is true, then show this */}
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen-links">
                <li className="p__pressstart2p">
                  <a href="#home">Home</a>
                </li>
                <li className="p__pressstart2p">
                  <a href="#foods">Foods</a>
                </li>
                <li className="p__pressstart2p">
                  <a href="#drinks">Drinks</a>
                </li>
                <li className="p__pressstart2p">
                  <a href="#locations">Locations</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
