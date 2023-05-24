import React from "react";
import { convertViews } from "../utils/helper";
import VerifiedTick from "../icons/verfiedTick";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  const views = convertViews(statistics.viewCount);
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="flex flex-wrap items-center ">
          {channelTitle} <VerifiedTick />
        </li>

        <li>{views} views </li>
      </ul>
    </div>
  );
};

export default VideoCard;
