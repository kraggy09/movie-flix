import React from "react";
import { useSelector } from "react-redux";

const Genre = ({ genre }) => {
  const { genres } = useSelector((store) => store.home);

  return (
    <div className="flex flex-col flex-wrap w-full">
      {genre.map((item, index) => {
        if (index < 2) {
          return (
            <div
              className="bg-red-400 text-center rounded-lg px-2 py-0.5 mr-6 my-1 text-white"
              key={item}
            >
              {genres[item]?.name}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Genre;
