import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div
      className={`h-[100vh] w-[60vw] bg-white backdrop-blur-sm ${
        show ? "absolute top-24 z-13 left-[30%] visible" : "hidden"
      }`}
    >
      <div className="flex h-[80%] w-[80%] flex-col  w-full items-center">
        {show && (
          <span className="closeBtn" onClick={hidePopup}>
            Close
          </span>
        )}
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          // playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
