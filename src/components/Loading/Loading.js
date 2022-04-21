import "./Loading.css";

import mario from "../../img/8bit-rotating-mario.gif";
import loading from "../../img/8bit-loading.gif";

export default function Loading() {
  return (
    <>
      <body style={{ background: "black" }} >
        <div className="container">
          <div>
            <img className="loading" src={loading} alt="8bit-loading" />
          </div>
          <div>
            <img className="mario" src={mario} alt="8bit-mario" />
          </div>
        </div>
      </body>
    </>
  );
}
