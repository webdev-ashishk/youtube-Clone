import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";

const VidoeContainer = () => {
  const [videos, setVideos] = useState([]);
  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  }

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div>
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VidoeContainer;
