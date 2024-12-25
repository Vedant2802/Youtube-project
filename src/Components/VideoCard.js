import React from "react";

const VideoCard = (info) => {
  const { snippet, statistics } = info.info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount}</p>
      </div>
    </div>
  );
};

export default VideoCard;
