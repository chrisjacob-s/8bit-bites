import "./Loading.css";

import mario from "../../img/8bit-rotating-mario.gif";

export default function Loading() {
  return (
    <>
      <div class="container">
        <div>
          <h1>LOADING</h1>
        </div>
        <div>
          <img className="mario" src={mario} alt="8bit-mario" />
        </div>
      </div>
    </>
  );
}
