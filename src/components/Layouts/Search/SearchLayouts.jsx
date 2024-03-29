import { useParams } from "react-router-dom";
import CategoryCard from "../../Fragments/CategoryCard";
import axios from "axios";
import { useEffect, useState } from "react";
import PreviousButton from "../../Elements/Button/PreviousButton";

const SearchLayouts = () => {
  const param = useParams();
  const name = param["meal-name"];
  const decodedKeyword = decodeURI(name);
  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`
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

  console.log(meals);

  return (
    <section className="min-h-screen py-16">
      <div className="max-w-[1200px] mx-auto w-[90%] mt-12">
        <PreviousButton />
      </div>
      <h1 className="text-2xl font-bold text-center ">Searh for "{name}"</h1>

      <div className="max-w-[1200px] mx-auto w-[90%]">
        {meals?.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {meals?.map((item, index) => (
              <CategoryCard
                link={`/meals/${decodedKeyword}/${item.idMeal}`}
                key={index}
                name={item.strMeal}
                image={item.strMealThumb}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 my-4 h-96">
            <p className="text-2xl font-bold text-center">No data found</p>
            <img
              src="../empty-data.svg"
              alt="empty data"
              className="w-[30%]"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchLayouts;
