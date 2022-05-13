import "./Header.css";

import logo from "../../img/8bit-logo.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="app__header-logo">
          <img src={logo} alt="8bit-mario"></img>
        </div>
      </header>
    </>
  );
}
