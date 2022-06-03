import "./FoodMenu.css";

import fried from "../../img/8bit-fried-chicken.gif";
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
            <img src={chicken} alt="8bit-link-chicken" />
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
                <h3>Poke Monster Burger</h3>
                <p>
                  1 lb brisket burger stuffed with smoked cheddar, topped with
                  caramelized onions, pickles, special sauce, brioche bun
                </p>
                <p>Choose between 2 inspired Pokemons: Pikachu and Eevee</p>
              </div>
              <div className="app__menu-item">
                <h3>Yoshi Egg Omelet</h3>
                <p>Japanese rice omelet, served with ketchup drizzled on top</p>
              </div>
              <div className="app__menu-item">
                <h3>Cheep-Cheep Sashimi</h3>
                <p>Raw salmon, pickled ginger, ponzu sauce</p>
              </div>
              <div className="app__menu-item">
                <h3>Little Mac & Cheese</h3>
                <p>
                  Three cheese blend, herbed bread crumbs, chili oil (Add bacon
                  or caramelized onion)
                </p>
              </div>
              <div className="app__menu-item">
                <h3>Blanka Veggie Wrap</h3>
                <p>
                  Mixed greens, portobello mushroom, tomato, cucumber, red
                  onion, feta, piquillo pepper hummus, tahini, spinach tortilla
                </p>
                <p>Add grilled chicken</p>
              </div>
              <div className="app__menu-item">
                <h3>Princess Peach's Cheesecake</h3>
                <p>
                  Classic cream cheese cheesecake with amaretto and a chocolate
                  almond crust
                </p>
              </div>
            </div>
          </div>
          <div className="app__food-image image-right">
            <img src={fried} alt="8bit-fried-chicken" />
          </div>
        </div>
      </section>
    </>
  );
}
