import { useState, useEffect } from "react";
import { RecipeCard } from "../components/recipeCard";

export const FavoritePage = () => {
  const [favoriteds, setFavoriteds] = useState([]);

  // Mengambil data favorit dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorited") || "[]"
    );
    // Filter hanya objek valid
    const validFavorites = storedFavorites.filter(item => typeof item === 'object');
    setFavoriteds(validFavorites);
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-start min-h-screen gap-1 p-5 sm:p-10">
      <h1 className="text-3xl font-bold my-5">Favorite Page</h1>

      {favoriteds.length === 0 ? (
        <p className="text-gray-400 sm:text-lg font-semibold">
          You have not added any favorite yet
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {favoriteds.map((fav, index) => (
            <RecipeCard
              key={index}
              image={fav.image} // Gantilah jika diperlukan
              label={fav.label} // Gantilah jika diperlukan
              hrefLink={fav.hrefLink} // Gantilah jika diperlukan
              tagRecipe={fav.tagRecipe} // Gantilah jika diperlukan
              colorCard={fav.colorCard} // Gantilah jika diperlukan
            />
          ))}
        </div>
      )}
    </div>
  );
};
