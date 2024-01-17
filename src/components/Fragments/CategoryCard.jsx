import { Link } from "react-router-dom";

const CategoryCard = ({ name, image, link }) => {
  return (
    <Link
      to={link}
      className="transition-transform border border-gray-200 rounded-lg hover:border-gray-300 hover:scale-105"
    >
      <div className="flex items-center justify-between p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-medium">{name}</h3>
        </div>
        <img src={image} alt="" className="w-[100px]" />
      </div>
    </Link>
  );
};

export default CategoryCard;
