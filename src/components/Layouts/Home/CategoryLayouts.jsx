import useFetch from "../../../hooks/useFetch";
import CategoryCard from "../../Fragments/CategoryCard";
import Loader from "../../Fragments/Loader";

const CategoryLayouts = () => {
  const { data, loading, error } = useFetch("categories.php ");

  return (
    <section className="min-h-screen py-8">
      <h1 className="mt-4 mb-8 text-2xl font-bold text-center">
        Our Categories
      </h1>

      {loading ? (
        <div className="max-w-[1200px] mx-auto w-[90%] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="max-w-[1200px] mx-auto w-[90%] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.categories?.map((item, index) => (
            <CategoryCard
              link={`/meals/${item.strCategory}`}
              key={index}
              name={item.strCategory}
              image={item.strCategoryThumb}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryLayouts;
