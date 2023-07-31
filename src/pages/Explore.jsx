import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApiData } from "../utils/api";
import Shimmer from "../components/Shimmer";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchCard from "../components/SearchCard";
const Explore = () => {
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { mediaType } = useParams();

  const fetchInitalData = async () => {
    setLoading(true);
    fetchApiData(`/discover/${mediaType}`)
      .then((res) => {
        setData(res);
        setLoading(false);
        setPageNum((prev) => prev + 1);
      })
      .catch((err) => console.log(err));
  };

  const fetchNextPage = async () => {
    const fetchUrl = `https://api.themoviedb.org/3/discover/${mediaType}?page=${pageNum}&api_key=358eac06ad033f2a7058ebf5138bfec3`;
    try {
      const res = await fetch(fetchUrl);
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

  useEffect(() => {
    setPageNum(1);
    fetchInitalData();
  }, [mediaType]);

  return (
    <div id="searchResult" className="xl:mx-36 md:mx-16 mx-3">
      {loading && <Shimmer />}

      {!loading && (
        <div>
          {data?.results?.length > 0 ? (
            <>
              <div className="text-3xl font-bold my-6" id="pageTitle">
                {mediaType === "movie"
                  ? "Explore Top Movies"
                  : "Explore Top TV Shows"}
              </div>

              <InfiniteScroll
                className="flex flex-wrap"
                dataLength={data?.results?.length || []}
                next={() => fetchNextPage()}
                hasMore={pageNum <= data?.total_pages}
                loader={<Shimmer />}
              >
                {data?.results?.map((item, index) => {
                  if (item?.media_type === "peron") {
                    return;
                  }
                  return (
                    <SearchCard
                      key={index}
                      data={item}
                      fromSearch={true}
                      mediaType={mediaType}
                    />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <div className="min-w-full min-h-[80vh] flex items-center justify-center">
              <h1 className="text-3xl font-bold border-red-400 border-2 p-3 rounded-lg ">
                Sorry No Results Found
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Explore;
