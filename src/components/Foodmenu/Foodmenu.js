import "./FoodMenu.css";

import hamburger from "../../img/8bit-hamburger.gif"
import chicken from "../../img/8bit-link-chicken.gif";
import Subheading from "../Subheading/Subheading";
import NavbarAlt from "../NavbarAlt/NavbarAlt";

export default function FoodMenu() {
  return (
    <>
      <NavbarAlt />
      <section className="app__menu-section">
        <div className="app__menu">
          <div className="app__food-image image-left">
            <img src={chicken} alt="8bit-hamburger" />
          </div>
          <div className="app__menu-center">
            <Subheading title="Tasty" subtitleDark="From the Kitchen" />
            <div className="app__menu-items">
              <div className="app__menu-item">
                <h3>8-Bit Bites Bites</h3>
                <p>
                  Three 8 oz brisket burger sliders stuffed with smoked cheddar,
                  topped with caramelized onions, pickles, special sauce,
                  brioche bun
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Pac-Man Pac-Chips</h3>
                <p>Add chilled habanero or pimento cheese dip</p>
                <p>Add buffalo or ranch seasoning dust</p>
              </div>
              <div className="app__menu-item">
                <h3>Kakariko Chicken Strips</h3>
                <p>
                  Tortilla chip crust, dry buffalo seasoning , house ranch,
                  crudite
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Maxim Tomato Soup</h3>
                <p>
                  Served with slice of cheesy garlic bread, in cup or bowl sizes
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Tour De Tostarenan</h3>
                <p>
                  Three tacos with chorizo, bacon, fig & mascarpone spread,
                  mango-habanero chutney
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Super Mario Pizza</h3>
                <p>
                  Italian sausage, seasoned ground beef, pepperoni, ham, salami
                  & bacon
                </p>
              </div>
              <div className="app__menu-item">
                <h3>8-Bit Bites Bites</h3>
                <p>
                  Three 8 oz brisket burger sliders stuffed with smoked cheddar,
                  topped with caramelized onions, pickles, special sauce,
                  brioche bun
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Pac-Man Pac-Chips</h3>
                <p>Add chilled habanero or pimento cheese dip</p>
                <p>Add buffalo or ranch seasoning dust</p>
              </div>
              <div className="app__menu-item">
                <h3>Kakariko Chicken Strips</h3>
                <p>
                  Tortilla chip crust, dry buffalo seasoning , house ranch,
                  crudite
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Maxim Tomato Soup</h3>
                <p>
                  Served with slice of cheesy garlic bread, in cup or bowl sizes
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Tour De Tostarenan</h3>
                <p>
                  Three tacos with chorizo, bacon, fig & mascarpone spread,
                  mango-habanero chutney
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Super Mario Pizza</h3>
                <p>
                  Italian sausage, seasoned ground beef, pepperoni, ham, salami
                  & bacon
                </p>
              </div>
            </div>
          </div>
          <div className="app__food-image image-right">
            <img src={hamburger} alt="8bit-hamburger" />
          </div>
        </div>
      </section>
    </>
  );
}
