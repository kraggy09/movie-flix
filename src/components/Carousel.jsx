import { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import CardShimmer from "./CardShimmer";

const Carousel = ({ data, endpoint, similar }) => {
  const [originalData, setOriginalData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setOriginalData(data);
    console.log(originalData);
  }, [data]);
  const [link, setlink] = useState();

  return (
    <div className="flex overflow-x-scroll h-full overflow-y-auto scrollbar-hide my-12">
      {originalData == null ? (
        <CardShimmer />
      ) : (
        originalData?.map((item) => {
          return (
            <div
              className="rounded-lg transition-all ease-in-out duration-300"
              onClick={() => {
                if (endpoint != undefined) {
                  navigate(`/${endpoint}/${item.id}`);
                } else {
                  console.log("No data");
                }
              }}
              key={item.id}
            >
              <Card data={item} similar={similar} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Carousel;
