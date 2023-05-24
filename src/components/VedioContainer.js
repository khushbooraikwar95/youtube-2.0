import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
