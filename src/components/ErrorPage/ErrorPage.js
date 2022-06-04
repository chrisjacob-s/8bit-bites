import "./ErrorPage.css";

import NavbarAlt from "../NavbarAlt/NavbarAlt";

import running from "../../img/8bit-mario-running.gif";

export default function ErrorPage() {
  return (
    <>
      <NavbarAlt />
      <div className="app__error-page">
        <div className="app__error-section">
          <h1>Error!</h1>
          <h2>It seems you have lost your way!</h2>
          <div className="app__error-image">
            <img src={running} alt="8bit-mario-running" />
          </div>
        </div>
      </div>
    </>
  );
}
