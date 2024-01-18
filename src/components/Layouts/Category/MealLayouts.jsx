import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../../Fragments/CategoryCard";

const MealLayouts = () => {
  const param = useParams();
  const name = param["category-name"];
  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
      );
      setMeals(res?.data?.meals);
      console.log(res?.data.meals);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMeals();
  }, [name]);

  return (
    <section className="min-h-screen py-16">
      <h1 className="mt-10 mb-8 text-2xl font-bold text-center ">
        Our "{name}" Menus
      </h1>
      <div className="max-w-[1200px] mx-auto w-[90%] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {meals?.map((item, index) => (
          <CategoryCard
            link={`/meals/${name}/${item.idMeal}`}
            key={index}
            name={item.strMeal}
            image={item.strMealThumb}
          />
        ))}
      </div>
    </section>
  );
};

export default MealLayouts;
