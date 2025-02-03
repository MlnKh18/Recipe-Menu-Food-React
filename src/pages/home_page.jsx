import { Heart, Search } from "lucide-react";
import Recipe_1 from "../assets/images/recipe_1.jpeg";
import Recipe_2 from "../assets/images/recipe_2.jpeg";
import Recipe_3 from "../assets/images/recipe_3.jpeg";

const handleOnSubmit = (e) => {
  e.preventDefault();
};

const HomePage = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start min-h-screen gap-1 p-5 sm:p-10">
      <form className="w-full" action="#" onSubmit={handleOnSubmit}>
        <label
          htmlFor="search"
          className="flex items-center gap-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400 px-4 py-2"
        >
          <Search width={24} height={24} color="gray" />
          <input
            name="search"
            type="text"
            placeholder="What do you cook today?"
            className="w-full border-none focus:outline-none"
          />
        </label>
      </form>
      <h3 className="text-xl sm:text-2xl font-bold">Recommended Recipes</h3>
      <h5 className="text-gray-400 sm:text-lg font-semibold">
        Popular Recipes
      </h5>
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
    </div>
  );
};

export default HomePage;

export const RecipeCard = ({
  colorCard = "",
  hrefLink,
  image,
  label,
  tagRecipe,
}) => {
  const bgColor =
    colorCard === "red"
      ? "bg-red-200"
      : colorCard === "gray"
      ? "bg-gray-200"
      : colorCard === "orange"
      ? "bg-orange-200"
      : "";

  const tagColor =
    colorCard === "red"
      ? "bg-red-400"
      : colorCard === "gray"
      ? "bg-gray-400"
      : colorCard === "orange"
      ? "bg-orange-400"
      : "";

  return (
    <div
      className={`w-full aspect-square h-70 rounded-md relative shadow-md shadow-gray-700 hover:shadow-gray-900 ${bgColor}`}
    >
      <a href={hrefLink} className="relative">
        <img
          src={image}
          alt={label}
          className="w-full h-1/2 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition-all ease-in-out duration-300"
        />
        <div className="w-auto rounded-full p-1.5 bg-white absolute top-2 right-2 ">
          <Heart width={24} height={24} className="hover:text-red-500 hover:fill-red-500"/>
        </div>
        <h5 className="absolute bottom-2 left-2 text-white font-bold text-lg bg-black bg-opacity-50 px-2 py-1 rounded-lg">
          {label}
        </h5>
      </a>
      <div className="desc-recipes p-2 flex flex-col">
        <h3 className="text-base font-bold">{label}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="tags flex gap-2 mt-6">
          {tagRecipe?.split(" ").map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-md text-sm font-semibold ${tagColor}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
