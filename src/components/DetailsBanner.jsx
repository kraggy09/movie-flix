import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import useFetch from "../hooks/useFetch";
import Ratng from "./Rating";
import Img from "../components/Img";
import Genre from "./Genre";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useState } from "react";
import VideoPopup from "./VideoPopup";
const DetailsBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((store) => store.home);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const director = crew?.filter((item) => {
    return item.job == "Director";
  });

  const writer = crew?.filter((f) => {
    return f.job === "Screenplay" || f.job === "Story" || f.job === "Writer";
  });

  const _genres = data?.genres?.map((item) => {
    return item.id;
  });
  /**
   *
   *
   *
   */

  const rowSkeleton = "w-full h-6 my-6 rounded-lg bg-gray-500 animate-pulse";
  const left = "lg:w-96 w-64 h-[400px] rounded-xl bg-gray-500 animate-pulse";
  const right = "lg:w-[50%] w-full mt-6";
  const detailsContainer = "mt-16  mb-6";
  const detailsBanner =
    "w-full  flex flex-col lg:flex-row lg:items-center lg:justify-between  lg:px-36 px-3";
  const detailsBannerImg =
    "flex lg:mt-8 w-full  items-center lg:justify-between justify-center";
  const shimmer = "flex justify-around px-6 lg:flex-row flex-col w-full";
  const titleContainer = " mx-3   mt-6   ";
  const detailsInfo = "flex flex-col md:flex-row w-full ";

  //
  //
  //
  return (
    <div className={detailsContainer}>
      {loading ? (
        <div className={shimmer}>
          <div className={left}></div>
          <div className={right}>
            <div className={rowSkeleton}></div>
            <div className={rowSkeleton}></div>
            <div className={rowSkeleton}></div>
            <div className={rowSkeleton}></div>
            <div className={rowSkeleton}></div>
            <div className={rowSkeleton}></div>
            <div className={rowSkeleton}></div>
          </div>
        </div>
      ) : (
        <div className={detailsBanner}>
          <div className={detailsBannerImg}>
            {data?.backdrop_path ? (
              <Img
                className={"h-[80vh] w-[50vh] object-fill  rounded-lg"}
                src={url.backdrop + data?.poster_path}
              />
            ) : (
              <Img
                className={"h-[70vh] border w-[50vh] object-fill  rounded-lg"}
                src={"../../public/NotFound.png"}
              />
            )}
          </div>
          <div id="right" className="w-[90vw]">
            <div className={detailsInfo}>
              <div className={titleContainer}>
                <h1 className="lg:text-4xl font-bold text-xl">
                  {`${data?.title || data?.name} (${dayjs(
                    data?.release_date
                  ).format("YYYY")})`}
                </h1>
                <h2 className="text-gray-400 mt-3 lg:text-xl text-md">
                  {data?.tagline}
                </h2>
              </div>
            </div>
            <div className="flex mx-3  mt-6 ">
              {_genres != null && <Genre genre={_genres} />}
            </div>
            <div
              id="rating"
              onClick={() => {
                setVideoId(video?.key);
                setShow(true);
              }}
              className="mt-6 flex w-full items-center  mx-3"
            >
              <Ratng rating={data?.vote_average.toFixed(1)} />
              <span className="flex items-center hover:text-red-400 ml-8">
                <AiOutlinePlayCircle size={"3.5rem"} />
                <span className="text-lg hover:cursor-pointer">
                  Watch Trailer
                </span>
              </span>
            </div>
            <div
              id="overview"
              className="flex flex-col mt-6 justify-center  mx-3"
            >
              <span className="text-xl lg:text-2xl font-semibold">
                Overview
              </span>
              <span className="mt-3 text-gray-500">{data?.overview}</span>
            </div>
            <div
              id="genreal-info"
              className="flex pb-4 border-b lg:text-lg mt-6 items-center justify-between  mx-3"
            >
              <span id=" status">
                <h1 className="font-semibold">Status:</h1>
                <h3 className="text-gray-400">{data?.status}</h3>
              </span>
              <span id=" release_date">
                <h1 className="font-semibold">Release Date:</h1>
                <h3 className="text-gray-400">
                  {dayjs(data?.release_date).format("MMM DD YYYY")}
                </h3>
              </span>
              <span id=" runtime">
                <h1 className="font-semibold">Runtime:</h1>
                <h3 className="text-gray-400">
                  {data?.runtime ? toHoursAndMinutes(data?.runtime) : "No data"}
                </h3>
              </span>
            </div>
            {director?.length > 0 && (
              <div id="info" className="mt-6 mx-3 pb-3 border-b">
                {" "}
                <span className="font-bold lg:text-lg">Director:</span>
                {director?.map((f, i) => {
                  return (
                    <span key={i} className="ml-3 lg:text-lg text-gray-400">
                      {f?.name}
                      {director.length - 1 !== i && ","}
                    </span>
                  );
                })}
              </div>
            )}
            {writer?.length > 0 && (
              <div id="info" className="mt-6 lg:text-lg mx-3 pb-3 border-b">
                {" "}
                <span className="font-bold">Writer:</span>
                {writer?.map((f, i) => {
                  return (
                    <span key={i} className="ml-3 text-gray-400">
                      {f?.name}
                      {writer.length - 1 !== i && ","}
                    </span>
                  );
                })}
              </div>
            )}
            {data?.created_by?.length > 0 && (
              <div id="info" className="mt-6 mx-3 pb-3 border-b">
                {" "}
                <span className="font-bold">Creator:</span>
                {data?.created_by?.map((f, i) => {
                  return (
                    <span key={i} className="ml-3 text-gray-400">
                      {f?.name}
                      {data?.created_by.length - 1 !== i && ","}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
      <div
        className={`absolute top-0 h-full w-full z-30 ${
          show ? "visible" : "hidden"
        }`}
      >
        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </div>
    </div>
  );
};

export default DetailsBanner;
