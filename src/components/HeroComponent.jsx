import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import ContentWrapper from "./ContentWrapper";
import Img from "./Img";

const HeroComponent = () => {
  const [bg, setBg] = useState("");
  const [searchQuery, setSearhQuery] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((store) => store.home);

  const handleSearchQuery = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`search/${searchQuery}`);
    }
  };
  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const res =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBg(res);
  }, [data]);

  return (
    <div className="relative h-[85vh] pt-[52.35px]  items-center">
      <ContentWrapper>
        <div className="flex bg-white bg-opacity-20 backdrop-blur rounded-b drop-shadow-lg flex-col  items-center justify-center h-[50vh] lg:h-[60vh]">
          <span className="z-10 text-3xl lg:text-5xl text-gray-800">
            Welcome
          </span>
          <span className="text-gray-800 lg:mx-0 my-6 mx-12 text-xl lg:text-2xl">
            Millions of movies,TV shows and people to discover. Explore Now
          </span>
          <div className="w-full flex items-center justify-center h-16">
            <input
              className="lg:w-[600px] lg:text-lg text-gray-400 pl-6 border-none outline-none  w-44 md:w-72 h-10 rounded-l-full bg-slate-200"
              type="text"
              placeholder="Search for movie or TV show.."
              onChange={(e) => setSearhQuery(e.target.value)}
              onKeyUp={handleSearchQuery}
            />
            <button
              className="md:text-xl text-white md:px-6 px-3  bg-red-400 h-10 rounded-r-full"
              onClick={() => navigate(`search/${searchQuery}`)}
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
      {!loading && (
        <div className="absolute opacity-90 h-[50vh] top-0 -z-10">
          <Img
            className={"object-cover h-[60vh] lg:h-[70vh] w-[100vw]"}
            src={bg}
          />
        </div>
      )}
    </div>
  );
};

export default HeroComponent;
