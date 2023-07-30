const CardShimmer = () => {
  return (
    <div className=" w-full flex-nowrap flex overflow-x-scroll items-center  overflow-y-auto scrollbar-hide">
      {" "}
      {Array(5)
        .fill("")
        .map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-500 md:h-[256px] h-[156px] min-w-[118px] md:min-w-[244px] rounded-lg flex-nowrap md:mx-6 mx-3 my-3 animate-pulse"
            ></div>
          );
        })}
    </div>
  );
};

export default CardShimmer;
