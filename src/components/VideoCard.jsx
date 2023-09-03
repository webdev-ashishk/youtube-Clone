import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info || [];
  const { channelTitle, title, thumbnails } = snippet || [];
  const { viewCount } = statistics || [];
  return (
    <div className="shadow-lg w-72 p-2 m-2 rounded-lg">
      <img
        className="rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnails"
      />
      <ul className="px-2">
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views.</li>
      </ul>
    </div>
  );
};

export default VideoCard;
