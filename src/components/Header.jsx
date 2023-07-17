import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <header className="py-3  bg-opacity-20 backdrop-blur rounded drop-shadow-lg flex w-full text-lg justify-between bg-slate-400 ">
        <div className="ml-12">Logo</div>
        <ul className="flex mr-12 items-center justify-center">
          <li className="px-2">Movies</li>
          <li className="px-2">TV Shows</li>
          <li className="px-2">
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
                setShowSearch(false);
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
