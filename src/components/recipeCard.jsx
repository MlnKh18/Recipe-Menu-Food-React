import clsx from "clsx";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
const handleAddToFavorites = (e, recipe, isFavorited, setIsFavorited) => {
  e.preventDefault();
  let favorited = JSON.parse(localStorage.getItem("favorited") || "[]"); // Ambil daftar favorit dari localStorage

  // Hapus data yang tidak valid (seperti string) dari localStorage sebelum melakukan operasi lainnya
  favorited = favorited.filter(item => typeof item === 'object'); // Hanya simpan objek valid

  console.info(favorited); // Periksa isi daftar favorit yang telah difilter

  // Cek apakah objek resep sudah ada dalam daftar favorit
  const exists = favorited.some((item) => item.hrefLink === recipe.hrefLink);

  if (exists) {
    // Hapus objek resep yang sudah ada dalam daftar favorit
    favorited = favorited.filter((item) => item.hrefLink !== recipe.hrefLink);
    setIsFavorited(false);
  } else {
    // Tambahkan objek resep ke dalam daftar favorit jika belum ada
    favorited.push(recipe);
    setIsFavorited(true);
  }

  // Simpan kembali ke localStorage, pastikan hanya objek yang valid yang disimpan
  localStorage.setItem("favorited", JSON.stringify(favorited));
};

export const RecipeCard = ({
  colorCard = "",
  hrefLink,
  image,
  label,
  tagRecipe,
}) => {
  const recipe = { hrefLink, image, label, tagRecipe, colorCard };
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    // Ambil daftar favorit dari localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorited") || "[]");

    // Filter hanya objek resep yang valid dari localStorage
    const validFavorites = storedFavorites.filter(item => typeof item === 'object');

    setIsFavorited(validFavorites.some((item) => item.hrefLink === recipe.hrefLink));
    
  }, [recipe.hrefLink]);

  return (
    <div className={clsx(
      "w-full aspect-video min-h-70 rounded-md relative shadow-md hover:shadow-lg transition-shadow p-3",
      {
        "bg-red-200": colorCard === "red",
        "bg-gray-200": colorCard === "gray",
        "bg-orange-200": colorCard === "orange",
      }
    )}>
      <a href={hrefLink} className="relative">
        <img
          src={image}
          alt={label}
          className="w-full h-1/2 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition-all ease-in-out duration-300"
        />
        <div
          className="w-auto rounded-full p-1.5 bg-white absolute top-2 right-2 cursor-pointer"
          onClick={(e) => handleAddToFavorites(e, recipe, isFavorited, setIsFavorited)}
        >
          <Heart
            className={clsx("transition-all", {
              "text-red-500 fill-red-500": isFavorited, // Warna merah jika sudah difavoritkan
              "hover:text-red-500 hover:fill-red-500": !isFavorited, // Efek hover jika belum difavoritkan
            })}
            width={24}
            height={24}
          />
        </div>
        <h5 className="absolute bottom-2 left-2 text-white font-bold text-lg bg-black bg-opacity-50 px-2 py-1 rounded-lg">
          {label}
        </h5>
      </a>
      <div className="desc-recipes p-2 flex flex-col">
        <h3 className="text-base font-bold">{label}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="tags flex gap-2 mt-6">
          {tagRecipe?.split(",").map((tag, index) => (
            <span
              key={index}
              className={clsx("px-3 py-1 rounded-md text-sm font-semibold", {
                "bg-red-400": colorCard === "red",
                "bg-gray-400": colorCard === "gray",
                "bg-orange-400": colorCard === "orange",
              })}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
