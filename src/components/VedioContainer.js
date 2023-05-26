import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "../utils/Simmer";

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

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {/*code for showing ad on youtube*/}
      {/*videos[0] && <AdVideoCard info={videos[0]} />*/}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
