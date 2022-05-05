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
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__food-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__food-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__food-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__food-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
            </div>
            <div className="app__food-item">
              <h3>House-Made Kennebec Potato Chip</h3>
              <p>Add chilled habanero or pimento cheese dip</p>
              <p>Add buffalo or ranch seasoning dust</p>
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
