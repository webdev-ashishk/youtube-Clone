const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info || [];
  const { channelTitle, title, thumbnails } = snippet || [];
  const { viewCount } = statistics || [];
  return (
    <div>
      <h2>video Cart </h2>
      <img src={thumbnails?.medium?.url} alt="thumbnails" />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
