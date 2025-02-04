import { Heart, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { RecipeCard } from "../components/recipeCard";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleFetch(search.trim() || "a"); // Gunakan "a" sebagai default jika input kosong
    }, 300); // Debounce selama 300ms

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const handleFetch = async (searchQuery) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk menentukan warna kartu berdasarkan kategori makanan
  const getColor = (category) => {
    switch (category) {
      case "Beef":
        return "red";
      case "Chicken":
        return "orange";
      case "Dessert":
        return "gray";
      default:
        return "gray";
    }
  };

  return (
    <div className="w-full flex flex-col justify-start items-start min-h-screen gap-1 p-5 sm:p-10">
      <form className="w-full fixed top-0 md:flex flex-col gap-3 z-20 py-3 pr-10">
        <label className="flex items-center gap-2 border-2 bg-white border-gray-200 rounded-md px-4 py-2 focus-within:border-gray-400">
          <Search width={24} height={24} color="gray" />
          <input
            name="search"
            type="text"
            placeholder="What do you cook today?"
            className="w-full border-none focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </form>
      <h3 className="text-xl sm:text-2xl font-bold mt-14">
        Recommended Recipes
      </h3>
      <h5 className="text-gray-400 sm:text-lg font-semibold">
        Popular Recipes
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {isLoading ? (
          [...Array(10)].map((_, index) => (
            <div key={index} className="flex w-80 flex-col gap-4 mt-10">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))
        ) : recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              image={recipe.strMealThumb}
              label={recipe.strMeal}
              hrefLink={recipe.strSource}
              tagRecipe={recipe.strTags}
              colorCard={getColor(recipe.strCategory)}
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

