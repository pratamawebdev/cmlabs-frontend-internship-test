import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      navigate(`/search/${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <form className="relative w-full max-w-xs">
      <input
        className="border-none outline-none bg-[#f2f3f5] px-6 py-3 rounded-[30px] w-full"
        type="text"
        placeholder="Search product..."
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute top-0 right-0 w-5 h-5 mt-4 mr-5 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </form>
  );
};

export default SearchBar;
