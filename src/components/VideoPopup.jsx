import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  const overlay_syle = {
    position: "fixed",

    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "rgba(0,0,0,.7)",
    zIndex: 1000,
  };
  return (
    <div
      style={overlay_syle}
      onClick={hidePopup}
      className={`h-[100vh] w-[100vw] ${show ? " visible" : "hidden"}`}
    >
      <div
        id="popup"
        className="flex h-full w-full transition-all duration-300 items-center justify-center"
      >
        <div className="flex lg:h-[60%] md:h-[60%]  w-[80%] h-[40%] flex-col lg:w-[50%] items-center">
          {show && (
            <div className="w-full flex items-end justify-end text-white rounded-xl">
              <span className="closeBtn" onClick={hidePopup}>
                Close
              </span>
            </div>
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
    </div>
  );
};

export default VideoPopup;
