import "./DrinkMenu.css";

import wine from "../../img/8bit-wine.gif";
import Subheading from "../Subheading/Subheading";
import NavbarAlt from "../NavbarAlt/NavbarAlt";

export default function DrinkMenu() {
  return (
    <>
      <NavbarAlt />
      <section className="app__menu-section">
        <div className="app__menu">
          <div className="app__drink-image image-left">
            <img src={wine} alt="8bit-wine" />
            <img src={wine} alt="8bit-wine" />
          </div>
          <div className="app__menu-center">
            <Subheading title="Classy" subtitleDark="From the Bar" />
            <div className="app__menu-items">
              <div className="app__menu-item">
                <h3>The Blue Devil</h3>
                <p>
                  Humboldt Hemp Vodka, blueberry honey, lime, house-made
                  lavender biters
                </p>
              </div>
              <div className="app__menu-item">
                <h3>King Koopa Killer</h3>
                <p>
                  St, George Green Chile Vodka, lemon, agave, elderflower
                  liqueur, jalapeno rocks
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Do a Barrel Roll</h3>
                <p>
                  Cutwater Barrel-Rested Gin, Lillet Blanc, Guildhall Amaro
                  Municipio, Herbsaint rinse
                </p>
              </div>
              <div className="app__menu-item">
                <h3>1984</h3>
                <p>Laird's Applejack Brandy, Foro Amaro, lemon, salted honey</p>
              </div>
              <div className="app__menu-item">
                <h3>Cherry Pac-Blast</h3>
                <p>
                  Four Roses Bourbon, Demerara sugar, orange, compound bitters,
                  maraschino cherry
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Phoenix Down</h3>
                <p>
                  Old Overholt Rye, Guildhall Palazzo Vermouth, Benedictine
                  D.O.M, Foro Amaro, aromatized Laphroaig
                </p>
              </div>
              <div className="app__menu-item">
                <h3>The Blue Devil</h3>
                <p>
                  Humboldt Hemp Vodka, blueberry honey, lime, house-made
                  lavender biters
                </p>
              </div>
              <div className="app__menu-item">
                <h3>King Koopa Killer</h3>
                <p>
                  St, George Green Chile Vodka, lemon, agave, elderflower
                  liqueur, jalapeno rocks
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Do a Barrel Roll</h3>
                <p>
                  Cutwater Barrel-Rested Gin, Lillet Blanc, Guildhall Amaro
                  Municipio, Herbsaint rinse
                </p>
              </div>
              <div className="app__menu-item">
                <h3>1984</h3>
                <p>Laird's Applejack Brandy, Foro Amaro, lemon, salted honey</p>
              </div>
              <div className="app__menu-item">
                <h3>Cherry Pac-Blast</h3>
                <p>
                  Four Roses Bourbon, Demerara sugar, orange, compound bitters,
                  maraschino cherry
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Phoenix Down</h3>
                <p>
                  Old Overholt Rye, Guildhall Palazzo Vermouth, Benedictine
                  D.O.M, Foro Amaro, aromatized Laphroaig
                </p>
              </div>
            </div>
          </div>
          <div className="app__drink-image image-right">
            <img src={wine} alt="8bit-wine" />
            <img src={wine} alt="8bit-wine " className="second-image" />
          </div>
        </div>
      </section>
    </>
  );
}
