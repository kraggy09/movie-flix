import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_KEY = "?api_key=358eac06ad033f2a7058ebf5138bfec3";

export const fetchApiData = async (url, params) => {
  try {
    const res = axios.get(BASE_URL + url + TMDB_KEY);
    return (await res).data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
