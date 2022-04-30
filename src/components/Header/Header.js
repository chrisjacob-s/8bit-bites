import "./Header.css";

import Navbar from "../Navbar/Navbar";

import mario from "../../img/8bit-rotating-mario.gif";

export default function Header() {
  return (
    <>
      <header>
        <div className="app__header-logo">
          <img src={mario} alt="8bit-mario"></img>
        </div>
      </header>
    </>
  );
}
