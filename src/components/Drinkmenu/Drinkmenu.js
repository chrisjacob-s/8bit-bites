import "./DrinkMenu.css";

import magic from "../../img/8bit-magic-potion.gif";
import galaxy from "../../img/8bit-galaxy-potion.gif";
import Subheading from "../Subheading/Subheading";
import NavbarAlt from "../NavbarAlt/NavbarAlt";

export default function DrinkMenu() {
  return (
    <>
      <NavbarAlt />
      <section className="app__menu-section">
        <div className="app__menu">
          <div className="app__drink-image image-left">
            <img src={magic} alt="8bit-magic-potion" />
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
                <h3>The Paralyzer</h3>
                <p>
                  New Amsterdam Gin, Yellow Chartreuse, Giffard's Passion Fruit
                  Liqueur, lemon up
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Bubble Bobble Bubble</h3>
                <p>
                  Louisiana Bayou White Rum, Aperol, lemon, grilled pineapple,
                  pink peppercorn tincture. Tail.
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Ekans Loi</h3>
                <p>
                  Marti 3 year rum, Gosling's black seal rum, green chili vodka,
                  pineapple juice, citrus blend, honey, angostura bitters,
                  crushed ice.
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Duck Hunter</h3>
                <p>
                  Astral Pacific Gin, Green Chatreuse, Luxardo Marashino
                  Liqueur, lemon. Up.
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Little Icarus</h3>
                <p>
                  Four Roses Bourbon, luxardo Maraschino, lime,
                  blackberry-balsamic shurb, aquadfaba. Foamy
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Metroid Primer</h3>
                <p>Machetazo mezcal, lime juice, grenadine. Up.</p>
              </div>
            </div>
          </div>
          <div className="app__drink-image image-right">
            <img src={galaxy} alt="8bit-galaxy-potion" />
          </div>
        </div>
      </section>
    </>
  );
}
