import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  const { snippet, statistics } = info;

  console.log("first", snippet, statistics);
  const { channelTitle, title, thumbnails } = snippet;
  console.log("second:", channelTitle, title, thumbnails);

  return <div>khu</div>;
  //   (
  // <div>
  //   <img src={thumbnails.high} alt="thumbnail" />
  //   <ul>
  //     <li>{title}</li>
  //     <li>{channelTitle}</li>
  //     <li>{statistics.viewCount}</li>
  //   </ul>
  // </div>
  //   );
};

export default VideoCard;
