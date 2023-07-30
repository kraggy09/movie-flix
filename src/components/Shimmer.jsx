const Shimmer = () => {
  return (
    <div className="flex min-w-full min-h-full flex-wrap">
      {" "}
      {Array(15)
        .fill("")
        .map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-500 md:h-64 h-44 w-32 md:w-56 rounded-lg md:mx-6 mx-3 my-3 animate-pulse"
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
