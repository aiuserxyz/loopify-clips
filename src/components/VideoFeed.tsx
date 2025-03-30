
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Video } from "../types/video";

interface VideoFeedProps {
  videos: Video[];
}

const VideoFeed = ({ videos }: VideoFeedProps) => {
  const [feedVideos, setFeedVideos] = useState<Video[]>([]);
  
  useEffect(() => {
    setFeedVideos(videos);
  }, [videos]);

  return (
    <div className="pb-20">
      {feedVideos.map((video, index) => (
        <VideoCard key={video.id} video={video} index={index} />
      ))}
    </div>
  );
};

export default VideoFeed;
