import { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Carousel = ({ data, endpoint, similar }) => {
  const [originalData, setOriginalData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setOriginalData(data);
    console.log(originalData);
  }, [data]);
  const [link, setlink] = useState();

  if (originalData == null) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex overflow-x-scroll h-full overflow-y-auto scrollbar-hide my-12">
      {originalData?.map((item) => {
        return (
          <div
            className="rounded-lg"
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
      })}
    </div>
  );
};

export default Carousel;
