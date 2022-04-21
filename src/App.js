import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
import Subheading from "./components/Subheading/Subheading"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? <Navbar /> : <Loading />}
      <Subheading />
    </>
  )
}

export default App;
