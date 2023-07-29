import { AiOutlinePlayCircle } from "react-icons/ai";

import Img from "./Img";
import { useState } from "react";
import VideoPopup from "./VideoPopup";

const Videos = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  return (
    <div className="my-6 lg:my-16">
      <div id="holder" className="lg:px-36  px-3">
        <div className="text-xl md:text-2xl lg:text-3xl my-6  md:font-bold font-semibold ">
          Top Videos
        </div>
      </div>
      <div className="flex hover:cursor-pointer overflow-x-auto flex-row items-start justify-start scrollbar-hide mx-3 lg:mx-36">
        {data?.map((video, index) => {
          console.log("Hello");
          return (
            <div
              key={index}
              id="videoHolder"
              className="h-full relative min-w-[250px] mx-2"
              onClick={() => {
                setShow(true);
                setVideoId(video?.key);
              }}
            >
              {/* Apply margin to create the gap between images */}
              <Img
                className="h-32 "
                src={`https://img.youtube.com/vi/${video?.key}/mqdefault.jpg`}
              />
              <div
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                className="absolute  hover:text-red-400"
              >
                <AiOutlinePlayCircle
                  onMouseOver={({ target }) => (target.style.color = "red")}
                  onMouseOut={({ target }) => (target.style.color = "white")}
                  size={40}
                  color="white "
                />
              </div>
            </div>
          );
        })}
      </div>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default Videos;
