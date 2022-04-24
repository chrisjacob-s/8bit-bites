import "./Subheading.css";

import Navbar from "../Navbar/Navbar";

import mario from "../../img/8bit-rotating-mario.gif";

export default function Subheading() {
  return (
    <>
      <header>
        <Navbar />

        <div className="app__header-logo">
          <img src={mario} alt="8bit-mario"></img>
        </div>
      </header>
    </>
  );
}
