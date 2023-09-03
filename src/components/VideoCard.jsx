import React from "react";
const VideoCard = ({ info }) => {
  let { snippet, statistics } = info || [];
  const { channelTitle, title, thumbnails } = snippet || [];

  return (
    <div>
      <h2>video Cart </h2>
      <img src={thumbnails?.high?.url} alt="thumbnails" />
      <ul>
        <li>{snippet?.title}</li>
        <li>{channelTitle}</li>
        {/* <li>{viewCount}</li> */}
      </ul>
    </div>
  );
};

export default VideoCard;
