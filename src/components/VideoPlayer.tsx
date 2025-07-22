"use client";
import { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, title, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      {/* Video container with thin border - reduced from thick border to 1px */}
      <div className="relative border border-orange-400 rounded-lg overflow-hidden shadow-sm">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={src} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>

        {/* Video overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          {title && (
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
              {title}
            </h2>
          )}
        </div>

        {/* Video controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all"
          >
            {isPlaying ? (
              <FaPause className="text-orange-600 text-lg" />
            ) : (
              <FaPlay className="text-orange-600 text-lg ml-1" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all"
          >
            {isMuted ? (
              <FaVolumeMute className="text-orange-600 text-lg" />
            ) : (
              <FaVolumeUp className="text-orange-600 text-lg" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
