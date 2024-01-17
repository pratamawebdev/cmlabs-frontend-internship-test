import SearchBar from "../../Elements/Input/SearchBar";

const HeroLayouts = () => {
  return (
    <section className="p-4 hero">
      <div className="max-w-[1200px] mx-auto w-[90%] flex flex-col items-center justify-center h-screen gap-1">
        <p className="text-gray-300">Savor the Flavors</p>
        <h1 className="mb-6 text-3xl font-bold text-center text-white">
          What's your favorite food?
        </h1>
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroLayouts;
