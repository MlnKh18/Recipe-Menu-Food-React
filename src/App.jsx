import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home_page";
import { FavoritePage } from "./pages/favorite_page";
import SideBar from "./components/sidebar";

const App = () => {
  return (
    <div className="flex">
      <SideBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
};

export default App;
