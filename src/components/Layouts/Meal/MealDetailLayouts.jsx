import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetailLayouts = () => {
  const param = useParams();
  const id = param["meal-id"];
  const [meal, setMeal] = useState([]);

  const getMeal = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(res?.data?.meals);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMeal();
  }, [id]);

  const renderIngrediants = (meal) => {
    const ingrediants = [];
    for (let index = 1; index <= 20; index += 1) {
      const ingrediant = meal[`strIngredient${index}`];
      if (ingrediant) {
        const measure = meal[`strMeasure${index}`];
        const element = (
          <li key={index}>
            <span>{measure}</span>
            <span>-</span>
            <span>{ingrediant}</span>
          </li>
        );
        ingrediants.push(element);
      }
    }
    return ingrediants;
  };

  return (
    <section className="py-8">
      <div className="max-w-[1200px] mx-auto w-[90%]  mt-20">
        {meal?.map((item, index) => (
          <div key={index} className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
            <div>
              <img src={item.strMealThumb} alt="" />
            </div>
            <div>
              <div className="mb-2">
                <h1 className="mb-2 text-xl font-bold">{item.strMeal}</h1>
                <span className="px-2 py-1 text-white rounded-md bg-slate-500">
                  {item.strCategory}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="">Ingredients</span>
                <hr />
                <ul className="grid grid-cols-2 gap-2 mb-4">
                  {renderIngrediants(item)}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <span className="">Ingredients</span>
                <hr />
                {item.strInstructions}
              </div>
              <div className="flex flex-col gap-4 h-96">
                <span className="">Ingredients</span>
                <hr />
                <iframe
                  src={item.strYoutube}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealDetailLayouts;
