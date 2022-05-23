import "./Landing.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Home from "../Home";
import FoodMenu from "../FoodMenu/FoodMenu";
import DrinkMenu from "../DrinkMenu/DrinkMenu";
import LocationsPage from "../LocationsPage/LocationsPage";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ErrorPage from "../ErrorPage";

export default function Landing() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<FoodMenu />} />
          <Route path="/drinks" element={<DrinkMenu />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
