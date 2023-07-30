import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Img from "./Img";

const SearchCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((store) => store.home);
  const res = url.backdrop + data.poster_path;

  const navigate = useNavigate();
  console.log(data);

  return (
    <div
      className="md:h-64 md:my-16 hover:cursor-pointer lg:my-16 h-44 hover:scale-110 transition-all duration-300 ease-in-out w-32 md:w-56 rounded-lg md:mx-6 mx-3 my-6"
      onClick={() => {
        navigate(`/${data.media_type || mediaType}/${data.id}`);
      }}
    >
      <Img
        className={" rounded-xl"}
        src={data?.poster_path ? res : "../../public/NotFound.png"}
      />
    </div>
  );
};

export default SearchCard;
