import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VedioContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVedios();
  }, []);

  const getVedios = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    const { items } = json;
    console.log(items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VedioContainer;
