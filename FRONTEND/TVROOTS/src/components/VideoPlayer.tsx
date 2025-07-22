import React from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, title, className }) => {
  return (
    <video
      src={src}
      poster={poster}
      title={title}
      className={className}
      controls
      preload="metadata"
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
