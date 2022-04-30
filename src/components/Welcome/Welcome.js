import "./Welcome.css";

import beer from "../../img/8bit-beer.gif";

import Subheading from "../Subheading/Subheading";

export default function Welcome() {
  return (
    <>
      <section className="app__welcome-section">
        <div className="app__welcome-beer">
          <img src={beer} alt="8bit-beer"></img>
        </div>
        <div className="app__welcome-subheading">
          <Subheading title="Welcome to" subtitle="8-Bit Bites" />
          <h4 className="app__address">1984 Tapper Rd, Midway Bally</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vulputate mi sit amet mauris commodo quis imperdiet massa. Mauris
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et. Non nisi est sit amet facilisis. Sem integer vitae justo eget
            magna fermentum iaculis. Amet est placerat in egestas erat imperdiet
            sed. Sed elementum tempus egestas sed.
          </p>
        </div>
      </section>
    </>
  );
}
