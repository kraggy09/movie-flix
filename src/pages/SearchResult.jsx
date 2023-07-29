import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApiData } from "../utils/api";
const SearchResults = () => {
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState(null);
  const { query } = useParams();
  const [loading, setLoading] = useState(false);

  const fetchInitalData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&page=${pageNum}&api_key=358eac06ad033f2a7058ebf5138bfec3`
      );
      const ans = await res.json();
      setLoading(false);
      setData(ans);
      setPageNum((prev) => prev + 1);
      console.log(ans);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNextPage = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&page=${pageNum}&api_key=358eac06ad033f2a7058ebf5138bfec3`
      );
      const ans = await res.json();
      if (ans?.results) {
        setData({ ...data, results: [...data?.results, ...ans.results] });
      } else {
        setData(ans);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchInitalData();
  }, [query]);

  return (
    <div id="searchResult" className="w-[100vw] h-[100vh]">
      {loading && (
        <div className="bg-red-400">
          <svg
            className="animate-spin  h-5 w-5 mr-3"
            viewBox="24 24 24 24"
          ></svg>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
