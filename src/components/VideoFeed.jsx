
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

const VideoFeed = ({ videos }) => {
  const [feedVideos, setFeedVideos] = useState([]);
  
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
