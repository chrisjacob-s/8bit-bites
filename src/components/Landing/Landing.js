import "./Landing.css";

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import FavoriteFoods from "../FavoriteFoods/FavoriteFoods";
import FavoriteDrinks from "../FavoriteDrinks/FavoriteDrinks";
import Footer from "../Footer/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Header />
      <Welcome />
      <FavoriteFoods />
      <FavoriteDrinks />
      <Footer />
    </>
  );
}
