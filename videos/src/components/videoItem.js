import React from "react";
import "./videoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      ></img>
      <div className="content">
        <h4 className="ui header">{video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;
