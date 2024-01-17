import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";
import CategoryLayouts from "../components/Layouts/Home/CategoryLayouts";
import HeroLayouts from "../components/Layouts/Home/HeroLayouts";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroLayouts />
      <CategoryLayouts />
      <Footer />
    </>
  );
};

export default HomePage;
