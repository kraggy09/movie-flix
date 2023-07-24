import { useState } from "react";
import SwitchTabs from "./SwitchTabs";
import useFetch from "../hooks/useFetch";
import Carousel from "./Carousel";

const Trending = () => {
  const [endpoint, setEndPoint] = useState("day");
  const { data } = useFetch(`/trending/all/${endpoint}`);
  console.log(data);
  const css = {
    content_wrapper:
      "w-full max-w-[1200px] my-0 mx-auto py-0 px-[20px] flex items-center justify-betweeen",
    text_container: "w-full flex items-center justify-between",
  };
  return (
    <div>
      <div id="content-wrapper" className={css.content_wrapper}>
        <div className={css.text_container} id="text-container">
          <span className="text-xl font-semibold ml-6">Trending</span>
          <span>
            <SwitchTabs
              setEndPoint={setEndPoint}
              endpoint={endpoint}
              data={["Day", "Week"]}
            />
          </span>
        </div>
      </div>
      <div className="md:h-[500px] h-[450px] my-12 flex items-center justify-center">
        <Carousel endpoint={data?.media_type} data={data?.results} />
      </div>
    </div>
  );
};

export default Trending;
