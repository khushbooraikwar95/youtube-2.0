import React from "react";

const Simmer = () => {
  return (
    <div className="flex flex-wrap " data-testid="shimmer">
      {Array(50)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="  bg-gray-200  h-52 m-4 border w-80 shadow-lg rounded-lg"
          ></div>
        ))}
    </div>
  );
};

export default Simmer;
