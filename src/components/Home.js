import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import FavoriteFoods from "./FavoriteFoods/FavoriteFoods";
import FavoriteDrinks from "./FavoriteDrinks/FavoriteDrinks";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <FavoriteFoods />
      <FavoriteDrinks />
    </>
  );
}
