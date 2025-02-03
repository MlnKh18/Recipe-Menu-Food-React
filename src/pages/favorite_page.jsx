import { RecipeCard } from "./home_page";
import Recipe_1 from "../assets/images/recipe_1.jpeg";
import Recipe_2 from "../assets/images/recipe_2.jpeg";
import Recipe_3 from "../assets/images/recipe_3.jpeg";

export const FavoritePage = () => {
  const fav = true;
  return (
    <div className="w-full flex flex-col justify-start items-start min-h-screen gap-1 p-5 sm:p-10">
      <h1 className="text-3xl font-bold my-5">Favorite Page</h1>
      {/*
      !fav → Mengecek apakah nilai fav adalah falsy (misalnya false, null, undefined, 0, "").
      && (operator AND) → Jika kondisi benar (true), maka ekspresi setelah && akan dieksekusi atau ditampilkan.
      */}
      {!fav && (
        <p className="text-gray-400 sm:text-lg font-semibold">
          You have not added any favorite yet
        </p>
      )}

      {fav && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <RecipeCard
            image={Recipe_1}
            label="Recipe 1"
            hrefLink="#"
            tagRecipe="food a"
            colorCard="red"
          />
          <RecipeCard
            image={Recipe_2}
            label="Recipe 2"
            hrefLink="#"
            tagRecipe="food b"
            colorCard="gray"
          />
          <RecipeCard
            image={Recipe_3}
            label="Recipe 3"
            hrefLink="#"
            tagRecipe="food c"
            colorCard="orange"
          />
        </div>
      )}
    </div>
  );
};
