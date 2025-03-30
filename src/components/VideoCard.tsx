
import { useState, useEffect } from "react";
import { Video } from "../types/video";
import VideoPlayer from "./VideoPlayer";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
  const [liked, setLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(video.likes);
  const [loops, setLoops] = useState(video.loops);
  const [timeAgo, setTimeAgo] = useState("");
  
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    // Calculate time ago
    const date = new Date(video.createdAt);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (days > 0) {
      setTimeAgo(`${days}d ago`);
    } else if (hours > 0) {
      setTimeAgo(`${hours}h ago`);
    } else {
      setTimeAgo("Just now");
    }
  }, [video.createdAt]);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!liked) {
      setLocalLikes(prev => prev + 1);
    } else {
      setLocalLikes(prev => prev - 1);
    }
    setLiked(!liked);
  };

  const handleLoopsChange = (newLoops: number) => {
    setLoops(video.loops + newLoops);
  };

  return (
    <div 
      ref={ref}
      className={cn(
        "video-card w-full max-w-md mx-auto mb-6 rounded-xl animate-fade-in",
        `animation-delay-${index * 100}`
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-[9/16] md:aspect-[4/5] relative">
        <VideoPlayer 
          src={video.url} 
          autoPlay={inView}
          className="rounded-xl"
          onLoopsChange={handleLoopsChange}
        />
        <div className="video-card-gradient" />
      </div>
      
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg line-clamp-1">{video.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              {video.userAvatar && (
                <img 
                  src={video.userAvatar} 
                  alt={video.username}
                  className="w-6 h-6 rounded-full object-cover" 
                />
              )}
              <span className="text-sm font-medium">@{video.username}</span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-400">{timeAgo}</span>
            </div>
          </div>
          
          <button 
            onClick={handleLike}
            className="flex flex-col items-center"
          >
            <Heart 
              className={cn(
                "w-6 h-6 transition-all", 
                liked ? "fill-brand text-brand animate-pulse-light" : "text-gray-400"
              )} 
            />
            <span className="text-xs mt-1">{localLikes}</span>
          </button>
        </div>
        
        {video.description && (
          <p className="text-sm text-gray-300 mt-2 line-clamp-2">
            {video.description}
          </p>
        )}
        
        <div className="text-xs text-gray-400 mt-2">
          {loops} loops
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
