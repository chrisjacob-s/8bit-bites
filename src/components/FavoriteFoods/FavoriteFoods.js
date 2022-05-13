import "./FavoriteFoods.css";

import beer from "../../img/8bit-beer.gif";

import Subheading from "../Subheading/Subheading";

export default function FavoriteFoods() {
  return (
    <>
      <section className="app__foods-section">
        <div className="app__foods-menu">
          <Subheading title="Favorite Foods" subtitleLight="From the Kitchen" />
          <div className="app__food-items">
            <div className="app__food-item">
              <div className="app__food-item">
                <h3>8-Bit Bites Bites</h3>
                <p>
                  Three 8 oz brisket burger sliders stuffed with smoked cheddar,
                  topped with caramelized onions, pickles, special sauce,
                  brioche bun
                </p>
              </div>
              <h3>Pac-Man Pac-Chips</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__food-item">
              <h3>Kakariko Chicken Strips</h3>
              <p>
                Tortilla chip crust, dry buffalo seasoning , house ranch,
                crudite
              </p>
            </div>
            <div className="app__food-item">
              <h3>Maxim Tomato Soup</h3>
              <p>
                Served with slice of cheesy garlic bread, in cup or bowl sizes
              </p>
            </div>
            <div className="app__food-item">
              <h3>Tour De Tostarenan</h3>
              <p>
                Three tacos with chorizo, bacon, fig & mascarpone spread,
                mango-habanero chutney
              </p>
            </div>
            <div className="app__food-item">
              <h3>Super Mario Pizza</h3>
              <p>
                Italian sausage, seasoned ground beef, pepperoni, ham, salami &
                bacon
              </p>
            </div>
          </div>
        </div>
        <div className="app__foods-food">
          <img src={beer} alt="8bit-beer"></img>
        </div>
      </section>
    </>
  );
}
