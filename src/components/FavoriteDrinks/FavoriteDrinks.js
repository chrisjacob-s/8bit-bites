import "./FavoriteDrinks.css";

import beer from "../../img/8bit-beer.gif";

import Subheading from "../Subheading/Subheading";

export default function FavoriteDrinks() {
  return (
    <>
      <section className="app__drinks-section">
        <div className="app__drinks-drink">
          <img src={beer} alt="8bit-beer"></img>
        </div>
        <div className="app__drinks-menu">
          <Subheading
            title="Favorite Drinks"
            subtitleDark="From the Bar"
          />
          <div className="app__drink-items">
            <div className="app__drink-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__drink-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__drink-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__drink-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__drink-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__drink-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
