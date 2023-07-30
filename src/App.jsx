import { useEffect } from "react";

import { fetchApiData } from "./utils/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchResult from "./pages/SearchResult";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genreCalls();
  }, []);

  const fetchApiConfig = async () => {
    const data = await fetchApiData("/configuration");
    console.log(data);
    const url = await {
      backdrop: data.images.secure_base_url + "original",
      poster: data.images.secure_base_url + "original",
      profile: data.images.secure_base_url + "original",
    };
    console.log(url);

    dispatch(getApiConfiguration(url));
  };

  const genreCalls = async () => {
    let promises = [];
    let endpoints = ["tv", "movie"];
    let allGenres = {};
    endpoints.forEach((url) => {
      promises.push(fetchApiData(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    console.log(allGenres);
    dispatch(getGenres(allGenres));
  };
  return (
    <div className="transition-all duration-300 ease-in-out">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
