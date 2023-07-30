import { useSelector } from "react-redux";
import Img from "./Img";
import dayjs from "dayjs";
import Rating from "./Rating";
import Genre from "./Genre";
import { useNavigate } from "react-router-dom";

const Card = ({ data, similar }) => {
  const { url } = useSelector((store) => store.home);
  const navigate = useNavigate();
  console.log(data);
  const res = url.backdrop + data.poster_path;
  return (
    <div
      onClick={() => {
        if (data?.media_type) {
          navigate(`/${data?.media_type}/${data?.id}`);
        } else {
          navigate(`/${similar}/${data?.id}`);
        }
      }}
      className="md:h-64 hover:cursor-pointer h-44 w-32 md:w-56 rounded-lg mx-6 md:mx-16"
    >
      <div className="relative mb-6">
        {data.poster_path ? (
          <Img src={res} className="rounded-lg" />
        ) : (
          <Img
            className="rounded-lg h-52 w-auto md:h-80"
            src={"../../public/NotFound.png"}
          />
        )}
        <span className="abolute  top-0">
          <Rating
            className={"absolute -bottom-2  -left-2"}
            rating={data?.vote_average?.toFixed(1)}
          />
        </span>
      </div>
      <div className="md:text-lg">
        <div className="text-red-500">
          {(data?.title || data?.name).slice(0, 22)}
        </div>
        <Genre genre={data?.genre_ids} />
        <div className="text-gray-400">
          {dayjs(data?.release_date).format("MMM D, YYYY")}
        </div>
      </div>
    </div>
  );
};

export default Card;
