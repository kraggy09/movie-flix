import { useState } from "react";

const SwitchTabs = ({ data, endpoint, setEndPoint }) => {
  const tab_css =
    "px-4 py-2 rounded-full capitalise hover:cursor-pointer text-lg font-medium transition duration-300 ease-in-out";
  const active_css = "bg-red-500 text-white";
  const inactive_css = "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <div className="bg-gray-200 flex justify-between items-center rounded-full my-4">
      {data.map((item, index) => {
        const isActive = endpoint === item.toLowerCase();
        return (
          <span
            className={`${tab_css} ${isActive ? active_css : inactive_css}`}
            onClick={() => {
              setEndPoint(item.toLowerCase());
            }}
            key={index}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default SwitchTabs;
