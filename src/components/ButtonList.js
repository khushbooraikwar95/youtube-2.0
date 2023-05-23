import React from "react";
import Button from "./Button";

const listOfButtons = [
  "Gaming",
  "News",
  "Live",
  "Cricket",
  "News",
  "Cooking",
  "Recently Uploaded",
  "History",
  "Trending",
  "Watched",
  "Thoughts",
  "Mantras",
  "New to you",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {listOfButtons.map((name) => (
        <Button name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
