import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <header className="md:py-3 bg-opacity-20 backdrop-blur rounded drop-shadow-lg flex w-full text-lg justify-between bg-slate-400 ">
        <div
          className="md:ml-12  text-red-400 hover:text-red-600 font-bold text-2xl hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          MOVIEFLIX96
        </div>
        <ul className="flex md:mr-12 items-center justify-center">
          <li
            className="px-2 hover:cursor-pointer hover:text-red-400"
            onClick={() => {
              navigate(`/explore/movie`);
            }}
          >
            Movies
          </li>
          <li
            className="px-2 hover:cursor-pointer hover:text-red-400"
            onClick={() => {
              navigate(`/explore/tv`);
            }}
          >
            TV Shows
          </li>
          <li className="px-2  hover:cursor-pointer hover:text-red-400">
            <HiOutlineSearch onClick={() => setShowSearch(true)} />
          </li>
        </ul>
      </header>
      {showSearch && (
        <div className="flex relative justify-between  items-center">
          <input
            type="text"
            onKeyUp={(e) => {
              if (e.key === "Enter" && query.length > 0) {
                navigate(`/search/${query}`);
                setTimeout(() => {
                  setShowSearch(false);
                }, 1000);
              }
            }}
            placeholder="Search for Movies or TV shows...."
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-10 pl-6 text-lg bg-slate-300 border-none outline-none"
          />
          <VscChromeClose
            onClick={() => setShowSearch(false)}
            className="text-lg right-2 absolute mr-3"
          />
        </div>
      )}
    </>
  );
};

export default Header;
