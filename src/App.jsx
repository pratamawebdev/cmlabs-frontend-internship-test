import { useRoutes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import CategoryPage from "./pages/category";
import MealPage from "./pages/meal";
import SearchPage from "./pages/search";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/meals/:category-name",
    element: <CategoryPage />,
  },
  {
    path: "/meals/:category-name/:meal-id",
    element: <MealPage />,
  },
  {
    path: "/search/:meal-name",
    element: <SearchPage />,
  },
];

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
